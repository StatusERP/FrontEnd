import { environment } from './../../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CatClienteApiService {
	constructor(private _httpClient: HttpClient) {}
}
