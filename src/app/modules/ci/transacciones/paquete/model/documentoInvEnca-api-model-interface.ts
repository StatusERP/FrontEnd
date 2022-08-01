export interface ICrearDocumnetoInvEnca {
	documentoInv: string;
	referencia: string;
	fechaDocumento: string;
	consecutivoId: number;
	paqueteInventarioId: number;
}
export interface IConsultaDocumnetoInvEnca {
	id: number;
	paqueteInventario: string;
	documentoInv: string;
	referencia: string;
	fechaHoraCreacion: string;
	fechaDocumento: string;
	selecionado: boolean;
	usuario: string;
	mensajeSistema: string;
	usuarioApro: string;
	fechaHoraAprob: string;
	aprobado: boolean;
	consecutivoId: number;
}
