export interface IRequestLogin {
	email: string;
	password: string;
}
export interface IResponseLogin {
	token: string;
	fullName: string;
	role: string[];
	success: boolean;
	errors: string[];
}
//#region  REGISTER
export interface IRequestRegister {
	firstName: string;
	lastName: string;
	typeDocument: number;
	documentoNumber: string;
	email: string;
	password: string;
	confirmPassword: string;
	age?: number;
}
//#endregion

//#region  RESET PASWWORD
export interface IRequestResetPassword {
	email: string;
	token: string;
	password: string;
}
//#endregion

//#region  CHANGE PASWWORD
export interface IRequestChangePassword {
	email: string;
	oldPassword: string;
	newPassword: string;
}
//#endregion
//#region  CHANGE PASWWORD
export interface IRequestChangePassword {
	email: string;
	oldPassword: string;
	newPassword: string;
}
//#endregion
