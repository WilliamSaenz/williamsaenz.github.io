# Cronograma de Obra — Pieza de Portfolio Técnico

**Planificación con MS Project · WBS · Camino Crítico · Hitos**
Elaborado por William Darío Sáenz Santamaría — Ing. Civil (UNAL) · Maestría en Ciencia de Datos (UNAJ)
Pieza preparada en el marco de la postulación al cargo de **Proyectista** en **Núcleo Eléctrica Argentina S.A.**, como complemento del plano de la misma subestación (ver [Instalaciones Eléctricas](../../Obras%20Civiles/Instalaciones%20El%C3%A9ctricas/)).

## Acceso rápido

- 🖥️ **Ver la página de este módulo:** [index.html](./index.html) (incluye el Gantt en imagen)
- 📂 **Descargar el cronograma:** [`Cronograma_Instalacion_Bahia_Subestacion.xml`](./Cronograma_Instalacion_Bahia_Subestacion.xml) — formato MSPDI (XML nativo de MS Project), `Archivo → Abrir` directo.
- 🖼️ **Vista previa (Gantt):** [`gantt-cronograma.png`](./gantt-cronograma.png)

> El XML de Project no se previsualiza dentro de GitHub (muestra el código fuente crudo). La imagen de Gantt se generó a partir de los datos reales del archivo — no es un dibujo aparte, es literalmente el cronograma graficado.

---

## ¿Qué muestra el cronograma?

34 actividades en 5 fases, con dependencias fin-a-inicio, 2 hitos de control y 5 recursos asignados:

| Fase | Actividades clave | Duración |
|---|---|---|
| Ingeniería y Documentación | Relevamiento, diseño básico, ingeniería de detalle, aprobación | 35 días hábiles |
| Procura | Especificación técnica, compra de transformador (ítem de mayor plazo), interruptores, materiales PAT | hasta 60 días hábiles |
| Obra Civil | Replanteo, malla de tierra, trincheras, fundaciones, foso de contención, sala de control | en paralelo con Procura |
| Montaje Electromecánico | Estructuras, transformador, interruptores, barra colectora, cableado | depende de Procura + Obra Civil |
| Puesta en Servicio | Ensayos de PAT, ensayos en frío, pruebas funcionales, energización, acta de cierre | secuencial al final |

**Duración total:** ~4.5 meses (99 días hábiles), calendario lunes a viernes 8-12 / 13-17.

## El hallazgo del camino crítico

El camino crítico (resaltado en rojo en el Gantt) **no pasa por la obra civil** — pasa por:

`Relevamiento → Diseño básico → Especificación de equipos → Compra del transformador (60 días) → Montaje del transformador → Ensayos en frío → Pruebas funcionales → Energización → Cierre`

Es decir: la obra civil (malla de tierra, trincheras, fundaciones) tiene holgura y no es el cuello de botella — el **plazo de entrega del transformador** es lo que define la fecha de puesta en servicio. Por eso ese ítem de procura debe dispararse apenas se aprueba la ingeniería básica, en paralelo con todo lo demás, y no esperar a que termine la ingeniería de detalle.

Este camino crítico se calculó programáticamente (trazado hacia atrás desde el hito de cierre, identificando en cada paso qué predecesor es el que realmente determina la fecha de inicio de la siguiente tarea) — no se marcó a mano.

## Cómo se generó

El archivo XML fue generado con Python usando la librería **mpxj** (la misma que usa MS Project internamente para leer/escribir distintos formatos de planificación), lo que garantiza que el archivo es 100% compatible — se validó leyéndolo de vuelta con el mismo motor antes de entregarlo. El Gantt de la imagen se graficó a partir de esos mismos datos, no es un dibujo manual aparte.

---

### Puntos para mencionar en la entrevista

- Por qué la obra civil y la procura corren en paralelo (no esperás a tener todo comprado para empezar a cavar) — eso es justamente lo que reduce el plazo total del proyecto.
- Cómo identificaste el camino crítico y qué decisión de gestión se desprende de eso (acelerar la orden de compra del transformador).
- Que el cronograma y el plano (DXF) son piezas de un mismo proyecto ficticio — mostrás que pensás el proyecto de punta a punta, no solo el dibujo.
- Qué le faltaría para ser un cronograma de producción real: costos por actividad, curva de avance (curva S), nivelación de recursos, calendario con feriados argentinos.
