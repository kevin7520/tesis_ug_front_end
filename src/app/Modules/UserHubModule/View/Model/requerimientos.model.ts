export interface Requerimiento {
    requerimiento: string;
    retroalimentacion: string;
    opcionRequerimiento: string;
    puntosAdicionales: number;
    id: string,
    requerimientoCompleto: string;
    requerimientoFallido: boolean;
  }
  
  export interface Nivel {
    id_nivel: string;
    nivel: number;
    opcionJuego: string;
    requerimientos: Requerimiento[];
  }
  
  export interface DatosJuego {
    fechaFinalizacion: Date;
    niveles: Nivel[];
  }