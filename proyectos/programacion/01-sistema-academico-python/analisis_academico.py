# ============================================================
# analisis_academico.py - Funciones de análisis estadístico
# Trabajo Integrador: Evaluación Estudiantil
# Maestría en Ciencia de Datos - UNAJ
# ============================================================

from estudiante import Estudiante


class AnalizadorAcademico:
    """
    Clase que agrupa todas las operaciones de análisis
    sobre una lista de objetos Estudiante.

    Responsabilidades:
        - Calcular promedios por asignatura
        - Determinar porcentaje de aprobación general
        - Identificar asignaturas con mayor y menor rendimiento
        - Generar estadísticas comparativas
    """

    def __init__(self, estudiantes):
        """
        Args:
            estudiantes (list[Estudiante]): Lista de objetos Estudiante.
        """
        self._estudiantes = estudiantes
        # Extraemos los nombres de las asignaturas del primer estudiante
        if estudiantes:
            self._asignaturas = list(estudiantes[0].notas.keys())
        else:
            self._asignaturas = []

    @property
    def estudiantes(self):
        return self._estudiantes

    @property
    def asignaturas(self):
        return self._asignaturas

    # --- Estadísticas por asignatura ---
    def promedio_por_asignatura(self):
        """
        Calcula el promedio de notas para CADA asignatura.

        Returns:
            dict: {nombre_asignatura: promedio}
        """
        promedios = {}
        for asig in self._asignaturas:
            # Recolectamos la nota de cada estudiante en esta asignatura
            notas_asig = [est.notas[asig] for est in self._estudiantes]
            promedios[asig] = round(sum(notas_asig) / len(notas_asig), 2)
        return promedios

    def porcentaje_aprobacion_general(self):
        """
        Calcula el porcentaje de estudiantes aprobados (promedio >= 6).

        Returns:
            float: Porcentaje de aprobación (0 a 100).
        """
        total = len(self._estudiantes)
        if total == 0:
            return 0.0
        aprobados = sum(
            1 for est in self._estudiantes
            if est.obtener_situacion() == "Aprobado"
        )
        return round((aprobados / total) * 100, 2)

    def asignatura_mayor_rendimiento(self):
        """
        Identifica la asignatura con el promedio más alto.

        Returns:
            tuple: (nombre_asignatura, promedio)
        """
        promedios = self.promedio_por_asignatura()
        # max() sobre el diccionario usando el valor como criterio
        mejor = max(promedios, key=promedios.get)
        return mejor, promedios[mejor]

    def asignatura_menor_rendimiento(self):
        """
        Identifica la asignatura con el promedio más bajo.

        Returns:
            tuple: (nombre_asignatura, promedio)
        """
        promedios = self.promedio_por_asignatura()
        peor = min(promedios, key=promedios.get)
        return peor, promedios[peor]

    def porcentaje_aprobacion_por_asignatura(self):
        """
        Calcula el % de aprobación (nota >= 6) para cada asignatura.

        Returns:
            dict: {nombre_asignatura: porcentaje}
        """
        resultado = {}
        total = len(self._estudiantes)
        for asig in self._asignaturas:
            aprobados = sum(
                1 for est in self._estudiantes if est.notas[asig] >= 6
            )
            resultado[asig] = round((aprobados / total) * 100, 2)
        return resultado

    def mejor_estudiante(self):
        """
        Devuelve el estudiante con el promedio más alto.

        Returns:
            Estudiante: El estudiante con mejor rendimiento.
        """
        return max(self._estudiantes, key=lambda e: e.calcular_promedio())

    def estudiantes_reprobados(self):
        """
        Devuelve la lista de estudiantes reprobados.

        Returns:
            list[Estudiante]: Estudiantes con situación "Reprobado".
        """
        return [
            est for est in self._estudiantes
            if est.obtener_situacion() == "Reprobado"
        ]
