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
const areas = 'areas';
const pais = 'pais';
const region = 'region';
//

export const PATH_AS_PAGES = {
	withSlash: `/${modulo_AS}`,
	onlyPath: modulo_AS
};

//#endregion
