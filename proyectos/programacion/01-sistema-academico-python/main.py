# ============================================================
# main.py - Programa Principal
# Trabajo Integrador: Evaluación Estudiantil
# Maestría en Ciencia de Datos - UNAJ
#
# Este archivo integra las 4 etapas del proyecto:
#   Etapa 1: Lectura del CSV y creación de objetos Estudiante
#   Etapa 2: Uso de los métodos de la clase Estudiante
#   Etapa 3: Cálculo de estadísticas generales
#   Etapa 4: Presentación de resultados (reportes + gráfico)
# ============================================================

import pandas as pd
import matplotlib.pyplot as plt
from estudiante import Estudiante
from analisis_academico import AnalizadorAcademico


# ============================================================
# ETAPA 1: Lectura del archivo CSV y creación de objetos
# ============================================================

def cargar_estudiantes(ruta_csv):
    """
    Lee el archivo CSV y crea una lista de objetos Estudiante.

    Args:
        ruta_csv (str): Ruta al archivo CSV con los datos.

    Returns:
        list[Estudiante]: Lista de objetos Estudiante creados desde el CSV.
    """
    # Leemos el CSV con pandas
    df = pd.read_csv(ruta_csv)

    # Limpiamos los nombres de columnas (quitar espacios)
    df.columns = df.columns.str.strip()

    # Identificamos las columnas de notas (todas menos Nombre y Apellido)
    columnas_notas = [col for col in df.columns if col not in ["Nombre", "Apellido"]]

    estudiantes = []
    for _, fila in df.iterrows():
        # Armamos el diccionario de notas para este estudiante
        notas = {col: int(fila[col]) for col in columnas_notas}
        # Creamos el objeto Estudiante
        est = Estudiante(
            nombre=fila["Nombre"],
            apellido=fila["Apellido"],
            notas=notas
        )
        estudiantes.append(est)

    return estudiantes


# ============================================================
# ETAPA 4: Presentación de resultados
# ============================================================

def mostrar_separador(titulo=""):
    """Imprime un separador visual con título opcional."""
    print("\n" + "=" * 65)
    if titulo:
        print(f"  {titulo}")
        print("=" * 65)


def mostrar_info_estudiantes(estudiantes):
    """
    Muestra la información detallada de cada estudiante:
    nombre, notas, promedio (con y sin aplazos) y situación.
    """
    mostrar_separador("DETALLE POR ESTUDIANTE")

    for est in estudiantes:
        print(f"\n  Estudiante: {est.nombre_completo}")
        print(f"  {'─' * 45}")

        # Mostramos cada nota
        for asig, nota in est.notas.items():
            # Marcamos con ✗ si es aplazo, ✓ si aprueba
            estado = "✓" if nota >= 6 else "✗"
            print(f"    {asig:<20s} : {nota:>2d}  {estado}")

        print(f"  {'─' * 45}")
        print(f"    Promedio (con aplazos)  : {est.calcular_promedio()}")
        print(f"    Promedio (sin aplazos)  : {est.calcular_promedio_sin_aplazos()}")
        print(f"    Materias aprobadas      : {est.contar_materias_aprobadas()} / 6")
        print(f"    Aplazos                 : {est.contar_aplazos()}")
        print(f"    Situación académica     : {est.obtener_situacion()}")


def mostrar_estadisticas(analizador):
    """
    Muestra las estadísticas generales del grupo:
    promedio por asignatura, % aprobación, mejor/peor materia.
    """
    mostrar_separador("ESTADÍSTICAS GENERALES DEL GRUPO")

    # --- Promedio por asignatura ---
    print("\n  Promedio por asignatura:")
    promedios = analizador.promedio_por_asignatura()
    for asig, prom in promedios.items():
        barra = "█" * int(prom)  # Barra visual simple
        print(f"    {asig:<20s} : {prom:>5.2f}  {barra}")

    # --- Porcentaje de aprobación general ---
    print(f"\n  Porcentaje de aprobación general: {analizador.porcentaje_aprobacion_general()}%")

    # --- Aprobación por asignatura ---
    print("\n  Porcentaje de aprobación por asignatura:")
    aprob_por_asig = analizador.porcentaje_aprobacion_por_asignatura()
    for asig, pct in aprob_por_asig.items():
        print(f"    {asig:<20s} : {pct:>6.2f}%")

    # --- Mejor y peor asignatura ---
    mejor, prom_mejor = analizador.asignatura_mayor_rendimiento()
    peor, prom_peor = analizador.asignatura_menor_rendimiento()
    print(f"\n  Asignatura con MAYOR rendimiento: {mejor} (promedio: {prom_mejor})")
    print(f"  Asignatura con MENOR rendimiento: {peor} (promedio: {prom_peor})")

    # --- Mejor estudiante ---
    mejor_est = analizador.mejor_estudiante()
    print(f"\n  Mejor estudiante: {mejor_est.nombre_completo} "
          f"(promedio: {mejor_est.calcular_promedio()})")

    # --- Estudiantes reprobados ---
    reprobados = analizador.estudiantes_reprobados()
    print(f"\n  Estudiantes reprobados ({len(reprobados)}):")
    for est in reprobados:
        print(f"    - {est.nombre_completo} (promedio: {est.calcular_promedio()})")


def generar_grafico_barras(analizador, ruta_salida="grafico_rendimiento.png"):
    """
    Genera un gráfico de barras con el promedio por asignatura.
    Lo guarda como imagen PNG.

    Args:
        analizador (AnalizadorAcademico): Objeto con los datos.
        ruta_salida (str): Ruta donde se guarda la imagen.
    """
    promedios = analizador.promedio_por_asignatura()

    # Nombres más cortos para las etiquetas del gráfico
    nombres_cortos = {
        "programacion": "Programación",
        "bases_d_datos": "Bases de Datos",
        "estadistica": "Estadística",
        "Arq_nube": "Arq. Nube",
        "Ap_automatico": "Ap. Automático",
        "cap_informacion": "Cap. Información"
    }

    asignaturas = [nombres_cortos.get(k, k) for k in promedios.keys()]
    valores = list(promedios.values())

    # Colores: verde si el promedio >= 6, rojo si no
    colores = ["#2ecc71" if v >= 6 else "#e74c3c" for v in valores]

    # Creamos el gráfico
    fig, ax = plt.subplots(figsize=(10, 6))
    barras = ax.bar(asignaturas, valores, color=colores, edgecolor="white", linewidth=1.5)

    # Agregamos el valor encima de cada barra
    for barra, valor in zip(barras, valores):
        ax.text(
            barra.get_x() + barra.get_width() / 2,
            barra.get_height() + 0.15,
            f"{valor:.2f}",
            ha="center", va="bottom", fontweight="bold", fontsize=11
        )

    # Línea de referencia en nota 6 (aprobación)
    ax.axhline(y=6, color="#e67e22", linestyle="--", linewidth=1.5, label="Nota de aprobación (6)")

    # Configuración del gráfico
    ax.set_title("Promedio por Asignatura - Maestría en Ciencia de Datos",
                 fontsize=14, fontweight="bold", pad=15)
    ax.set_ylabel("Promedio", fontsize=12)
    ax.set_xlabel("Asignatura", fontsize=12)
    ax.set_ylim(0, 10.5)
    ax.legend(loc="upper right")
    ax.grid(axis="y", alpha=0.3)

    plt.xticks(rotation=25, ha="right")
    plt.tight_layout()
    plt.savefig(ruta_salida, dpi=150)
    plt.close()
    print(f"\n  Gráfico guardado en: {ruta_salida}")


# ============================================================
# PROGRAMA PRINCIPAL
# ============================================================

def main():
    """Función principal que ejecuta las 4 etapas del proyecto."""

    print("\n" + "╔" + "═" * 63 + "╗")
    print("║   SISTEMA DE EVALUACIÓN ESTUDIANTIL                          ║")
    print("║   Maestría en Ciencia de Datos - UNAJ                        ║")
    print("╚" + "═" * 63 + "╝")

    # --- ETAPA 1: Cargar datos ---
    ruta = "estudiantes.csv"
    estudiantes = cargar_estudiantes(ruta)
    print(f"\n  Se cargaron {len(estudiantes)} estudiantes desde '{ruta}'")

    # --- ETAPA 2 y 3: Crear analizador y calcular estadísticas ---
    analizador = AnalizadorAcademico(estudiantes)

    # --- ETAPA 4: Mostrar resultados ---
    mostrar_info_estudiantes(estudiantes)
    mostrar_estadisticas(analizador)
    generar_grafico_barras(analizador)

    mostrar_separador("FIN DEL REPORTE")


# Punto de entrada del programa
if __name__ == "__main__":
    main()
