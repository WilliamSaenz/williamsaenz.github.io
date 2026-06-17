# Guía Técnica de Geotecnia, Suelos y Pavimentos

Paquete público para GitHub Pages organizado en cinco módulos:

1. Mecánica de Suelos
2. Geotecnia Aplicada
3. Pavimentos
4. Glosario técnico interactivo
5. Bibliografía y fuentes técnicas

No incluye PDFs ni diapositivas privadas. Los gráficos, tablas y textos fueron preparados como material de consulta pública.

## Estructura

```text
Geotecnia y Pavimentos/
├── index.html
├── mecanica-suelos/
├── geotecnia-aplicada/
├── pavimentos/
├── glosario/
├── bibliografia/
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
├── FUENTES.md
└── README.md
```

## Uso en GitHub

Subir el contenido descomprimido dentro de la carpeta del proyecto. El archivo principal debe llamarse `index.html`.

## v5 — fusión de ramas (corrección + nuevo contenido sobre la base de glosario/bibliografía)

Esta versión une dos líneas de trabajo que habían avanzado por separado: la rama con Glosario y Bibliografía (v4), y una rama de corrección y ampliación de Mecánica de Suelos/Pavimentos. Ninguna de las dos pierde nada de la otra.

**Bugs corregidos** (texto que se cortaba por exceder el ancho del SVG, o se superponía con otro elemento):
- `granulometria-curva.svg`: leyenda final partida en dos líneas.
- `contenciones.svg`: título partido en dos líneas, contenido reacomodado.
- `pavimento-flexible.svg`: título partido en dos líneas, contenido reacomodado.
- `fallas-pavimentos.svg`: tarjeta "Bache" recorrida para no tocar el borde del canvas.
- `perforacion-ensayos.svg`: leyendas de salida bajadas para no pisar las cajas SPT/CPTu/PMT.

**Contenido nuevo:**
- Mecánica de Suelos: sección de **Densidad de campo** (cono de arena / densímetro nuclear / membrana de hule) con diagrama y tabla comparativa.
- Mecánica de Suelos: **Corte directo** separado de triaxiales, con diagrama propio (caja de corte + envolvente τ = c + σ·tanφ).
- Mecánica de Suelos: **Relaciones de fase** con diagrama de fases (volumen/peso), rangos típicos de e, n, Sr, Gs y una calculadora preliminar.
- Pavimentos: sección de **Pavimento rígido** (losa, juntas, pasadores) con diagrama propio.
- Pavimentos: **Indicadores de estado PCI e IRI**, con tablas de rangos y una calculadora de interpretación de PCI.

**Consistencia:**
- Se unificó el `<title>` de las páginas internas a "Guía Técnica" (antes algunas conservaban "CivilScope").
- Se sumaron los pills correspondientes en la portada (`index.html`) para Mecánica de Suelos y Pavimentos.

El Glosario (112 términos) y la Bibliografía (22 fuentes) de la v4 quedan sin cambios en esta etapa; se profundizan en etapas siguientes.

## Fase B — completa (normativa específica y criterio de obra)

Se tejió en el texto, sección por sección, la norma de ensayo exacta (ASTM/AASHTO/CIRSOC/NSR-10) junto con un criterio de obra concreto, evitando que el sitio quede solo en "rangos orientativos" sin respaldo.

**Mecánica de Suelos (9/9 secciones):** Granulometría (ASTM D6913/D7928, AASHTO T27/T88), Atterberg (ASTM D4318, AASHTO M145), Compactación (ASTM D698/D1557, AASHTO T99/T180), Densidad de campo (ASTM D1556/D2167/D6938), Permeabilidad (ASTM D2434/D5084), Relaciones de fase (ASTM D854), Consolidación (ASTM D2435, construcción de Casagrande), Corte directo (ASTM D3080), Triaxiales UU/CU/CD (ASTM D2850/D4767/D7181).

**Geotecnia Aplicada (7/7 secciones):** Investigación del subsuelo (CIRSOC 401/NSR-10 Título H), Perforación e in situ (SPT ASTM D1586, CPTu ASTM D5778, diamantina/RQD ASTM D2113/D6032), Esfuerzos efectivos (principio de Terzaghi), Cimentaciones (ASTM D1143/D4945/D5882 para pilotes), Contenciones (casos reales + CIRSOC/NSR-10), Taludes (ASTM D3080/D7181 + métodos de equilibrio), Instrumentación (criterio de lectura base).

**Pavimentos (7/8 secciones, "Ensayos principales" queda como índice general):** Estructura flexible, Pavimento rígido (ASTM C39/C78), CBR/DCP (ASTM D1883/AASHTO T193, ASTM D6951), Material granular (ASTM C131), Mezclas asfálticas (ASTM D6927/D2726/D2041), Fallas típicas (ASTM D6433), PCI/IRI (ASTM D6433/E1926).

**Nota para Fase D:** quedaron varias normas citadas en el texto que todavía no figuran como entrada propia en Bibliografía (D7181, AASHTO M145, D1586, D6951, D6927, entre otras). Se evalúa en la siguiente etapa qué tan exhaustiva conviene que sea esa lista.

## Fase C — completa (casos escalonados en el Glosario)

Se aplicó un criterio de progresión favorable → alerta → crítico a 15 términos del Glosario (112 en total), elegidos por tener un umbral numérico claro donde el juicio de obra realmente cambia, repartidos parejo entre las tres áreas:

**Suelos:** Índice de plasticidad IP, OCR, Coeficiente de consolidación Cv, Permeabilidad k, SUCS.
**Geotecnia:** SPT, RQD, Capacidad portante, Licuación, Asentamiento diferencial.
**Pavimentos:** CBR, Módulo resiliente Mr, IRI, Ahuellamiento, Fatiga.

Los demás 97 términos conservan su ejemplo único original; ampliar a todo el glosario se consideró desproporcionado para el valor que agrega.

**Pendiente:** Fase D (Bibliografía), a definir en una próxima etapa.

## Fase D — completa (reconciliación de Bibliografía)

Se agregaron 17 entradas nuevas a la Bibliografía (de 22 a 39 fuentes), agrupando normas relacionadas en una sola entrada cuando tiene sentido (por ejemplo, D1143/D4945/D5882 para ensayos de pilotes, o D2726/D2041 para densidad de mezcla asfáltica) en vez de crear una entrada por cada designación suelta:

- **Mecánica de suelos:** ASTM D6913/D7928 (granulometría), D854 (Gs), D2434/D5084 (permeabilidad), D7181 (triaxial CD).
- **Geotecnia aplicada:** ASTM D1586 (SPT), D5778 (CPTu), D2113/D6032 (diamantina/RQD), D1143/D4945/D5882 (capacidad e integridad de pilotes). Nueva categoría de filtro.
- **Pavimentos:** ASTM D1556/D2167 (densidad de campo), D6927 (Marshall), D2726/D2041 (densidad/Rice), D6951 (DCP), C131 (Los Ángeles), C39/C78 (hormigón para pavimento rígido), D6433 (PCI), E1926 (IRI).
- **Normativa AASHTO:** una entrada consolidada con las equivalencias AASHTO (T27/T88, M145, T99/T180, T191, T193) citadas en el sitio. Nueva categoría de filtro.

Se agregaron las dos categorías nuevas ("Geotecnia aplicada" y "Normativa AASHTO") también al filtro desplegable de la página, para que las nuevas fuentes sean reales y buscables, no solo datos sueltos.

Con esto, las cuatro fases (A→B→C→D) quedan completas.
