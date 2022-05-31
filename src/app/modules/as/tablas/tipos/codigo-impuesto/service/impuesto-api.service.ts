import { ImpuestoModelConsulta } from './../model/impuesto-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { IResponse } from '@app/shared/api-models-base-interface';
const URL_IMPUESTO = environment.host + '/AS/Impuesto';
@Injectable({
	providedIn: 'root'
})
export class ImpuestoApiService {
	constructor(private _httpClient: HttpClient) {}
	getImpuesto(page?: number, rows?: number): Observable<IResponse<ImpuestoModelConsulta[]>> {
		let url = URL_IMPUESTO;
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		url = url + '?page=' + page + '&rows=' + rows;
		return this._httpClient.get<IResponse<ImpuestoModelConsulta[]>>(url);
	}
}
