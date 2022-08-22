export interface IResponseNivelPrecio {
	Id: number;
	codNivelPrecio: string;
	esquemaTrabajo: string;
	sugerirDescuento: boolean;
	condicionPagoId: number;
	moneda: string;
}

export interface IRequestCreateNivelPrecio {
	codNivelprecio: string;
	esquemaTrabajo: string;
	sugerirDescuento: boolean;
	condicionPagoId: number;
	moneda: string;
}
