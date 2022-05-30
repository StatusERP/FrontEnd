import { TipoCambioApiService } from '../modules/as/tablas/tipos/tipo-de-cambio/service/tipo-cambio-api.service';
//#region  PATH AUTH
const loginPage = 'login';
const registerPage = 'register';
const recoverPasswordPage = 'recovery';

export const PATHS_AUTH_PAGES = {
	LoginPage: {
		withSlash: `/${loginPage}`,
		onLyPath: loginPage
	},
	registerPage: {
		withSlash: `/${registerPage}`,
		onLyPath: registerPage
	},
	recoverPasswordPage: {
		withSlash: `/${recoverPasswordPage}`,
		onLypath: recoverPasswordPage
	}
};
//#endregion

const homePage = 'home';

export const PATHS_HOME_PAGES = {
	homePage: {
		withSlash: `/${homePage}`,
		onLyPath: homePage
	}
};

//#region Modulo de Administracion del Sistema
const modulo_AS = 'as';
const administracion = 'administracion';
const reportes = 'reportes';
const seguridad = 'seguridad';
//Arbol de menu as/Tablas/
const tablas = 'tablas';
//Arbol de Menu as/Tablas/areas
const area = 'areas';
//Seguridad
const usuarioPage = 'usuario';
const grupoPage = 'grupo';
//Tablas/areas
const paisPage = 'pais';
const zonaPage = 'zona';
const rutaPage = 'ruta';
const regionPage = 'region';
//Tablas/Organizacion-Ubicaciones
const centroCostoPage = 'centroCosto';
const departamentoPage = 'departamento';
const ubicacionPage = 'ubicacion';
//tablas/funcionarios
const funcionario = 'funcionario';
const cobradorPage = 'cobrador';
const vendedorPage = 'vendedor';
const responsablePage = 'responsable';
//Tablas/Categoria
const categoria = 'categoria';
const categoriaClientePage = 'categoriaCliente';
const categoriaProveedorPage = 'categoriaProveedor';
const categoriaArticuloPage = 'categoriaArticulo';
const nivelPrecioPage = 'nivelPrecio';
//Tablas/tipos
const monedaPage = 'moneda';
const TipoCambioPage = 'tipoCambio';
const condiconPagoPage = 'condiconPago';
const codigoImpuestoPage = 'codigoImpuesto';
const retencionesPage = 'retenciones';
const tipoAnulacionesPage = 'tipoAnulaciones';
const tipodeImpuestoPage = 'tipoImpuesto';
//Tablas/Otros
const aduanaPage = 'aduana';
const atributosPage = 'atributos';
const bodegaPage = 'bodega';
const consecGloPage = 'consecGlo';
const consecNfcPage = 'consecNfc';
const encagrdoBodegaPage = 'encargadoBodega';
const entidadFinacieraPage = 'entidadFinaciera';
const modeloRetencionPage = 'modeloRetencion';
const nitPage = 'nit';
const tarjetaCreditoPage = 'tarjetaCredito';
const tipoNitPage = 'tipoNit';
const unidadMedidaPage = 'unidadMedida';
//Administracion
const parametrosASPage = 'parametrosAS';
const periodosConatblePage = 'periodosContables';
const cambioClavePage = 'cambioClave';
export const PATH_AS_PAGES = {
	withSlash: `/${modulo_AS}`,
	onlyPath: modulo_AS,
	//Seguridad
	usuario: { withSlash: `/${modulo_AS}/${usuarioPage}`, onlyPath: usuarioPage },
	grupo: { withSlash: `/${modulo_AS}/${grupoPage}`, onlyPath: grupoPage },
	// /as/areas/pais
	pais: { withSlash: `/${modulo_AS}/${paisPage}`, onlyPath: paisPage },
	zona: { withSlash: `/${modulo_AS}/${zonaPage}`, onlyPath: zonaPage },
	ruta: { withSlash: `/${modulo_AS}/${rutaPage}`, onlyPath: rutaPage },
	region: { withSlash: `/${modulo_AS}/${regionPage}`, onlyPath: regionPage },
	//as/tablas/organizacion-ubiccion
	centroCosto: { withSlash: `/${modulo_AS}/${centroCostoPage}`, onlyPath: centroCostoPage },
	departamento: { withSlash: `/${modulo_AS}/${departamentoPage}`, onlyPath: departamentoPage },
	ubicacion: { withSlash: `/${modulo_AS}/${ubicacionPage}`, onlyPath: ubicacionPage },
	//as/tablas/funcionarios/
	cobrador: { withSlash: `/${modulo_AS}/${cobradorPage}`, onlyPath: cobradorPage },
	vendedor: { withSlash: `/${modulo_AS}/${vendedorPage}`, onlyPath: vendedorPage },
	responsable: { withSlash: `/${modulo_AS}/${responsablePage}`, onlyPath: responsablePage },
	//as/tablas/Categoria/
	categoriaCliente: {
		withSlash: `/${modulo_AS}/${categoriaClientePage}`,
		onlyPath: categoriaClientePage
	},
	categoriaProveedor: {
		withSlash: `/${modulo_AS}/${categoriaProveedorPage}`,
		onlyPath: categoriaProveedorPage
	},
	categoriaArticulo: {
		withSlash: `/${modulo_AS}/${categoriaArticuloPage}`,
		onlyPath: categoriaArticuloPage
	},

	nivelPrecios: { withSlash: `/${modulo_AS}/${nivelPrecioPage}`, onlyPath: nivelPrecioPage },
	//as/tablas/tipos
	moneda: { withSlash: `/${modulo_AS}/${monedaPage}`, onlyPath: monedaPage },
	tipocambio: { withSlash: `/${modulo_AS}/${TipoCambioPage}`, onlyPath: TipoCambioPage },
	condiconPago: { withSlash: `/${modulo_AS}/${condiconPagoPage}`, onlyPath: condiconPagoPage },
	codigoImpuesto: { withSlash: `/${modulo_AS}/${codigoImpuestoPage}`, onlyPath: codigoImpuestoPage },
	retencion: { withSlash: `/${modulo_AS}/${retencionesPage}`, onlyPath: retencionesPage },
	tipoAnulacion: { withSlash: `/${modulo_AS}/${tipoAnulacionesPage}`, onlyPath: tipoAnulacionesPage },
	tipoImpuesto: { withSlash: `/${modulo_AS}/${tipodeImpuestoPage}`, onlyPath: tipodeImpuestoPage },
	//as/Tablas/Otros
	aduana: { withSlash: `/${modulo_AS}/${aduanaPage}`, onlyPath: aduanaPage },
	atributos: { withSlash: `/${modulo_AS}/${atributosPage}`, onlyPath: atributosPage },
	bodega: { withSlash: `/${modulo_AS}/${bodegaPage}`, onlyPath: bodegaPage },
	consecGlo: { withSlash: `/${modulo_AS}/${consecGloPage}`, onlyPath: consecGloPage },
	consecNfc: { withSlash: `/${modulo_AS}/${consecNfcPage}`, onlyPath: consecNfcPage },
	encagrdoBodega: { withSlash: `/${modulo_AS}/${encagrdoBodegaPage}`, onlyPath: encagrdoBodegaPage },
	entidadFinaciera: { withSlash: `/${modulo_AS}/${entidadFinacieraPage}`, onlyPath: entidadFinacieraPage },
	modeloRetencion: { withSlash: `/${modulo_AS}/${modeloRetencionPage}`, onlyPath: modeloRetencionPage },
	nit: { withSlash: `/${modulo_AS}/${nitPage}`, onlyPath: nitPage },
	tarjetaCredito: { withSlash: `/${modulo_AS}/${tarjetaCreditoPage}`, onlyPath: tarjetaCreditoPage },
	tipoNit: { withSlash: `/${modulo_AS}/${tipoNitPage}`, onlyPath: tipoNitPage },
	unidadMedida: { withSlash: `/${modulo_AS}/${unidadMedidaPage}`, onlyPath: unidadMedidaPage },

	//Administracion/ParametrosModulo
	parametrosAS: { withSlash: `/${modulo_AS}/${parametrosASPage}`, onlyPath: parametrosASPage },
	periodosContables: { withSlash: `/${modulo_AS}/${periodosConatblePage}`, onlyPath: periodosConatblePage },
	cambioClave: { withSlash: `/${modulo_AS}/${cambioClavePage}`, onlyPath: cambioClavePage }
};

//#endregion
