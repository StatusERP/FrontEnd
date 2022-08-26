import { IResponseCatCliente } from './../model/catCliente-api-model-interface';
import { IResponse } from './../../../../../../shared/api-models-base-interface';
import { Observable } from 'rxjs';
import { environment } from './../../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_CATEGORIACLIENTE = environment.host + '/AS/CategoriaCliente';
@Injectable({
	providedIn: 'root'
})
export class CatClienteApiService {
	constructor(private _httpClient: HttpClient) {}
	getCategoriaCliente(page?: number, rows?: number): Observable<IResponse<IResponseCatCliente[]>> {
		let url = URL_CATEGORIACLIENTE;
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		url = url + '?page=' + page + '&rows=' + rows;
		return this._httpClient.get<IResponse<IResponseCatCliente[]>>(url);
	}
	/* createCategoriaCliente() {}
	updateCategoriaCliente() {}
	deleteCategoriaCliente() {} */
}
