export interface IResponseCreateExistenciaBodega {
	articuloId: number;
	bodegaId: number;
	existenciaMinima: number;
	existenciaMaxima: number;
	puntoDeOrden: number;
}

export interface IResponseConsultarExistenciaBodega {
	id: number;
	articuloId: number;
	bodegaId: number;
	existenciaMinima: number;
	existenciaMaxima: number;
	puntoDeOrden: number;
	cantDisponible: number;
	cantReservada: number;
	cantNoAprobada: number;
	cantVencida: number;
	cantTransito: number;
	cantProduccion: number;
	cantPedida: number;
	cantRemitida: number;
	congelado: boolean;
	fechaCong: string;
	bloqueaTrans: boolean;
	fechaDescong: string;
	costoUntPromedioLoc: number;
	costoUntPromedioDol: number;
}
