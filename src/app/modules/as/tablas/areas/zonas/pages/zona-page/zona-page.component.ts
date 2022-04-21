import { IResponseZona } from './../../service/zona-api-model-interfaces';
import { ZonaApiService } from './../../service/zona-api.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-zona-page',
	templateUrl: './zona-page.component.html',
	styleUrls: ['./zona-page.component.scss']
})
export class ZonaPageComponent implements OnInit {
	constructor(private _router: Router, private _zonaApiService: ZonaApiService) {}
	listZonas: IResponseZona[] = [];
	displayedColumns: string[] = ['codZona', 'descripcion', 'activa', 'actions'];
	@ViewChild(MatSort)
	sort!: MatSort;
	searchKey!: 'carlos';
	ngOnInit(): void {
		this._loadZona(1, 5);
	}

	private _loadZona(page: number, rows: number): void {
		this._zonaApiService.getZonas(page, rows).subscribe({
			next: (response) => {
				//	console.log(response.result);
				this.listZonas = response.result;

				//this._saveDateUserAndRedirect(response);
			},
			error: () => {
				console.log('error');
			}
		});
	}
}
