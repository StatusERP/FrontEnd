import { environment } from './../../../../../environments/environment.prod';
import { IResponse } from './../../../../shared/api-models-base-interface';
import {
	IRequestLogin,
	IRequestRegister,
	IResponseLogin,
	IRequestResetPassword,
	IRequestChangePassword
} from './user-api-model-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_LOGIN = environment.host + '/ERPADMIN/User/Login';
const URL_REGISTER = environment.host + '/ERPADMIN/User/Register';
const URL_SEND_TOKEN_RESET_PASSWORD = environment.host + '/ERPADMIN/User/SendTokenToResetPassword';
const URL_RESET_PASSWORD = environment.host + '/ERPADMIN/User/ResetPassword';
const URL_CHANGE_PASSWORD = environment.host + '/ERPMADIN/User/ChangePassword';
@Injectable({
	providedIn: 'root'
})
export class UserApiService {
	constructor(private _httpClient: HttpClient) {}
	login(login: IRequestLogin): Observable<IResponseLogin> {
		return this._httpClient.post<IResponseLogin>(URL_LOGIN, login);
	}
	register(request: IRequestRegister): Observable<IResponse<string>> {
		return this._httpClient.post<IResponse<string>>(URL_REGISTER, request);
	}
	sendTokenToResestPassword(email: string): Observable<IResponse<string>> {
		return this._httpClient.post<IResponse<string>>(URL_SEND_TOKEN_RESET_PASSWORD, { email });
	}
	resetPassword(request: IRequestResetPassword): Observable<IResponse<string>> {
		return this._httpClient.post<IResponse<string>>(URL_RESET_PASSWORD, request);
	}
	changePassword(request: IRequestChangePassword): Observable<IResponse> {
		return this._httpClient.post<IResponse>(URL_CHANGE_PASSWORD, request);
	}
}
