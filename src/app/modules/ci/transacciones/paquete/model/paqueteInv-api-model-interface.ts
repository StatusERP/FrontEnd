export interface IConsultaPaqueteInvApiModel {
	id: number;
	codPaqueteInv: string;
	descripcion: string;
	usuarioCreador: string;
}

export interface ICreatePaqueteInv {
	codPaqueteInv: string;
	descripcion: string;
	ultimoUsuario: string;
	usuarioCreador: string;
	fechaUltAcceso: string;
}
