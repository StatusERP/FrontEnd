import { Observable } from 'rxjs';
import { AddNivelPrecioPageComponent } from './../add-nivel-precio-page/add-nivel-precio-page.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IResponseNivelPrecio } from './../../services/nivel-precio-api-model-interface';
import { MatTableDataSource } from '@angular/material/table';
import { NivelPrecioApiService } from './../../services/nivel-precio-api.service';
import { MatDialog } from '@angular/material/dialog';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-nivel-precio-page',
	templateUrl: './nivel-precio-page.component.html',
	styleUrls: ['./nivel-precio-page.component.scss']
})
export class NivelPrecioPageComponent implements OnInit, AfterViewInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	globalesAS$: Observable<any> = new Observable();
	constructor(
		private _SnotifyService: SnotifyService,
		private _dialog: MatDialog,
		private _nivelPrecioApiService: NivelPrecioApiService
	) {}
	listNivelPrecio = new MatTableDataSource<IResponseNivelPrecio>();
	dataGlobalesAS: [] | undefined;
	displayedColumns: string[] = [
		'CodNivelPrecio',
		'EsquemaTrabajo',
		'Moneda',
		'CondicionPagoId',
		'SugerirDescuento',
		'actions'
	];
	@ViewChild(MatSort)
	sort!: MatSort;
	@ViewChild(MatPaginator) MatPaginator!: MatPaginator;
	searchKey!: 'carlos';

	ngAfterViewInit(): void {
		this.listNivelPrecio.paginator = this.MatPaginator;
		this.listNivelPrecio.sort = this.sort;
	}
	ngOnInit(): void {
		this._loadNivelPrecio();
	}

	private _loadNivelPrecio(): void {
		this._nivelPrecioApiService.getNivelPrecio().subscribe({
			next: (response) => {
				this.listNivelPrecio.data = response.result;
			},
			error: () => {
				console.log('erro');
			}
		});
	}
	openDialog(): void {
		this._dialog
			.open(AddNivelPrecioPageComponent, {
				width: '30%'
			})
			.afterClosed()
			.subscribe((val) => {
				if (val === 'save') {
					this._loadNivelPrecio();
				}
			});
	}
	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.listNivelPrecio.filter = filterValue.trim().toLowerCase();
	}
	clickDelete(id: number): void {
		this._SnotifyService.confirm('Esta seguro de eliminar el registro?', {
			position: SnotifyPosition.rightTop,
			buttons: [
				{
					text: 'SI',
					bold: true,
					action: (toast) => {
						this._SnotifyService.remove(toast.id);
						this._nivelPrecioApiService.deleteNivelprecios(id).subscribe((response) => {
							if (response && response.success) {
								this._SnotifyService.info('El registro ha sido Eliminado');
								this._loadNivelPrecio();
							}
						});
					}
				},
				{
					text: 'CANCELAR'
				}
			]
		});
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	clickEdit(element: any): void {
		this._dialog
			.open(AddNivelPrecioPageComponent, {
				width: '30%',
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				data: element
			})
			.afterClosed()
			.subscribe((val) => {
				if (val === 'update') {
					this._loadNivelPrecio();
				}
			});
	}
}
