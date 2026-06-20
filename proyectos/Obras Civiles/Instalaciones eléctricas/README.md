# Subestación Modelo — Pieza de Portfolio Técnico

**Diagrama unifilar · Malla de puesta a tierra · Layout de equipos · Canalizaciones y ductos · Leyenda y simbología**
Elaborado por William Darío Sáenz Santamaría — Ing. Civil (UNAL) · Maestría en Ciencia de Datos (UNAJ)
Pieza preparada en el marco de la postulación al cargo de **Proyectista** en **Núcleo Eléctrica Argentina S.A.**

## Acceso rápido

- **Ver la página de este módulo:** [index.html](./index.html) (incluye vista previa de la lámina)
- **Descargar el plano:** [`Subestacion_Portfolio_WSaenz.dxf`](./Subestacion_Portfolio_WSaenz.dxf) — formato DXF (AutoCAD 2010), abre directo sin plugins.
- **Vista previa (imagen):** [`preview-subestacion.png`](./preview-subestacion.png)

> El DXF no se puede previsualizar dentro de GitHub (no es un formato que renderice nativamente). Para verlo con capas, cotas y texto editable hay que descargarlo y abrirlo en AutoCAD. La imagen de preview existe justamente para que cualquiera pueda ver el resultado sin tener AutoCAD instalado.

---

## ¿Qué muestra este plano?

Una lámina **A1** con cinco vistas técnicas de una bahía de transformador 132/13.2 kV, organizadas en una grilla simétrica, pensada como pieza de portfolio para demostrar manejo de AutoCAD aplicado a instalaciones eléctricas (**Rev. 2** — lámina ampliada a A1, texto ~40% más grande, corrección de caracteres especiales y de un solape entre encabezados de panel detectado al abrir en AutoCAD real):

| Panel | Contenido | Qué demuestra |
|---|---|---|
| **A — Diagrama Unifilar** | Topología de la bahía con fichas técnicas (In, Icc, relación de transformación, Z%, conexión) | Lectura de esquemas eléctricos, numeración ANSI y criterios de selección de equipos |
| **B — Layout de Equipos** | Planta del patio de alta tensión, foso de contención de aceite, distancias de seguridad acotadas | Disposición física, criterios de implantación y obra civil asociada |
| **C — Malla de Puesta a Tierra** | Grilla de conductores enterrados, detalle de unión jabalina-conductor | Diseño de sistemas de protección, referencia a IRAM 2281 |
| **D — Canalizaciones y Ductos** | Corte tipo de trinchera con ductos de reserva, esquema de traza con cámaras | Criterio de separación BT/MT y documentación de obra civil eléctrica |
| **E — Leyenda y Simbología** | Glosario visual de todos los símbolos + abreviaturas (AT, BT, MT, In, Icc, PAT, DPS) | Buenas prácticas de documentación — un plano se entiende solo, sin explicación verbal |

Capas separadas por función (`AT-BARRAS`, `AT-EQUIPOS`, `TIERRA-MALLA`, `COTAS`, `ESTRUCTURAS`, `CERCO`, `CIVIL`), cajetín con datos del proyecto y notas generales.

## Criterios técnicos aplicados

- **Numeración de dispositivos ANSI**: 52 (interruptor), 89 (seccionador), 96 (pararrayos) — estándar en plantas industriales y de generación en Latinoamérica, independientemente de la simbología gráfica IEC usada en el dibujo.
- **Fichas técnicas por equipo**: cada dispositivo del unifilar lleva su ficha (In, Icc, relación de transformación, clase de precisión) — no alcanza con dibujar el símbolo, hay que poder justificar por qué se eligió ese equipo.
- **Foso de contención de aceite**: bajo el transformador, exigido por normativa de seguridad ante derrame o incendio — un detalle que conecta directamente el perfil de ingeniería civil con el eléctrico.
- **Puesta a tierra**: conductor de cobre desnudo 4/0 AWG, jabalinas tipo Copperweld, uniones por soldadura exotérmica (Cadweld), con detalle constructivo de la unión — práctica estándar en subestaciones para evitar puntos de falla por corrosión en las conexiones.
- **Distancias de seguridad fase-estructura**: acotadas explícitamente en el layout, como recordatorio de que el diseño físico de un patio de AT no es solo estético sino que responde a holguras dieléctricas normadas.
- **Separación de canalizaciones**: cables de control/señal separados físicamente de los de fuerza/potencia mediante un separador, con ductos de reserva previstos para ampliaciones futuras.
- **Leyenda y glosario**: un plano profesional se entiende sin que el autor esté al lado explicando — por eso el Panel E documenta toda la simbología y abreviaturas usadas.
- **Referencias normativas**: CIRSOC (estructuras), IRAM 2281 (puesta a tierra), AEA 95301 (canalizaciones) — se citan como marco, no como cálculo de detalle.

## Nota de honestidad técnica

Este plano es una **pieza ilustrativa de portfolio**, no un proyecto de ingeniería de detalle ni un documento de Núcleo Eléctrica Argentina. Las dimensiones y equipos son representativos, no corresponden a un cálculo de cortocircuito, coordinación de aislación ni estudio de campo eléctrico real. Eso se aclara explícitamente en las notas generales del propio plano — es preferible mostrarlo así: una base de drafting sólida y bien razonada, en lugar de simular una ingeniería que aún no se posee.

## Cómo abrir el archivo (tip importante)

El DXF es una lámina técnica completa: al abrirlo, AutoCAD hace zoom a toda la hoja, así que el texto se ve chico — es normal, pasa con cualquier plano técnico real. Para apreciar el detalle:

1. Abrí el archivo en **Model** (pestaña abajo a la izquierda — no "Layout1", ese tab es para configuración de impresión y queda vacío porque todo el dibujo vive en Model Space).
2. Usá `Zoom Window` (o la rueda del mouse) y acercate panel por panel — Unifilar, Layout, Malla de Tierra, Canalizaciones, Leyenda — en vez de mirarlo con Zoom Extents.

## Historial de revisiones

| Rev | Contenido |
|---|---|
| 0 | Emisión inicial — unifilar, malla de tierra, layout (A3) |
| 1 | + Canalizaciones y ductos, leyenda/simbología, fichas técnicas, foso de contención (A2) |
| 2 | Corrección de un solape de texto entre encabezados de panel, reemplazo de caracteres especiales no soportados por la fuente de AutoCAD (—, √, °, Ø), lámina ampliada a **A1** con texto ~40% más grande, leyenda extendida (12 ítems) y bloque de revisiones en el cajetín |

## Cómo se generó

El archivo DXF fue generado de forma paramétrica (Python + librería `ezdxf`), lo que permite versionarlo como código y regenerarlo o ajustarlo rápidamente. Cada revisión se detectó y corrigió abriendo el archivo en AutoCAD real — el control de calidad de un plano no termina cuando "compila", termina cuando se ve bien en la herramienta que lo va a usar la otra persona.

---

### Puntos para mencionar en la entrevista

- Por qué separaste las capas como lo hiciste (orden y control de documentación — algo que valoran en el cargo).
- Por qué elegiste mostrar **cinco** entregables distintos en vez de uno solo: cubre el ciclo típico de documentación de un proyectista eléctrico (esquemático → protección → implantación física → obra civil de canalizaciones → simbología).
- Que generaste la base de forma programática y la refinaste en AutoCAD — muestra versatilidad sin pretender ser algo que no sos todavía.
- Que el Panel B referencia al Panel D con un llamado de corte — mostrás que entendés cómo se cruza la información entre planos en un proyecto real.
- Qué le agregarías con más tiempo: cálculo de la malla de tierra (resistencia, gradientes de potencial), coordinación de aislación, lista de materiales (BOM), planilla de cables.
