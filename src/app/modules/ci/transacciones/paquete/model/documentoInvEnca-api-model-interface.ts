export interface IConsultaDocumnetoInvEnca {
	id: number;
	paqueteInventario: string;
	documentoInv: string;
	referencia: string;
	fechaHoraCreacion: string;
	fechaDocumento: string;
	selecionado: string;
	usuario: string;
	mensajeSistema: string;
	usuarioApro: string;
	fechaHoraAprob: string;
	aprobado: boolean;
	consecutivoId: number;
}
