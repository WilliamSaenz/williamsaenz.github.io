# ============================================================
# estudiante.py - Clase Estudiante
# Trabajo Integrador: Evaluación Estudiantil
# Maestría en Ciencia de Datos - UNAJ
# ============================================================


class Estudiante:
    """
    Representa a un estudiante de la maestría con sus notas
    en las seis asignaturas del programa.

    Atributos privados:
        - nombre (str): Nombre del estudiante
        - apellido (str): Apellido del estudiante
        - notas (dict): Diccionario con las notas por asignatura

    Métodos públicos:
        + calcular_promedio(): Calcula el promedio general
        + calcular_promedio_sin_aplazos(): Promedio excluyendo notas < 4
        + obtener_situacion(): Determina si está aprobado o reprobado
        + obtener_notas_detalle(): Devuelve un resumen formateado
    """

    # Nota mínima para aprobar una asignatura
    NOTA_APROBACION = 6
    # Nota mínima para que no sea considerada "aplazo"
    NOTA_APLAZO = 4

    def __init__(self, nombre, apellido, notas):
        """
        Inicializa un estudiante con sus datos personales y notas.

        Args:
            nombre (str): Nombre del estudiante.
            apellido (str): Apellido del estudiante.
            notas (dict): Diccionario {asignatura: nota} con las 6 materias.
        """
        self._nombre = nombre.strip()
        self._apellido = apellido.strip()
        self._notas = notas  # dict: {"programacion": 8, "bases_d_datos": 7, ...}

    # --- Propiedades (encapsulamiento) ---
    @property
    def nombre(self):
        return self._nombre

    @property
    def apellido(self):
        return self._apellido

    @property
    def nombre_completo(self):
        return f"{self._nombre} {self._apellido}"

    @property
    def notas(self):
        return self._notas.copy()  # Devuelve copia para proteger el original

    # --- Métodos de cálculo ---
    def calcular_promedio(self):
        """
        Calcula el promedio de TODAS las notas (con aplazos incluidos).

        Returns:
            float: Promedio redondeado a 2 decimales.
        """
        valores = list(self._notas.values())
        if not valores:
            return 0.0
        return round(sum(valores) / len(valores), 2)

    def calcular_promedio_sin_aplazos(self):
        """
        Calcula el promedio EXCLUYENDO las notas menores a 4 (aplazos).
        Útil para ver el rendimiento real en materias no aplazadas.

        Returns:
            float: Promedio sin aplazos, redondeado a 2 decimales.
        """
        # Filtramos solo las notas que NO son aplazo (>= 4)
        notas_validas = [n for n in self._notas.values() if n >= self.NOTA_APLAZO]
        if not notas_validas:
            return 0.0
        return round(sum(notas_validas) / len(notas_validas), 2)

    def obtener_situacion(self):
        """
        Determina la situación académica del estudiante.
        Un estudiante está APROBADO si su promedio general es >= 6.

        Returns:
            str: "Aprobado" o "Reprobado".
        """
        if self.calcular_promedio() >= self.NOTA_APROBACION:
            return "Aprobado"
        return "Reprobado"

    def contar_materias_aprobadas(self):
        """Cuenta cuántas materias tienen nota >= 6."""
        return sum(1 for n in self._notas.values() if n >= self.NOTA_APROBACION)

    def contar_aplazos(self):
        """Cuenta cuántas materias tienen nota < 4 (aplazos)."""
        return sum(1 for n in self._notas.values() if n < self.NOTA_APLAZO)

    # --- Representación ---
    def __str__(self):
        """Representación legible del estudiante para print()."""
        situacion = self.obtener_situacion()
        promedio = self.calcular_promedio()
        return (
            f"{self.nombre_completo} | "
            f"Promedio: {promedio} | "
            f"Situación: {situacion}"
        )

    def __repr__(self):
        """Representación técnica del objeto."""
        return f"Estudiante('{self._nombre}', '{self._apellido}', {self._notas})"
