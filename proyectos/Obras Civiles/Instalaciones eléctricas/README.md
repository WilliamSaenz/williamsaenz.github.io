# Subestación Modelo — Pieza de Portfolio Técnico

**Diagrama unifilar · Malla de puesta a tierra · Layout de equipos · Canalizaciones y ductos · Leyenda y simbología**
Elaborado por William Darío Sáenz Santamaría — Ing. Civil (UNAL) · Maestría en Ciencia de Datos (UNAJ)
Pieza preparada en el marco de la postulación al cargo de **Proyectista**

## Acceso rápido

- **Ver la página de este módulo:** [index.html](./index.html) (incluye vista previa de la lámina)
- **Descargar el plano:** [`Subestacion_Portfolio_WSaenz.dxf`](./Subestacion_Portfolio_WSaenz.dxf) — formato DXF (AutoCAD 2010), abre directo sin plugins.
- **Vista previa (imagen):** [`preview-subestacion.png`](./preview-subestacion.png)

> El DXF no se puede previsualizar dentro de GitHub (no es un formato que renderice nativamente). Para verlo con capas, cotas y texto editable hay que descargarlo y abrirlo en AutoCAD. La imagen de preview existe justamente para que cualquiera pueda ver el resultado sin tener AutoCAD instalado.

---

## ¿Qué muestra este plano?

Una lámina **A1 extendida** con seis vistas técnicas de una bahía de transformador 132/13.2 kV, pensada como pieza de portfolio para demostrar manejo de AutoCAD aplicado a instalaciones eléctricas (**Rev. 1** — se agregó un sexto panel de corte/perfil en elevación):

| Panel                            | Contenido                                                                                        | Qué demuestra             |
|----------------------------------|--------------------------------------------------------------------------------------------------|---------------------------|
| **A — Diagrama Unifilar**        | Topología de la bahía con fichas técnicas (In, Icc, relación de transformación, Z%, conexión)    | Lectura de esquemas eléctricos, numeración ANSI y criterios de selección de equipos |
| **B — Layout de Equipos**        | Planta del patio de alta tensión, foso de contención de aceite, distancias de seguridad acotadas | Disposición física, criterios de implantación y obra civil asociada |
| **C — Malla de Puesta a Tierra** | Grilla de conductores enterrados, detalle de unión jabalina-conductor                            | Diseño de sistemas de protección, referencia a IRAM 2281 |
| **D — Canalizaciones y Ductos**  | Corte tipo de trinchera con ductos de reserva, esquema de traza con cámaras                      | Criterio de separación BT/MT y documentación de obra civil eléctrica |
| **E — Leyenda y Simbología**     | Glosario visual de todos los símbolos + abreviaturas (AT, BT, MT, In, Icc, PAT, DPS)             | Buenas prácticas de documentación — un plano se entiende solo, sin explicación verbal |
| **F — Corte / Perfil**           | Elevación del patio de AT: pórtico de línea, barra colectora, transformador con foso de contención, sala de control, alturas acotadas | Lectura en altura del mismo layout del Panel B — un proyectista no piensa solo en planta |

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

## Organización del archivo (lo que se ve en AutoCAD, no solo en el dibujo)

Esto es lo que conviene mostrar si te piden abrir el archivo en la entrevista — no se ve a simple vista en el dibujo, se ve en los paneles de gestión de AutoCAD:

- **Capas (`LAYER`)**: nombradas con prefijo por disciplina — `DEF-` (marco/cajetín), `ANO-` (texto, cotas, ejes), `ELE-` (eléctrico: conductores, equipos, PAT, canalizaciones), `CIV-` (estructuras, cerco, obra civil). 13 capas en total, cada una con su color y tipo de línea (no todas "Capa 0" con colores puestos a mano).
- **Bloques (`INSERT` / `BLOCK`)**: los 8 símbolos eléctricos (seccionador, interruptor, TC, TT, transformador, pararrayos, símbolo de PAT, jabalina) están definidos **una sola vez** como bloque y se insertan donde hacen falta — 44 inserciones en total (la jabalina sola se repite 25 veces en la malla de tierra). Geometría en capa "0" con color *ByBlock*, así cada inserción hereda el color de la capa donde se la coloca — es la forma correcta de armar una biblioteca de símbolos reutilizable, no copiar y pegar líneas.
- **Cotas (`DIMSTYLE`)**: estilo propio `COTAS-PORTFOLIO` (el `EZDXF` por defecto traía el texto a altura 0.25, prácticamente invisible). Las 8 cotas del plano muestran su valor real como texto propio de la cota, no como una etiqueta de texto suelta al lado que podía desincronizarse del valor real.

## Nota de honestidad técnica

Este plano es una **pieza ilustrativa de portfolio**, no un proyecto de ingeniería de detalle. Las dimensiones y equipos son representativos, no corresponden a un cálculo de cortocircuito, coordinación de aislación ni estudio de campo eléctrico real. Eso se aclara explícitamente en las notas generales del propio plano — es preferible mostrarlo así: una base de drafting sólida y bien razonada, en lugar de simular una ingeniería que aún no se posee.

## Cómo abrir el archivo (tip importante)

El DXF es una lámina técnica completa: al abrirlo, AutoCAD hace zoom a toda la hoja, así que el texto se ve chico — es normal, pasa con cualquier plano técnico real. Para apreciar el detalle:

1. Abrí el archivo en **Model** (pestaña abajo a la izquierda — no "Layout1", ese tab es para configuración de impresión y queda vacío porque todo el dibujo vive en Model Space).
2. Usá `Zoom Window` (o la rueda del mouse) y acercate panel por panel — Unifilar, Layout, Malla de Tierra, Canalizaciones, Leyenda — en vez de mirarlo con Zoom Extents.

## Cómo se generó

El archivo DXF fue generado de forma paramétrica (Python + librería `ezdxf`), lo que permite versionarlo como código y regenerarlo o ajustarlo rápidamente. Cada revisión se detectó y corrigió abriendo el archivo en AutoCAD real — el control de calidad de un plano no termina cuando "compila", termina cuando se ve bien en la herramienta que lo va a usar la otra persona.
