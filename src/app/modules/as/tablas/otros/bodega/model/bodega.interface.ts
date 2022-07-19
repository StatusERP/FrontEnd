export interface IResponseBodega {
	codBodega: string;
	nombre: string;
	tipo: string;
	activo: boolean;
	telefono: string;
	direccion: string;
	SucursalId: number;
	id: number;
	isDelete: boolean;
}
export interface IResponseCreateBodega {
	codBodega: string;
	nombre: string;
	tipo: string;
	activa: boolean;
	telefono: string;
	direccion: string;
}
export interface IResponseLocaizacionBodega {
	codLocalizacion: string;
	descripcion: string;
	volumen: number;
	pesoMaximo: number;
	activa: boolean;
}
