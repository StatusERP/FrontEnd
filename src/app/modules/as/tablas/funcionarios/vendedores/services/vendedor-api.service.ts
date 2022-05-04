import { IResponse } from './../../../../../../shared/api-models-base-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponseVendedor, IRequestCreateVendedor } from './vendedor-api-model-interface';

const URL_VENDEDOR = environment.host + '/AS/Vendedor';
@Injectable({
	providedIn: 'root'
})
export class VendedorApiService {
	constructor(private _httpClient: HttpClient) {}
	getVendedor(page?: number, rows?: number): Observable<IResponse<IResponseVendedor[]>> {
		let url = URL_VENDEDOR;
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		url = url + '?page=' + page + '&rows=' + rows;
		return this._httpClient.get<IResponse<IResponseVendedor[]>>(url);
	}
	createVendedor(vendedor: IRequestCreateVendedor): Observable<IResponse<number>> {
		return this._httpClient.post<IResponse<number>>(URL_VENDEDOR, vendedor);
	}
	delete(idVendedor: number): Observable<IResponse<number>> {
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		const url = URL_VENDEDOR + '/' + idVendedor;
		return this._httpClient.delete<IResponse<number>>(url);
	}
}
