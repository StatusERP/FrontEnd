import { IResponse } from './../../../../../../shared/api-models-base-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICreateCategoriaArticulo } from './categoria-articulo-api-model-interface';

const URL_CATARTICULO = environment.host + '/AS/CategoriaArticulo';
@Injectable({
	providedIn: 'root'
})
export class CategoriaArticuloApiService {
	constructor(private _httpClient: HttpClient) {}
	getCatArticulo(page?: number, rows?: number): Observable<IResponse<ICreateCategoriaArticulo[]>> {
		let url = URL_CATARTICULO;
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		url = url + '?page=' + page + '&rows=' + rows;
		return this._httpClient.get<IResponse<ICreateCategoriaArticulo[]>>(url);
	}
}
