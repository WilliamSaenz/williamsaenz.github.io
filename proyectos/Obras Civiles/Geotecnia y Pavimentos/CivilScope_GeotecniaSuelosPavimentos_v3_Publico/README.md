# CivilScope · Geotecnia, Suelos y Pavimentos v2

Demo público reconstruido desde cero para integrarse dentro de la carpeta:

```text
proyectos/Obras Civiles/Geotecnia-Suelos-Pavimentos/
```

## Cómo subirlo a GitHub

1. Eliminá la carpeta anterior `Geotecnia-Suelos-Pavimentos` o vaciala.
2. Descomprimí este ZIP en tu computadora.
3. Subí el **contenido descomprimido**, no el ZIP.
4. Dentro de GitHub debe quedar así:

```text
Geotecnia-Suelos-Pavimentos/
├── index.html
├── mecanica-suelos/
│   └── index.html
├── geotecnia-aplicada/
│   └── index.html
├── pavimentos/
│   └── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/app.js
│   └── img/*.svg
├── FUENTES.md
└── README.md
```

## Qué cambió en esta versión

- Se eliminaron gráficos pequeños o ilegibles.
- Se redibujaron esquemas SVG propios.
- Se separaron las tres ramas: Mecánica de Suelos, Geotecnia Aplicada y Pavimentos.
- Se agregaron tablas con interpretación práctica y decisiones de obra.
- Se agregaron calculadoras preliminares.
- No se incluyen PDFs, PPTX ni documentos privados.

## v3 — corrección y ampliación sobre la v2

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

## Advertencia técnica

Los rangos y criterios son orientativos para interpretación preliminar. La aprobación final depende del pliego, normativa aplicable, parámetros del proyecto, categoría de obra, consecuencias de falla y criterio profesional responsable.
