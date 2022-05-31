export interface IResponseLote {
	codeLote: string;
	loteProveedor: string;
	fechaEntrada: string;
	fechaVencimiento: string;
	fechaCuarentena: string;
	cantidadIngresada: number;
	estado: boolean;
	tipoIngreso: string;
	notas: string;
	ultimoIngreso: number;
	fechaFabricacion: string;
	proveedorId: number;
	articuloId: number;
}
