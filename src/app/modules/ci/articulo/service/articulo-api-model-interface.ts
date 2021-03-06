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

export interface IResquestConsultarArticulo {
	id: number;
	codArticulo: string;
	descripcion: string;
	clasificacion1Id: number;
	clasificacion2Id: number;
	clasificacion3Id: number;
	clasificacion4Id: number;
	clasificacion5Id: number;
	clasificacion6Id: number;
	factorConver1: number;
	factorConver2: number;
	factorConver3: number;
	factorConver4: number;
	factorConver5: number;
	factorConver6: number;
	tipo: string;
	tiendaEnLinea: boolean;
	ventaTarjetaCredito: boolean;
	pesoNeto: number;
	pesoBruto: number;
	volumen: number;
	bultos: number;
	categoriaArticuloId: number;
	factorEmpaque: number;
	factorVenta: number;
	existenciaMinima: number;
	existenciaMaxima: number;
	puntoDeOrden: number;
	costoLoc: number;
	costoDol: number;
	precioBaseLocal: number;
	precioBaseDol: number;
	ultimaSalida: string;
	ultimoMovimiento: string;
	ultimoIngreso: string;
	ultimoInventario: string;
	claseABC: string;
	frecuenciaConteo: number;
	codigoBarrasVent: string;
	codigoBarrasInvt: string;
	activo: boolean;
	usaLotes: boolean;
	obligaCuarentena: boolean;
	minVidaCompra: number;
	minVidaConsumo: number;
	minVidaVenta: number;
	vidaUtilPromedio: number;
	diasCuarentena: number;
	articuloDelProv: string;
	ordenMinima: number;
	plazoReabast: number;
	loteMultiplo: number;
	notas: string;
	usaNumerosSerie: boolean;
	//modalidadInvFis: string;
	//tipoCodBarraDet: string;
	//tipoCodBarraAlm: string;
	usaReglasLocales: boolean;
	unidadAlmacenId: number;
	unidadVentaId: number;
	perecedero: boolean;
	manufacturador: string;
	//codigoRetencion: string;
	//retencionVenta: string;
	//retencionCompra: string;
	//modeloRetencion: string;
	estilo: string;
	talla: string;
	color: string;
	tipoCosto: string;
	costoPromUltimoLoc: number;
	costoPromUltimoDol: number;
	esImpuesto: boolean;
	//tipoDocIVA: string;
	sugiereMin: boolean;
	calculaPercep: boolean;
	//porcPercep: number;
	impuestoId: number;
	unidadEmpaqueId: number;
	proveedorId: number;
	//urlimagen: string;
	usuarioCreacion: string;
	usuarioModificacion: string;
	fechaCreacion: Date;
	fechaModificacion: Date;
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
	factorConver1: number;
	factorConver2: number;
	factorConver3: number;
	factorConver4: number;
	factorConver5: number;
	factorConver6: number;
	tipo: string;
	tiendaEnLinea: boolean;
	ventaTarjetaCredito: boolean;
	pesoNeto: number;
	pesoBruto: number;
	volumen: number;
	bultos: number;
	categoriaArticuloId: number;
	factorEmpaque: number;
	factorVenta: number;
	existenciaMinima: number;
	existenciaMaxima: number;
	puntoDeOrden: number;
	costoLoc: number;
	costoDol: number;
	precioBaseLocal: number;
	precioBaseDol: number;
	ultimaSalida: string;
	ultimoMovimiento: string;
	ultimoIngreso: string;
	ultimoInventario: string;
	claseABC: string;
	frecuenciaConteo: number;
	codigoBarrasVent: string;
	codigoBarrasInvt: string;
	activo: boolean;
	usaLotes: boolean;
	obligaCuarentena: boolean;
	minVidaCompra: number;
	minVidaConsumo: number;
	minVidaVenta: number;
	vidaUtilPromedio: number;
	diasCuarentena: number;
	articuloDelProv: string;
	ordenMinima: number;
	plazoReabast: number;
	loteMultiplo: number;
	notas: string;
	usaNumerosSerie: boolean;
	//modalidadInvFis: string;
	//tipoCodBarraDet: string;
	//tipoCodBarraAlm: string;
	usaReglasLocales: boolean;
	unidadAlmacenId: number;
	unidadVentaId: number;
	perecedero: boolean;
	manufacturador: string;
	//codigoRetencion: string;
	//retencionVenta: string;
	//retencionCompra: string;
	//modeloRetencion: string;
	estilo: string;
	talla: string;
	color: string;
	tipoCosto: string;
	costoPromUltimoLoc: number;
	costoPromUltimoDol: number;
	esImpuesto: boolean;
	//tipoDocIVA: string;
	sugiereMin: boolean;
	calculaPercep: boolean;
	//porcPercep: number;
	impuestoId: number;
	unidadEmpaqueId: number;
	proveedorId: number;
	//urlimagen: string;
	usuarioCreacion: string;
	usuarioModificacion: string;
	fechaCreacion: Date;
	fechaModificacion: Date;
}
