
(function(){
  const DATA = window.CIVILSCOPE_DATA;
  const section = document.body.dataset.section;
  const imgBase = document.body.dataset.imgbase || '../assets/img/';
  const root = document.getElementById('app');
  if(!section || !DATA || !root) return;
  const S = DATA[section];
  document.title = `${S.title} | CivilScope Obras Civiles`;
  document.getElementById('pageTitle').textContent = S.title;
  document.getElementById('pageSubtitle').textContent = S.subtitle;
  document.getElementById('pageIntro').textContent = S.intro;
  const menu = document.getElementById('moduleMenu');
  const q = document.getElementById('searchInput');
  const empty = document.getElementById('empty');
  let selected = S.modules[0].id;
  function matches(m, term){
    if(!term) return true;
    const hay = [m.title,m.tag,m.objective,m.graph,m.practice, ...(m.alerts||[]), ...((m.parameters||[]).flat())].join(' ').toLowerCase();
    return hay.includes(term.toLowerCase());
  }
  function renderMenu(){
    const term = q.value.trim();
    const mods = S.modules.filter(m=>matches(m,term));
    menu.innerHTML = mods.map(m=>`<button data-id="${m.id}" class="${m.id===selected?'active':''}">${m.title}<br><span style="color:#94a3b8;font-size:.76rem">${m.tag}</span></button>`).join('');
    empty.style.display = mods.length?'none':'block';
    if(mods.length && !mods.find(m=>m.id===selected)){ selected = mods[0].id; renderModule(); renderMenu(); }
    menu.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.id; renderModule(); renderMenu(); window.scrollTo({top:0,behavior:'smooth'});}));
  }
  function rows(params){
    return `<table><thead><tr><th>Parámetro / valor</th><th>Lectura técnica</th><th>Qué hacer en obra</th></tr></thead><tbody>${(params||[]).map(r=>`<tr><td><strong style="color:#fde68a">${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table>`;
  }
  function calcHTML(type){
    if(!type) return '';
    const templates = {
      compactacion:`<div class="calc" data-calc="compactacion"><h3>Calculadora rápida · Grado de compactación</h3><div class="calc-grid"><label>γd campo<input name="gd" type="number" value="1.82" step="0.01"></label><label>γd máx Proctor<input name="gmax" type="number" value="1.95" step="0.01"></label></div><output></output></div>`,
      consolidacion:`<div class="calc" data-calc="consolidacion"><h3>Calculadora rápida · Asentamiento primario</h3><div class="calc-grid"><label>H capa (m)<input name="H" type="number" value="4" step="0.1"></label><label>Cc<input name="Cc" type="number" value="0.30" step="0.01"></label><label>e0<input name="e0" type="number" value="0.90" step="0.01"></label><label>σ'0 (kPa)<input name="s0" type="number" value="80" step="1"></label><label>Δσ (kPa)<input name="ds" type="number" value="60" step="1"></label></div><output></output><p style="color:#94a3b8;font-size:.86rem">Fórmula orientativa: S = Cc·H/(1+e0)·log10((σ'0+Δσ)/σ'0). Verificar OCR y σ'p.</p></div>`,
      mohr:`<div class="calc" data-calc="mohr"><h3>Calculadora rápida · Mohr-Coulomb efectivo</h3><div class="calc-grid"><label>σ total (kPa)<input name="s" type="number" value="150" step="1"></label><label>u (kPa)<input name="u" type="number" value="40" step="1"></label><label>c' (kPa)<input name="c" type="number" value="10" step="1"></label><label>φ' (°)<input name="phi" type="number" value="30" step="1"></label></div><output></output></div>`,
      esfuerzos:`<div class="calc" data-calc="esfuerzos"><h3>Calculadora rápida · Esfuerzo efectivo</h3><div class="calc-grid"><label>γsat (kN/m³)<input name="gsat" type="number" value="20" step="0.1"></label><label>z bajo NF (m)<input name="z" type="number" value="5" step="0.1"></label><label>γw (kN/m³)<input name="gw" type="number" value="9.81" step="0.01"></label></div><output></output></div>`,
      rankine:`<div class="calc" data-calc="rankine"><h3>Calculadora rápida · Rankine en arena horizontal</h3><div class="calc-grid"><label>φ' (°)<input name="phi" type="number" value="30" step="1"></label><label>γ (kN/m³)<input name="g" type="number" value="18" step="0.1"></label><label>H muro (m)<input name="H" type="number" value="4" step="0.1"></label></div><output></output></div>`,
      talud:`<div class="calc" data-calc="talud"><h3>Calculadora rápida · Talud infinito drenado</h3><div class="calc-grid"><label>c' (kPa)<input name="c" type="number" value="5" step="1"></label><label>γ (kN/m³)<input name="g" type="number" value="18" step="0.1"></label><label>z plano (m)<input name="z" type="number" value="2" step="0.1"></label><label>β pendiente (°)<input name="beta" type="number" value="25" step="1"></label><label>φ' (°)<input name="phi" type="number" value="30" step="1"></label></div><output></output></div>`,
      pavimento:`<div class="calc" data-calc="pavimento"><h3>Semáforo rápido · Subrasante</h3><div class="calc-grid"><label>CBR (%)<input name="cbr" type="number" value="6" step="0.5"></label><label>IP (%)<input name="ip" type="number" value="18" step="1"></label><label>Compactación (%)<input name="gc" type="number" value="94" step="0.5"></label></div><output></output></div>`
    };
    return templates[type]||'';
  }
  function initCalcs(){
    root.querySelectorAll('.calc').forEach(c=>{
      const type = c.dataset.calc; const out = c.querySelector('output');
      function v(n){return parseFloat(c.querySelector(`[name="${n}"]`)?.value||0)}
      function run(){
        if(type==='compactacion'){ const gc=v('gd')/v('gmax')*100; out.textContent=`Gc = ${gc.toFixed(1)}% · ${gc>=95?'Aceptación usual exigente':gc>=90?'Condicionado: revisar especificación':'No cumple: corregir humedad/proceso y recompatar'}`; }
        if(type==='consolidacion'){ const S=v('Cc')*v('H')/(1+v('e0'))*Math.log10((v('s0')+v('ds'))/v('s0')); out.textContent=`Asentamiento estimado S ≈ ${(S*1000).toFixed(0)} mm · verificar σ'p, OCR y drenaje.`; }
        if(type==='mohr'){ const se=v('s')-v('u'); const tau=v('c')+se*Math.tan(v('phi')*Math.PI/180); out.textContent=`σ' = ${se.toFixed(1)} kPa · τf ≈ ${tau.toFixed(1)} kPa`; }
        if(type==='esfuerzos'){ const st=v('gsat')*v('z'); const u=v('gw')*v('z'); out.textContent=`σ = ${st.toFixed(1)} kPa · u = ${u.toFixed(1)} kPa · σ' = ${(st-u).toFixed(1)} kPa`; }
        if(type==='rankine'){ const ph=v('phi')*Math.PI/180; const Ka=(1-Math.sin(ph))/(1+Math.sin(ph)); const Kp=(1+Math.sin(ph))/(1-Math.sin(ph)); const Pa=0.5*Ka*v('g')*v('H')**2; out.textContent=`Ka=${Ka.toFixed(2)} · Kp=${Kp.toFixed(2)} · Pa≈${Pa.toFixed(1)} kN/m sin agua ni sobrecarga`; }
        if(type==='talud'){ const b=v('beta')*Math.PI/180, ph=v('phi')*Math.PI/180; const FS=(v('c')+(v('g')*v('z')*Math.cos(b)**2)*Math.tan(ph))/(v('g')*v('z')*Math.sin(b)*Math.cos(b)); out.textContent=`FS ≈ ${FS.toFixed(2)} · ${FS<1.0?'Crítico':FS<1.3?'Bajo / revisar':'Preliminarmente aceptable, verificar'} `; }
        if(type==='pavimento'){ let score=0; if(v('cbr')<3) score+=3; else if(v('cbr')<8) score+=2; else if(v('cbr')<20) score+=1; if(v('ip')>20) score+=2; else if(v('ip')>12) score+=1; if(v('gc')<90) score+=3; else if(v('gc')<95) score+=1; out.textContent = score>=5?'ROJO: mejorar/reemplazar, revisar drenaje y rediseñar':score>=3?'AMARILLO: condicionado, controlar humedad/plasticidad/compactación':'VERDE preliminar: verificar especificación y uniformidad'; }
      }
      c.querySelectorAll('input').forEach(i=>i.addEventListener('input',run)); run();
    });
  }
  function renderModule(){
    const m = S.modules.find(x=>x.id===selected) || S.modules[0];
    root.innerHTML = `<article class="module"><div class="module-head"><div><h2>${m.title}</h2><p style="color:#94a3b8;margin:.35rem 0 0">${m.objective}</p></div><span class="tag">${m.tag}</span></div><div class="visual"><div><img src="${imgBase}${m.img}" alt="${m.title}"></div><div><div class="box"><strong>Cómo leer el gráfico:</strong><br>${m.graph}</div><div class="box"><strong>Aplicación en obra:</strong><br>${m.practice}</div><div class="box warn"><strong>Alertas técnicas:</strong><br><ul>${(m.alerts||[]).map(a=>`<li>${a}</li>`).join('')}</ul></div></div></div><h3 style="color:#fde68a;margin-top:20px">Tabla de interpretación práctica</h3>${rows(m.parameters)}${calcHTML(m.calc)}<div class="pillrow"><span class="pill">criterio técnico</span><span class="pill">gráfico propio</span><span class="pill">sin archivos privados</span></div></article>`;
    initCalcs();
  }
  q.addEventListener('input',()=>{renderMenu();});
  renderMenu(); renderModule();
})();
