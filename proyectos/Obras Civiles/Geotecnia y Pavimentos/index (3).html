function fmt(n, d=2){
  if(!isFinite(n)) return "—";
  return Number(n).toLocaleString('es-AR',{maximumFractionDigits:d, minimumFractionDigits:d});
}
function get(id){return document.getElementById(id)}
function calcEffective(){
  const z=+get('z_eff')?.value||0, gamma=+get('gamma_eff')?.value||0, zw=+get('zw_eff')?.value||0, gw=+get('gw_eff')?.value||9.81;
  const sigma=gamma*z;
  const u=z>zw?gw*(z-zw):0;
  const sp=sigma-u;
  const msg=sp<25?'esfuerzo efectivo bajo: revisar sensibilidad a remoldeo, saturación y asentamientos.':sp<150?'rango habitual de trabajo superficial: cruzar con resistencia y compresibilidad.':'esfuerzo efectivo alto: controlar incremento por cargas y posible compresión virgen.';
  get('res_eff').innerHTML=`σ = ${fmt(sigma)} kPa · u = ${fmt(u)} kPa · σ' = ${fmt(sp)} kPa <small>${msg}</small>`;
}
function calcConsolidation(){
  const H=+get('H_cons')?.value||0, e0=+get('e0_cons')?.value||0, Cc=+get('Cc_cons')?.value||0, s0=+get('s0_cons')?.value||1, ds=+get('ds_cons')?.value||0;
  const sf=s0+ds;
  const S=(Cc*H/(1+e0))*Math.log10(sf/s0);
  const mm=S*1000;
  const crit=mm<25?'asentamiento bajo para muchas obras, revisar diferencial.':mm<75?'asentamiento moderado: controlar servicio y rigidez estructural.':'asentamiento alto: evaluar precarga, drenes, reemplazo, mejora o cimentación profunda.';
  get('res_cons').innerHTML=`S primaria ≈ ${fmt(mm,1)} mm <small>${crit}</small>`;
}
function calcTriaxial(){
  const condition=get('triax_condition')?.value;
  let out='';
  if(condition==='rapid_clay') out='Recomendado: UU o CU con interpretación no drenada. Parámetro clave: Su. Útil para corto plazo: excavación rápida, terraplén rápido o carga inicial.';
  if(condition==='long_clay') out='Recomendado: CU con presión de poros o CD si el tiempo permite drenaje. Parámetros clave: c’ y φ’. Útil para estabilidad a largo plazo y asentamientos acoplados.';
  if(condition==='sand') out='Recomendado: CD o corte directo drenado. Parámetro clave: φ’ y dilatancia. Controlar densidad relativa y confinamiento.';
  if(condition==='slope') out='Recomendado: CU con u medida para trayectoria realista; complementar con corte directo residual si hay superficie reactivada.';
  get('res_triax').innerHTML=`${out}<small>Regla: no mezclar Su con c’/φ’. Definí primero corto plazo vs largo plazo.</small>`;
}
function calcCBR(){
  const cbr=+get('cbr_pav')?.value||0, ip=+get('ip_pav')?.value||0, gc=+get('gc_pav')?.value||0;
  let soporte=cbr<3?'muy pobre':cbr<5?'pobre':cbr<10?'regular':cbr<20?'bueno':'muy bueno';
  let action=[];
  if(cbr<5) action.push('mejorar subrasante, reemplazar, estabilizar o aumentar paquete estructural');
  if(ip>12) action.push('controlar plasticidad: riesgo de bombeo, expansión y pérdida de soporte con agua');
  if(gc<95) action.push('no aceptar capa sin recompatar o ajustar humedad');
  if(action.length===0) action.push('validar drenaje, uniformidad y especificación del proyecto');
  get('res_cbr').innerHTML=`Soporte ${soporte}. <small>Decisión: ${action.join('; ')}.</small>`;
}
function calcRankine(){
  const phi=(+get('phi_rank')?.value||0)*Math.PI/180, H=+get('H_rank')?.value||0, gam=+get('gamma_rank')?.value||0, q=+get('q_rank')?.value||0;
  const Ka=(1-Math.sin(phi))/(1+Math.sin(phi));
  const Pa=0.5*Ka*gam*H*H + Ka*q*H;
  get('res_rank').innerHTML=`Ka ≈ ${fmt(Ka,3)} · Pa ≈ ${fmt(Pa)} kN/m <small>Preliminar Rankine. En obra controlar agua, sobrecargas, deformaciones admisibles y secuencia.</small>`;
}
function calcDCP(){
  const dpi=+get('dpi_dcp')?.value||0;
  const cbr=dpi>0?292/Math.pow(dpi,1.12):0;
  const txt=cbr<5?'subrasante débil o húmeda: verificar con CBR, humedad y densidad.':cbr<10?'soporte regular: revisar uniformidad y drenaje.':'soporte aceptable preliminar: no reemplaza especificación.';
  get('res_dcp').innerHTML=`CBR estimado ≈ ${fmt(cbr,1)} % <small>${txt} Correlación orientativa; calibrar localmente.</small>`;
}
function calcPhase(){
  const Gs=+get('Gs_phase')?.value||2.65, gd=+get('gd_phase')?.value||1, w=+get('w_phase')?.value||0, gw=9.81;
  const e=(Gs*gw/gd)-1;
  const n=(e/(1+e))*100;
  let Sr=e>0?(w*Gs/e):0;
  const gh=gd*(1+w/100);
  let txt;
  if(e<=0) txt='γd implica e≤0: revisar Gs y γd, esa combinación no es físicamente posible.';
  else if(Sr>100) txt='Sr>100%: revisar γd, Gs o w; los datos no son consistentes entre sí.';
  else if(Sr<50) txt='predominio de aire en los vacíos: revisar colapso o cambios de volumen al humedecer.';
  else if(Sr<90) txt='saturación parcial significativa: revisar presión de poros ante carga rápida.';
  else txt='prácticamente saturado: analizar en esfuerzos efectivos y verificar presión de poros.';
  get('res_phase').innerHTML=`e ≈ ${fmt(e,2)} · n ≈ ${fmt(n,1)}% · Sr ≈ ${fmt(Sr,1)}% · γ ≈ ${fmt(gh,2)} kN/m³ <small>${txt}</small>`;
}
function calcPCI(){
  const pci=Math.max(0,Math.min(100,+get('pci_val')?.value||0));
  let cond,acc;
  if(pci>=85){cond='Excelente';acc='mantenimiento rutinario/preventivo.';}
  else if(pci>=70){cond='Muy bueno';acc='sellado de fisuras y mantenimiento preventivo.';}
  else if(pci>=55){cond='Bueno';acc='mantenimiento correctivo localizado.';}
  else if(pci>=40){cond='Regular';acc='rehabilitación menor: fresado y recapado parcial.';}
  else if(pci>=25){cond='Malo';acc='rehabilitación mayor; evaluar la estructura.';}
  else {cond='Muy malo / fallado';acc='reconstrucción; el mantenimiento ya no es eficiente.';}
  get('res_pci').innerHTML=`Condición: ${cond}. <small>Acción típica: ${acc}</small>`;
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-calc]').forEach(btn=>{
    btn.addEventListener('click',()=>{window[btn.dataset.calc]?.()});
  });
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const group=btn.closest('.tabs').dataset.tabs;
      document.querySelectorAll(`.tab-btn[data-target][data-group="${group}"]`).forEach(b=>b.classList.remove('active'));
      document.querySelectorAll(`.tab-panel[data-group="${group}"]`).forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      get(btn.dataset.target)?.classList.add('active');
    });
  });
});
