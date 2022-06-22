export interface IResponseConsecutivoCi {
	CodConsecutivo: string;
	UltimoUsuario: string;
	Descripcion: string;
	Mascara: string;
	SiguienteConsec: string;
	Editable: string;
	MultiplesTrans: string;
	FormatoImp: string;
	UltFechaHora: string;
	TodasTrans: string;
	Tipo: string;
	UsaTraslado: string;
	EmailCFDI: string;
}
export interface IResponseConsInvAjCon {
	id: number;
	consecutivoInvId: number;
	ajusteConfigId: number;
}
export interface ICreateConsInvAjCon {
	consecutivoInvId: number;
	ajusteConfigId: number;
}

export interface IResponseConsUsuario {
	id: number;
	CodCosecutivo: number;
	usuario: number;
}
