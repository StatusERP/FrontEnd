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

//

export const PATH_AS_PAGES = {
	withSlash: `/${modulo_AS}`,
	onlyPath: modulo_AS,
	//as/areas/
	pais: { withSlash: `/${modulo_AS}/${area}/${paisPage}`, onlyPath: paisPage },
	zona: { withSlash: `/${modulo_AS}/${area}/${zonaPage}`, onlyPath: zonaPage },
	ruta: { withSlash: `/${modulo_AS}/${area}/${rutaPage}`, onlyPath: rutaPage },
	region: { withSlash: `/${modulo_AS}/${area}/${regionPage}`, onlyPath: regionPage }
};

//#endregion
