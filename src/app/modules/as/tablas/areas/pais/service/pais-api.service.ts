import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '@app/shared/api-models-base-interface';
import { IConsultaPais } from './pais-api-model-interface';
import { environment } from 'src/environments/environment';

const URL_PAIS = environment.host + '/AS/Pais';
@Injectable({
	providedIn: 'root'
})
export class PaisApiService {
	constructor(private _httpClient: HttpClient) {}
	getPaises(page?: number, rows?: number): Observable<IResponse<IConsultaPais[]>> {
		let url = URL_PAIS;
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		url = url + '?page=' + page + '&rows=' + rows;
		return this._httpClient.get<IResponse<IConsultaPais[]>>(url);
	}
}
