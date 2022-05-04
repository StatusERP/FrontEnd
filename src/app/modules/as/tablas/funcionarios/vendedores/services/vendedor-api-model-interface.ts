export interface IResponseVendedor {
	codVendedor: string;
	nombre: string;
	email: string;
	activo: boolean;
	id: number;
	isDelete: boolean;
}

export interface IRequestCreateVendedor {
	codVendedor: string;
	nombre: string;
	email: string;
	activo: boolean;
}
