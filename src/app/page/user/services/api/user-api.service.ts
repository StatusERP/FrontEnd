import { IResponse } from './../../../../shared/api-models-base-interface';
import { IRequestLogin, IRequestRegister, IResponseLogin } from './user-api-model-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_LOGIN = 'localhost:4200/api/ERP';
const URL_REGISTER = 'localhost:4200/api/ERP';

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
}
