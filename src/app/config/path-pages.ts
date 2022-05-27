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

const paisPage = 'pais';
const zonaPage = 'zona';
const rutaPage = 'ruta';
const regionPage = 'region';
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
//Tablas/Otros
const otros = 'otro';
const bodegaPage = 'bodega';
const unidadMedidaPage = 'unidadMedida';
//Administracion
const parametrosASPage = 'parametrosAS';
export const PATH_AS_PAGES = {
	withSlash: `/${modulo_AS}`,
	onlyPath: modulo_AS,
	// /as/areas/pais
	pais: { withSlash: `/${modulo_AS}/${tablas}/${area}/${paisPage}`, onlyPath: paisPage },
	zona: { withSlash: `/${modulo_AS}/${area}/${zonaPage}`, onlyPath: zonaPage },
	ruta: { withSlash: `/${modulo_AS}/${area}/${rutaPage}`, onlyPath: rutaPage },
	region: { withSlash: `/${modulo_AS}/${area}/${regionPage}`, onlyPath: regionPage },
	//as/tablas/funcionarios/
	cobrador: { withSlash: `/${modulo_AS}/${funcionario}/${cobradorPage}`, onlyPath: cobradorPage },
	vendedor: { withSlash: `/${modulo_AS}/${funcionario}/${vendedorPage}`, onlyPath: vendedorPage },
	responsable: { withSlash: `/${modulo_AS}/${funcionario}/${responsablePage}`, onlyPath: responsablePage },
	//as/tablas/Categoria/
	categoriaCliente: {
		withSlash: `/${modulo_AS}/${categoria}/${categoriaClientePage}`,
		onlyPath: categoriaClientePage
	},
	categoriaProveedor: {
		withSlash: `/${modulo_AS}/${categoria}/${categoriaProveedorPage}`,
		onlyPath: categoriaProveedorPage
	},
	categoriaArticulo: {
		withSlash: `/${modulo_AS}/${categoria}/${categoriaArticuloPage}`,
		onlyPath: categoriaArticuloPage
	},
	nivelPrecios: { withSlash: `/${modulo_AS}/${categoria}/${nivelPrecioPage}`, onlyPath: nivelPrecioPage },
	//as/Tablas/Otros
	bodega: { withSlash: `/${modulo_AS}/${otros}/${bodegaPage}`, onlyPath: bodegaPage },
	unidadMedida: { withSlash: `/${modulo_AS}/${otros}/${unidadMedidaPage}`, onlyPath: unidadMedidaPage },
	//Administracion/ParametrosModulo
	parametrosAS: { withSlash: `/${modulo_AS}/${parametrosASPage}`, onlyPath: parametrosASPage }
};

//#endregion
