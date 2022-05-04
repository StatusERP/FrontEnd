export interface IResponseRuta {
	codRuta: string;
	descripcion: string;
	activo: boolean;
	id: number;
	isDelete: boolean;
}

export interface IRequestCreateRuta {
	codRuta: string;
	descripcion: string;
	activo: boolean;
}
export interface IHomeRuta {
	id: number;
	codRuta: string;
	description: string;
	activo: boolean;
}
