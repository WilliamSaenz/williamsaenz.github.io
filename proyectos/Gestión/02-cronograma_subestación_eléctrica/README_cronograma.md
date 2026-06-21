# Cronograma de Obra — Pieza de Portfolio Técnico

**Planificación con MS Project · WBS · Camino Crítico marcado en el archivo · Línea Base · Recursos asignados**
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

El camino crítico está **marcado dentro del propio archivo** (campo `Critical` de cada tarea, calculado por trazado hacia atrás desde el hito de cierre) — no es solo un color puesto a mano en la imagen del Gantt. Al abrirlo en MS Project se va a ver en rojo automáticamente, igual que en la imagen de abajo.

El camino crítico **no pasa por la obra civil** — pasa por:

`Relevamiento → Diseño básico → Especificación de equipos → Compra del transformador (60 días) → Montaje del transformador → Ensayos en frío → Pruebas funcionales → Energización → Cierre`

Es decir: la obra civil (malla de tierra, trincheras, fundaciones) tiene holgura y no es el cuello de botella — el **plazo de entrega del transformador** es lo que define la fecha de puesta en servicio. Por eso ese ítem de procura debe dispararse apenas se aprueba la ingeniería básica, en paralelo con todo lo demás, y no esperar a que termine la ingeniería de detalle.

## Línea base y recursos

- **Línea base (Baseline0):** grabada sobre el plan recién aprobado (fecha de congelamiento: 29/06/2026, tres días hábiles antes del inicio de obra) — es la referencia contra la que se mide avance real más adelante (`Planificado` vs `Real`, curva S, % de avance). Por ahora coincide exactamente con el plan porque el proyecto todavía no arrancó; en cuanto haya tareas en curso, MS Project empieza a mostrar la variación automáticamente.
- **Recursos:** 5 roles (Jefe de Proyecto, Proyectista, Capataz de Obra Civil, Técnico Electromecánico, Técnico de Comisionamiento), cada uno con iniciales y grupo de trabajo propio. Cada tarea no-resumen tiene su asignación con **Work** (horas) y **Units** (% de dedicación) calculados — no son recursos "puestos" sin carga real detrás.

## Cómo se generó

El archivo XML fue generado con Python usando la librería **mpxj** (la misma que usa MS Project internamente para leer/escribir distintos formatos de planificación), lo que garantiza que el archivo es 100% compatible — se validó leyéndolo de vuelta con el mismo motor antes de entregarlo. El Gantt de la imagen se graficó a partir de esos mismos datos, no es un dibujo manual aparte.

---

### Puntos para mencionar en la entrevista

- Por qué la obra civil y la procura corren en paralelo (no esperás a tener todo comprado para empezar a cavar) — eso es justamente lo que reduce el plazo total del proyecto.
- Cómo identificaste el camino crítico y qué decisión de gestión se desprende de eso (acelerar la orden de compra del transformador).
- Qué es una línea base y para qué sirve (congelar el plan aprobado para poder medir desvíos después) — y que la tuya está fechada tres días antes del arranque, como se haría en un proyecto real.
- Que el cronograma y el plano (DXF) son piezas de un mismo proyecto ficticio — mostrás que pensás el proyecto de punta a punta, no solo el dibujo.
- Qué le faltaría para ser un cronograma de producción real: costos por actividad, curva de avance (curva S), nivelación de recursos, calendario con feriados argentinos.
