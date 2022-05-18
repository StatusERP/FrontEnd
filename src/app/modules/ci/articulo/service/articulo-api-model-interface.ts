export interface IResponseArticulo {
	codArticulo: string;
	descripcion: string;
	clasificacion1Id: number;
	clasificacion2Id: number;
	clasificacion3Id: number;
	clasificacion4Id: number;
	clasificacion5Id: number;
	clasificacion6Id: number;
	catgoriaArticuloId: number;
}

export interface IRequestCreateArticulo {
	codArticulo: string;
	descripcion: string;
	clasificacion1Id: number;
	clasificacion2Id: number;
	clasificacion3Id: number;
	clasificacion4Id: number;
	clasificacion5Id: number;
	clasificacion6Id: number;
	FactorConver1: number;
	FactorConver2: number;
	FactorConver3: number;
	FactorConver4: number;
	FactorConver5: number;
	FactorConver6: number;
	Tipo: string;
	TiendaEnLinea: boolean;
	VentaTarjetaCredito: boolean;
	PesoNeto: number;
	PesoBruto: number;
	Volumen: number;
	Bultos: number;
	CatgoriaArticuloId: number;
	FactorEmpaque: number;
	FactorVenta: number;
	ExistenciaMinima: number;
	ExistenciaMaxima: number;
	PuntoDeOrden: number;
	CostoLoc: number;
	CostoDol: number;
	PrecioBaseLocal: number;
	PrecioBaseDolar: number;
	UltimaSalida: Date;
	UltimoMovimiento: Date;
	UltimoIngreso: Date;
	UltimoInventario: Date;
	ClaseABC: string;
	FrecuenciaConteo: number;
	CodigoBarrasVent: string;
	CodigoBarrasInvt: string;
	Activo: boolean;
	UsaLote: boolean;
	ObligaCuarentena: boolean;
	MinVidaCompra: number;
	MinVidaConsumo: number;
	MinVidaVenta: number;
	VidaUltilPromedio: number;
	DiasCuaremtema: number;
	ArticuloDelProv: string;
	OrdenMinima: number;
	PlazoReabast: number;
	LoteMultipo: number;
	Notas: string;
	UsaNumeroSerie: boolean;
	ModalidadInvFis: string;
	TipoCodBarraDet: string;
	TipoCodbarraAlm: string;
	UsaReglasLocales: boolean;
	UnidadAlmacenId: number;
	unidadVentaId: number;
	Perecedero: boolean;
	Manufacturador: string;
	CodigoRetencion: string;
	RetencionVenta: string;
	ModeloRetencion: string;
	Estilo: string;
	Talla: string;
	Color: string;
	TipoCosto: string;
	CostoPromUltimoLoc: number;
	CostoPromUltimoDol: number;
	EsImpuesto: boolean;
	TpoDocIva: string;
	SuguiereMin: boolean;
	CalculaPercep: boolean;
	PorcPercep: number;
	ImpuestoId: number;
	UnidadEmpaqueId: number;
	urlImagen: string;
	ProveedorId: number;
}
