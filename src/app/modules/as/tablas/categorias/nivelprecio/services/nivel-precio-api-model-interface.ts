export interface IResponseNivelPrecio {
	Id: number;
	codNivelprecio: string;
	esquemaTrabajo: string;
	sugerirDescuento: boolean;
	condicionPagoId: number;
	monedaId: number;
}

export interface IRequestCreateNivelPrecio {
	codNivelprecio: string;
	esquemaTrabajo: string;
	sugerirDescuento: boolean;
	condicionPagoId: number;
	monedaId: number;
}
