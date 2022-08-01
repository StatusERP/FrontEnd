import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { IResponse } from '@app/shared/api-models-base-interface';
import { IResponseArticulo, IRequestCreateArticulo } from '../model/articulo-api-model-interface';

const URL_ARTICULO = environment.host + '/CI/Articulo';
@Injectable({
	providedIn: 'root'
})
export class ArticuloApiService {
	constructor(private _httpClient: HttpClient) {}
	getArticulo(page?: number, rows?: number): Observable<IResponse<IResponseArticulo[]>> {
		let url = URL_ARTICULO;
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		url = url + '?page=' + page + '&rows=' + rows;
		return this._httpClient.get<IResponse<IResponseArticulo[]>>(url);
	}
	createArticulo(articulo: IRequestCreateArticulo): Observable<IResponse<number>> {
		return this._httpClient.post<IResponse<number>>(URL_ARTICULO, articulo);
	}
	deleteArticulo(idArticulo: number): Observable<IResponse<number>> {
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		const url = URL_ARTICULO + '/' + idArticulo;
		return this._httpClient.delete<IResponse<number>>(url);
	}
}
