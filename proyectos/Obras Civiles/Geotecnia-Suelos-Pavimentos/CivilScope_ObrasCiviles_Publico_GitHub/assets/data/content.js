window.CIVILSCOPE_DATA = {
  "suelos": {
    "title": "Mecánica de Suelos",
    "subtitle": "Ensayos, parámetros e interpretación para obra",
    "intro": "Entiende el suelo como material: clasificación, agua, compactación, deformación, drenaje y resistencia. Cada módulo tiene gráfico propio, lectura práctica y decisión técnica.",
    "accent": "#38bdf8",
    "modules": [
      {
        "id": "visual",
        "title": "Identificación visual-manual",
        "img": "visual_manual.svg",
        "tag": "campo",
        "objective": "Reconocer el suelo antes de ensayarlo: grava, arena, limo, arcilla, orgánico o relleno.",
        "graph": "El esquema separa el comportamiento dominante: gravas/arenas dependen de granulometría y densidad; limos/arcillas dependen más de agua, plasticidad y estructura.",
        "practice": "En obra sirve para decidir qué ensayos pedir, cómo manipular la muestra y qué riesgos iniciales esperar.",
        "parameters": [
          [
            "Humedad",
            "seca / húmeda / saturada",
            "Controlar trabajabilidad y bombeo"
          ],
          [
            "Consistencia",
            "blanda a dura",
            "Orientar resistencia no drenada en arcillas"
          ],
          [
            "Orgánicos",
            "olor/color oscuro",
            "No fundar ni rellenar sin tratamiento"
          ]
        ],
        "alerts": [
          "No clasificar un suelo fino sólo por color.",
          "Un relleno heterogéneo exige más control que un estrato natural uniforme."
        ]
      },
      {
        "id": "granulometria",
        "title": "Granulometría",
        "img": "granulometria.svg",
        "tag": "curva",
        "objective": "Medir la distribución de tamaños de partículas y detectar gravas, arenas y finos.",
        "graph": "Una curva extendida y suave indica mejor graduación; una curva casi vertical indica material uniforme; una cola alta de finos anticipa sensibilidad al agua.",
        "practice": "Se usa para bases, subbases, filtros, drenajes, rellenos y clasificación SUCS/AASHTO.",
        "parameters": [
          [
            "% pasa No.200",
            "finos",
            "Alto contenido reduce drenaje y soporte"
          ],
          [
            "Cu",
            "uniformidad",
            "Cu alto suele indicar mejor distribución"
          ],
          [
            "Cc",
            "curvatura",
            "Ayuda a detectar huecos granulométricos"
          ]
        ],
        "alerts": [
          "Una curva aceptable no garantiza baja plasticidad: cruzar con Atterberg.",
          "En pavimentos, exceso de finos puede generar bombeo y pérdida de soporte."
        ]
      },
      {
        "id": "atterberg",
        "title": "Límites de Atterberg",
        "img": "atterberg.svg",
        "tag": "plasticidad",
        "objective": "Determinar cómo cambia el suelo fino con el contenido de agua.",
        "graph": "La carta de plasticidad separa limos y arcillas, y baja/alta plasticidad. IP alto significa mayor rango de comportamiento plástico.",
        "practice": "Sirve para prever expansión, retracción, pérdida de soporte, trabajabilidad y sensibilidad al agua.",
        "parameters": [
          [
            "LL",
            "límite líquido",
            "Más alto: más compresibilidad potencial"
          ],
          [
            "LP",
            "límite plástico",
            "Marca inicio de comportamiento plástico"
          ],
          [
            "IP = LL-LP",
            "plasticidad",
            "IP alto: controlar agua y expansión"
          ],
          [
            "IL",
            "estado respecto a LL/LP",
            "IL alto: suelo cercano a estado blando o líquido"
          ]
        ],
        "alerts": [
          "No usar un suelo con IP alto como subrasante sin evaluar estabilización o reemplazo.",
          "Un suelo plástico seco puede parecer firme, pero perder soporte al humedecerse."
        ]
      },
      {
        "id": "fases",
        "title": "Relaciones de fase y Gs",
        "img": "fases.svg",
        "tag": "cálculo base",
        "objective": "Relacionar pesos, volúmenes, agua, aire y sólidos.",
        "graph": "El diagrama muestra que el suelo es un sistema de tres fases; cambiar agua o vacíos cambia peso unitario, resistencia y deformabilidad.",
        "practice": "Base para compactación, consolidación, empujes, esfuerzos efectivos y control de laboratorio.",
        "parameters": [
          [
            "w",
            "humedad gravimétrica",
            "Comparar con humedad óptima"
          ],
          [
            "e",
            "relación de vacíos",
            "Mayor e suele implicar más compresibilidad"
          ],
          [
            "Sr",
            "grado de saturación",
            "Clave para presión de poros"
          ],
          [
            "Gs",
            "gravedad específica",
            "Necesaria para cálculos de fase e hidrómetro"
          ]
        ],
        "alerts": [
          "La humedad sola no dice todo: mirar densidad seca y saturación."
        ]
      },
      {
        "id": "permeabilidad",
        "title": "Permeabilidad",
        "img": "permeabilidad.svg",
        "tag": "agua",
        "objective": "Medir la facilidad con la que el agua fluye por los vacíos del suelo.",
        "graph": "Darcy relaciona caudal, gradiente hidráulico, área y k. k alto drena rápido; k bajo retiene presión de poros.",
        "practice": "Define drenaje en excavaciones, taludes, filtros, bases granulares y consolidación.",
        "parameters": [
          [
            "k > 10⁻³ m/s",
            "muy permeable",
            "Gravas/arenas limpias; revisar erosión interna"
          ],
          [
            "10⁻⁵ a 10⁻⁷ m/s",
            "baja a media",
            "Limos/arenas finas; revisar bombeo"
          ],
          [
            "< 10⁻⁹ m/s",
            "muy baja",
            "Arcillas; consolidación lenta"
          ]
        ],
        "alerts": [
          "La napa en excavación no perdona: si no hay drenaje, aparece por donde menos conviene."
        ]
      },
      {
        "id": "compactacion",
        "title": "Compactación / Proctor",
        "img": "proctor.svg",
        "tag": "control",
        "objective": "Obtener humedad óptima y densidad seca máxima para un esfuerzo de compactación.",
        "graph": "La curva Proctor tiene un máximo: antes falta agua para reacomodar partículas; después sobra agua y baja la densidad seca.",
        "practice": "Referencia para controlar terraplenes, zanjas, subrasante, base y subbase.",
        "parameters": [
          [
            "wopt",
            "humedad óptima",
            "Compactar cerca de esta ventana"
          ],
          [
            "γd máx",
            "densidad seca máxima",
            "Base para grado de compactación"
          ],
          [
            "Energía",
            "normal/modificada",
            "Elegir según especificación y uso"
          ]
        ],
        "alerts": [
          "Más pasadas no corrigen un suelo fuera de humedad: primero se corrige agua."
        ],
        "calc": "compactacion"
      },
      {
        "id": "densidad",
        "title": "Densidad de campo",
        "img": "densidad_campo.svg",
        "tag": "aceptación",
        "objective": "Verificar si la capa alcanzó la densidad exigida en obra.",
        "graph": "El cono de arena mide volumen de excavación; con masa y humedad se obtiene γd de campo.",
        "practice": "Permite aceptar, rechazar, humedecer, airear o recompatar una capa.",
        "parameters": [
          [
            "Gc < 90%",
            "deficiente",
            "Revisar proceso completo"
          ],
          [
            "90-95%",
            "condicionado",
            "Depende de capa y especificación"
          ],
          [
            ">95%",
            "control usual",
            "Frecuente en bases/subbases/rellenos seleccionados"
          ]
        ],
        "alerts": [
          "No tapar una capa rechazada: se vuelve un problema enterrado con fecha de vencimiento."
        ]
      },
      {
        "id": "consolidacion",
        "title": "Consolidación unidimensional",
        "img": "consolidacion.svg",
        "tag": "asentamientos",
        "objective": "Determinar magnitud y velocidad de asentamiento por expulsión de agua en suelos finos confinados lateralmente.",
        "graph": "La curva e-log σ’ permite separar recompresión y compresión virgen. Al superar σ’p, el asentamiento crece mucho más.",
        "practice": "Se aplica en arcillas blandas, terraplenes, rellenos, zapatas, plateas, precargas y drenes verticales.",
        "parameters": [
          [
            "Cc < 0.10",
            "baja compresibilidad",
            "Asentamientos usualmente menores"
          ],
          [
            "Cc 0.10-0.30",
            "compresibilidad media",
            "Verificar asentamiento admisible"
          ],
          [
            "Cc 0.30-0.50",
            "alta",
            "Evaluar precarga/mejoramiento"
          ],
          [
            "Cc > 0.50",
            "muy alta",
            "Riesgo importante de asentamientos"
          ],
          [
            "OCR ≈ 1",
            "normalmente consolidado",
            "Más sensible a carga nueva"
          ],
          [
            "OCR > 2",
            "sobreconsolidado",
            "Menor deformación en recompresión"
          ],
          [
            "Cv bajo",
            "consolidación lenta",
            "Puede requerir etapas o drenes"
          ]
        ],
        "alerts": [
          "El ensayo no responde capacidad portante: responde deformación y tiempo.",
          "Si la obra supera σ’p, la arcilla entra en zona peligrosa de compresión virgen."
        ],
        "calc": "consolidacion"
      },
      {
        "id": "inconfinada",
        "title": "Compresión inconfinada",
        "img": "inconfinada.svg",
        "tag": "arcillas",
        "objective": "Estimar resistencia a compresión simple en suelos cohesivos, sin confinamiento lateral.",
        "graph": "La curva esfuerzo-deformación da qu. Para arcillas saturadas en no drenado se usa Su ≈ qu/2.",
        "practice": "Control rápido de arcillas a corto plazo, muestras inalteradas y sensibilidad por remoldeo.",
        "parameters": [
          [
            "Su < 12.5 kPa",
            "muy blanda",
            "Riesgo alto de asentamiento/falla"
          ],
          [
            "12.5-25 kPa",
            "blanda",
            "Cuidado con excavaciones y cargas"
          ],
          [
            "25-50 kPa",
            "media",
            "Requiere verificación"
          ],
          [
            "50-100 kPa",
            "rígida",
            "Mejor comportamiento"
          ],
          [
            ">100 kPa",
            "muy rígida/dura",
            "Aun así revisar fisuración y estructura"
          ]
        ],
        "alerts": [
          "No aplicar como receta en suelos granulares."
        ]
      },
      {
        "id": "corte",
        "title": "Corte directo",
        "img": "corte_directo.svg",
        "tag": "resistencia",
        "objective": "Obtener parámetros de resistencia sobre un plano de corte impuesto.",
        "graph": "Varios esfuerzos normales generan una envolvente τ = c + σ tan φ.",
        "practice": "Útil para taludes, muros, cimentaciones y contacto suelo-estructura, especialmente en condiciones drenadas.",
        "parameters": [
          [
            "c",
            "cohesión aparente/efectiva",
            "No tratarla como constante mágica"
          ],
          [
            "φ",
            "fricción",
            "Aumenta con densidad y trabazón"
          ],
          [
            "τf",
            "resistencia al corte",
            "Comparar con esfuerzo actuante"
          ]
        ],
        "alerts": [
          "El plano de falla es impuesto; no siempre representa el mecanismo real."
        ]
      },
      {
        "id": "triaxial",
        "title": "Ensayos triaxiales UU / CU / CD",
        "img": "triaxial.svg",
        "tag": "resistencia avanzada",
        "objective": "Determinar resistencia y deformabilidad bajo confinamiento controlado.",
        "graph": "Los círculos de Mohr y la envolvente permiten obtener Su, c’, φ’ y respuesta esfuerzo-deformación según drenaje.",
        "practice": "Se usa para cimentaciones, taludes, presas, excavaciones, contenciones y análisis corto/largo plazo.",
        "parameters": [
          [
            "UU",
            "rápido, no drenado",
            "Corto plazo en arcillas saturadas; entrega Su"
          ],
          [
            "CU",
            "consolida y falla sin drenaje",
            "Transición; puede medir presión de poros y obtener c’, φ’"
          ],
          [
            "CD",
            "drenado",
            "Largo plazo en arenas o cargas lentas; entrega c’, φ’"
          ],
          [
            "u",
            "presión de poros",
            "Clave para pasar de esfuerzos totales a efectivos"
          ]
        ],
        "alerts": [
          "No mezclar Su con c’ y φ’ como si fueran el mismo idioma.",
          "El ensayo se elige por el problema de obra, no por costumbre del laboratorio."
        ],
        "calc": "mohr"
      },
      {
        "id": "seleccion",
        "title": "Matriz rápida: qué ensayo pedir",
        "img": "triaxial.svg",
        "tag": "criterio",
        "objective": "Conectar problema de obra con ensayo útil.",
        "graph": "La elección depende de si domina clasificación, compactación, drenaje, deformación o resistencia.",
        "practice": "Evita pedir ensayos caros que no responden la pregunta técnica.",
        "parameters": [
          [
            "¿Sirve como relleno/base?",
            "Granulometría + Atterberg + Proctor + densidad",
            "Aceptación de material y compactación"
          ],
          [
            "¿Asentará?",
            "Consolidación",
            "Magnitud y tiempo"
          ],
          [
            "¿Fallará por corte?",
            "Triaxial / corte directo / inconfinada",
            "Resistencia"
          ],
          [
            "¿Drenará?",
            "Permeabilidad",
            "Excavación, filtro, consolidación"
          ]
        ],
        "alerts": [
          "Ensayo sin pregunta técnica = gasto con bata blanca."
        ]
      }
    ]
  },
  "geotecnia": {
    "title": "Geotecnia Aplicada",
    "subtitle": "Del perfil del subsuelo a la solución constructiva",
    "intro": "Usa parámetros de mecánica de suelos para cimentaciones, excavaciones, contenciones, taludes e instrumentación.",
    "accent": "#c9a24d",
    "modules": [
      {
        "id": "investigacion",
        "title": "Investigación del subsuelo",
        "img": "investigacion.svg",
        "tag": "estudio",
        "objective": "Definir el modelo geotécnico que sostendrá el diseño.",
        "graph": "El flujo va de antecedentes a campo, laboratorio y modelo. Cada etapa reduce incertidumbre.",
        "practice": "Sirve para recomendar cimentación, excavación, control de agua, riesgos y parámetros de diseño.",
        "parameters": [
          [
            "Fase",
            "viabilidad / proyecto / construcción",
            "Mayor detalle a mayor riesgo"
          ],
          [
            "Representatividad",
            "sondeos ubicados con criterio",
            "Capturar variabilidad geológica"
          ],
          [
            "NF",
            "nivel freático",
            "Condiciona excavaciones y capacidad"
          ]
        ],
        "alerts": [
          "Una campaña pobre no se arregla con software caro."
        ]
      },
      {
        "id": "perforacion",
        "title": "Métodos de perforación",
        "img": "perforacion.svg",
        "tag": "campo",
        "objective": "Abrir el terreno para muestrear, testificar o ejecutar ensayos in situ.",
        "graph": "Cada método tiene rango de uso: auger para suelos, diamantina para roca/testigo, rotativa para materiales duros.",
        "practice": "Permite elegir equipo según suelo, roca, profundidad, agua, acceso y calidad de muestra requerida.",
        "parameters": [
          [
            "Diamantina",
            "testigo de roca",
            "RQD, fracturas, litología"
          ],
          [
            "Rotativa",
            "suelos duros/roca",
            "Avance con fluido"
          ],
          [
            "Auger",
            "suelos someros",
            "Rápido, limitado por estabilidad"
          ],
          [
            "Roto-percusión",
            "roca/bolones",
            "Alta energía, menor calidad de muestra"
          ]
        ],
        "alerts": [
          "SPT es ensayo in situ, no método de perforación."
        ]
      },
      {
        "id": "insitu",
        "title": "Ensayos in situ",
        "img": "insitu.svg",
        "tag": "parámetros",
        "objective": "Medir respuesta del terreno en su estado natural.",
        "graph": "SPT, CPTu, PMT, DMT y VST exploran resistencia, rigidez, presión de poros o Su desde distintos enfoques.",
        "practice": "Complementan laboratorio y ayudan a construir perfiles continuos o semi-continuos.",
        "parameters": [
          [
            "SPT N60",
            "resistencia a penetración corregida",
            "Correlaciones para arenas, consistencia y diseño preliminar"
          ],
          [
            "CPTu",
            "qc, fs, u2",
            "Perfil continuo y clasificación"
          ],
          [
            "PMT",
            "módulo/presión límite",
            "Deformabilidad y capacidad"
          ],
          [
            "VST",
            "Su",
            "Arcillas blandas"
          ]
        ],
        "alerts": [
          "Las correlaciones no son mandamientos: se calibran con geología y laboratorio."
        ]
      },
      {
        "id": "geofisica",
        "title": "Exploración indirecta",
        "img": "geofisica.svg",
        "tag": "geofísica",
        "objective": "Reconocer continuidad lateral, anomalías y propiedades indirectas sin excavar todo.",
        "graph": "Ondas y resistividades permiten inferir cambios de material, rigidez, agua o cavidades.",
        "practice": "Útil para trazados, túneles, rellenos, cavidades, espesores y zonificación preliminar.",
        "parameters": [
          [
            "Vs",
            "velocidad onda S",
            "Rigidez dinámica y perfil sísmico"
          ],
          [
            "Vp",
            "onda P",
            "Saturación y material"
          ],
          [
            "Resistividad",
            "conductividad aparente",
            "Agua, arcillas, vacíos"
          ],
          [
            "GPR",
            "reflexiones someras",
            "Servicios y anomalías"
          ]
        ],
        "alerts": [
          "Geofísica sin sondeos de control puede vender humo en alta definición."
        ]
      },
      {
        "id": "esfuerzos",
        "title": "Esfuerzos efectivos y distribución de cargas",
        "img": "investigacion.svg",
        "tag": "cálculo",
        "objective": "Evaluar σ, u, σ’ e incremento de esfuerzos por cimentaciones o rellenos.",
        "graph": "La carga aplicada se disipa con profundidad; el agua reduce esfuerzo efectivo y resistencia.",
        "practice": "Base para asentamientos, capacidad portante, empujes y estabilidad.",
        "parameters": [
          [
            "σ",
            "esfuerzo total",
            "Peso propio + cargas"
          ],
          [
            "u",
            "presión de poros",
            "Depende de agua"
          ],
          [
            "σ’ = σ-u",
            "esfuerzo efectivo",
            "Controla resistencia y deformación"
          ],
          [
            "Δσ",
            "incremento por obra",
            "Usar para asentamientos"
          ]
        ],
        "alerts": [
          "En suelos saturados, ignorar u es diseñar con los ojos cerrados."
        ],
        "calc": "esfuerzos"
      },
      {
        "id": "cimentaciones",
        "title": "Cimentaciones",
        "img": "cimentaciones.svg",
        "tag": "fundación",
        "objective": "Transmitir cargas al terreno con seguridad y asentamientos admisibles.",
        "graph": "La imagen compara zapata, platea y pilotes: aumenta profundidad cuando el suelo superficial no resuelve soporte/deformación.",
        "practice": "Seleccionar solución por carga, perfil, asentamiento, nivel freático y constructibilidad.",
        "parameters": [
          [
            "Capacidad portante",
            "resistencia",
            "Evitar falla por corte"
          ],
          [
            "Asentamiento",
            "servicio",
            "Controlar deformaciones totales y diferenciales"
          ],
          [
            "Df",
            "desplante",
            "Evitar rellenos, erosión y cambios volumétricos"
          ],
          [
            "Agua",
            "NF/agresividad",
            "Afecta excavación y durabilidad"
          ]
        ],
        "alerts": [
          "La cimentación no se elige por costumbre: se elige por problema."
        ]
      },
      {
        "id": "contenciones",
        "title": "Sistemas de contención y entibación",
        "img": "contenciones.svg",
        "tag": "excavaciones",
        "objective": "Sostener cortes verticales o semiverticales, controlando empujes, agua y deformaciones.",
        "graph": "El esquema muestra empuje lateral y soporte con pantalla/anclajes. El diseño no es sólo resistencia: también deformación.",
        "practice": "Aplicable a subsuelos, sótanos, medianeras, zanjas profundas y excavaciones urbanas.",
        "parameters": [
          [
            "Ko",
            "reposo",
            "Excavaciones rígidas / poco movimiento"
          ],
          [
            "Ka",
            "activo",
            "Cuando el muro se desplaza lo suficiente"
          ],
          [
            "Kp",
            "pasivo",
            "Resistencia frontal, sensible a excavación"
          ],
          [
            "Anclaje/puntal",
            "soporte",
            "Controla momento y desplazamiento"
          ]
        ],
        "alerts": [
          "El agua detrás del muro puede pesar más que el cálculo bonito."
        ],
        "calc": "rankine"
      },
      {
        "id": "taludes",
        "title": "Estabilidad de taludes",
        "img": "taludes.svg",
        "tag": "estabilidad",
        "objective": "Evaluar deslizamiento de masas inclinadas naturales o artificiales.",
        "graph": "La superficie potencial de falla se activa por geometría, agua, resistencia y cargas externas.",
        "practice": "Aplica a laderas, cortes viales, terraplenes, excavaciones abiertas y obras de estabilización.",
        "parameters": [
          [
            "FS",
            "factor de seguridad",
            "Relación resistencia/solicitación"
          ],
          [
            "c, φ, Su",
            "resistencia",
            "Elegir drenado/no drenado"
          ],
          [
            "NF",
            "agua",
            "Reduce esfuerzo efectivo y aumenta peso"
          ],
          [
            "Pendiente",
            "geometría",
            "A mayor inclinación, mayor riesgo"
          ]
        ],
        "alerts": [
          "Talud y entibación se relacionan, pero no son el mismo problema."
        ],
        "calc": "talud"
      },
      {
        "id": "instrumentacion",
        "title": "Instrumentación y control",
        "img": "instrumentacion.svg",
        "tag": "monitoreo",
        "objective": "Medir respuesta del terreno y activar decisiones antes de la falla.",
        "graph": "El semáforo técnico convierte mediciones en acción: normal, alerta o intervención.",
        "practice": "Fundamental en excavaciones urbanas, taludes, túneles, precargas y cimentaciones sensibles.",
        "parameters": [
          [
            "Piezómetro",
            "u/NF",
            "Control de agua"
          ],
          [
            "Inclinómetro",
            "movimiento lateral",
            "Detectar superficie activa"
          ],
          [
            "Prismas",
            "desplazamiento",
            "Control de medianeras/estructuras"
          ],
          [
            "Placas",
            "asentamiento",
            "Control de consolidación"
          ]
        ],
        "alerts": [
          "Medir sin umbrales ni plan de reacción es decorar la obra con sensores."
        ]
      }
    ]
  },
  "pavimentos": {
    "title": "Pavimentos",
    "subtitle": "Suelo, materiales, tránsito, drenaje y control de capas",
    "intro": "Conecta mecánica de suelos y control de materiales para diseñar, construir y evaluar pavimentos flexibles, rígidos y semirrígidos.",
    "accent": "#22c55e",
    "modules": [
      {
        "id": "conceptos",
        "title": "Conceptos base",
        "img": "pavimento_capas.svg",
        "tag": "estructura",
        "objective": "Entender el pavimento como sistema que distribuye cargas repetidas hacia la subrasante.",
        "graph": "Las capas superiores reciben tensiones altas; la estructura disipa carga hasta llegar a la subrasante.",
        "practice": "Sirve para ordenar controles: subrasante, subbase, base, carpeta, drenaje y tránsito.",
        "parameters": [
          [
            "Tránsito",
            "cargas repetidas",
            "Define demanda estructural"
          ],
          [
            "Subrasante",
            "soporte base",
            "Condiciona espesores"
          ],
          [
            "Drenaje",
            "agua",
            "Clave para durabilidad"
          ],
          [
            "Vida útil",
            "servicio",
            "Define nivel de diseño"
          ]
        ],
        "alerts": [
          "El pavimento no falla sólo por tránsito: también falla por agua, finos y compactación deficiente."
        ]
      },
      {
        "id": "tipos",
        "title": "Tipos de pavimento",
        "img": "pavimento_capas.svg",
        "tag": "selección",
        "objective": "Diferenciar flexible, rígido, semirrígido y articulado.",
        "graph": "Cada sistema reparte cargas de forma distinta: flexible por capas granulares/asfálticas; rígido por losa; semirrígido por base tratada.",
        "practice": "Elegir solución por tránsito, clima, materiales, mantenimiento y costo de ciclo de vida.",
        "parameters": [
          [
            "Flexible",
            "asfalto + granulares",
            "Sensible a compactación y temperatura"
          ],
          [
            "Rígido",
            "losa de hormigón",
            "Controlar juntas y soporte uniforme"
          ],
          [
            "Semirrígido",
            "base estabilizada",
            "Controlar fisuración reflejada"
          ],
          [
            "Articulado",
            "adoquines",
            "Necesita confinamiento y base estable"
          ]
        ],
        "alerts": [
          "No hay pavimento universal: hay solución adecuada al contexto."
        ]
      },
      {
        "id": "subrasante",
        "title": "Subrasante y CBR",
        "img": "cbr.svg",
        "tag": "soporte",
        "objective": "Evaluar la capacidad soporte del suelo natural o mejorado que recibe el paquete estructural.",
        "graph": "La escala CBR orienta el nivel de soporte; valores bajos exigen intervención o mayor espesor.",
        "practice": "El CBR se cruza con humedad, compactación, plasticidad y drenaje.",
        "parameters": [
          [
            "CBR < 3",
            "muy débil",
            "Mejorar, reemplazar o rediseñar"
          ],
          [
            "CBR 3-8",
            "débil",
            "Mejoramiento o paquete robusto"
          ],
          [
            "CBR 8-20",
            "regular",
            "Puede servir con control"
          ],
          [
            "CBR > 20",
            "buen soporte",
            "Verificar uniformidad y drenaje"
          ],
          [
            "IP alto",
            "sensibilidad al agua",
            "Estabilizar o restringir uso"
          ]
        ],
        "alerts": [
          "Un CBR alto medido seco puede desplomarse si la subrasante se satura."
        ],
        "calc": "pavimento"
      },
      {
        "id": "granulares",
        "title": "Materiales granulares",
        "img": "granulares.svg",
        "tag": "base/subbase",
        "objective": "Controlar calidad de bases y subbases: distribución, limpieza, desgaste y plasticidad.",
        "graph": "Un granular útil combina trabazón, baja plasticidad y resistencia al desgaste.",
        "practice": "Se usa para aceptar canteras, acopios, subbase, base y capas drenantes.",
        "parameters": [
          [
            "Granulometría",
            "curva dentro de banda",
            "Evitar segregación y huecos"
          ],
          [
            "Finos",
            "pasa No.200",
            "Controlar plasticidad y bombeo"
          ],
          [
            "Los Ángeles",
            "desgaste",
            "Durabilidad del agregado"
          ],
          [
            "Equiv. arena",
            "limpieza",
            "Detectar arcillas/fangos"
          ]
        ],
        "alerts": [
          "Un material segregado puede cumplir promedio y fallar por zonas."
        ]
      },
      {
        "id": "asfalto",
        "title": "Mezclas asfálticas",
        "img": "marshall.svg",
        "tag": "carpeta",
        "objective": "Controlar estabilidad, flujo, vacíos, ligante y compactación de la mezcla.",
        "graph": "La curva ilustra que existe un contenido óptimo de asfalto: poco ligante desintegra; exceso deforma.",
        "practice": "Sirve para diseño Marshall/Superpave, control de planta, temperatura y compactación en obra.",
        "parameters": [
          [
            "Estabilidad",
            "resistencia",
            "Debe cumplir especificación"
          ],
          [
            "Flujo",
            "deformación",
            "Alto: mezcla blanda; bajo: frágil"
          ],
          [
            "Vacíos",
            "durabilidad",
            "Fuera de rango: oxidación o exudación"
          ],
          [
            "Temperatura",
            "compactación",
            "Mezcla fría = baja densidad"
          ]
        ],
        "alerts": [
          "La mezcla que llega fría no se arregla con más fe ni con más rodillo."
        ]
      },
      {
        "id": "rigido",
        "title": "Pavimento rígido",
        "img": "pavimento_rigido.svg",
        "tag": "hormigón",
        "objective": "Controlar losas de hormigón, juntas, transferencia de carga y soporte uniforme.",
        "graph": "Las juntas controlan fisuración y los pasadores ayudan a transferir carga entre losas.",
        "practice": "Clave en vías de alto tránsito, patios industriales, aeropuertos y zonas con alta demanda.",
        "parameters": [
          [
            "Módulo de rotura",
            "flexión",
            "Parámetro crítico del hormigón"
          ],
          [
            "Juntas",
            "control de fisuras",
            "Ubicación y corte oportuno"
          ],
          [
            "Pasadores",
            "transferencia",
            "Reducen escalonamiento"
          ],
          [
            "Curado",
            "durabilidad",
            "Evita fisuración temprana"
          ]
        ],
        "alerts": [
          "Una base irregular debajo de una losa rígida es una invitación a fisurar."
        ]
      },
      {
        "id": "ensayos",
        "title": "Ensayos principales",
        "img": "cbr.svg",
        "tag": "laboratorio/obra",
        "objective": "Conectar ensayo con decisión de obra.",
        "graph": "Los ensayos no se interpretan solos: CBR, Proctor, densidad, Atterberg y granulometría forman una lectura conjunta.",
        "practice": "Permiten aceptar/rechazar capas, ajustar humedad, cambiar material o rediseñar.",
        "parameters": [
          [
            "CBR",
            "soporte",
            "Subrasante/base/subbase"
          ],
          [
            "Proctor",
            "wopt y γdmax",
            "Referencia de compactación"
          ],
          [
            "Densidad campo",
            "Gc",
            "Aceptación de capa"
          ],
          [
            "DCP",
            "penetración dinámica",
            "Control rápido de uniformidad"
          ],
          [
            "Deflectometría",
            "respuesta estructural",
            "Evaluar pavimento existente"
          ],
          [
            "IRI",
            "regularidad",
            "Confort y calidad superficial"
          ]
        ],
        "alerts": [
          "El ensayo que no cambia una decisión, probablemente sobra."
        ]
      },
      {
        "id": "obra",
        "title": "Construcción y control",
        "img": "proctor.svg",
        "tag": "QA/QC",
        "objective": "Definir controles mínimos para construir capas con calidad.",
        "graph": "La compactación depende de humedad, equipo, espesor de capa, pasadas y material.",
        "practice": "Aplicable a subrasante, rellenos, subbase, base, asfalto y hormigón.",
        "parameters": [
          [
            "Espesor de capa",
            "constructibilidad",
            "Capas muy gruesas compactan mal"
          ],
          [
            "Humedad",
            "trabajabilidad",
            "Airear o humedecer"
          ],
          [
            "Equipo",
            "energía",
            "Pata de cabra, liso, neumático, vibratorio"
          ],
          [
            "Registro",
            "trazabilidad",
            "Ensayos por lote/tramo"
          ]
        ],
        "alerts": [
          "Control de calidad al final de la jornada es autopsia, no medicina preventiva."
        ]
      },
      {
        "id": "fallas",
        "title": "Fallas típicas e interpretación",
        "img": "fallas_pavimentos.svg",
        "tag": "diagnóstico",
        "objective": "Relacionar síntomas superficiales con causas probables.",
        "graph": "Las fisuras, baches, ahuellamiento y bombeo son síntomas; la causa puede estar en capas inferiores.",
        "practice": "Sirve para mantenimiento, rehabilitación, peritajes y diseño de refuerzo.",
        "parameters": [
          [
            "Ahuellamiento",
            "deformación permanente",
            "Mezcla blanda, base débil o subrasante"
          ],
          [
            "Fatiga",
            "fisuración repetida",
            "Insuficiencia estructural"
          ],
          [
            "Bombeo",
            "agua + finos",
            "Mejorar drenaje y soporte"
          ],
          [
            "Baches",
            "desintegración",
            "Reparar causa, no sólo tapar hueco"
          ]
        ],
        "alerts": [
          "Tapar baches sin corregir agua y base es maquillaje de obra."
        ]
      }
    ]
  }
};
