import { EditLotePageComponent } from './../edit-lote-page/edit-lote-page.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IResponseLote } from './../../model/lote-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { LoteApiService } from './../../service/lote-api.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-lote-page',
	templateUrl: './lote-page.component.html',
	styleUrls: ['./lote-page.component.scss']
})
export class LotePageComponent implements OnInit, AfterViewInit {
	constructor(
		private _snotifyService: SnotifyService,
		private _loteApiService: LoteApiService,
		private _dialog: MatDialog
	) {}
	listLote = new MatTableDataSource<IResponseLote>();
	displayedColumns: string[] = [
		'Lote',
		'Articulo',
		'Descripcion',
		'Perecedero',
		'Vencimiento',
		'Estado',
		'Ingreso',
		'actions'
	];
	@ViewChild(MatSort)
	sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	searchKey!: 'h2c';
	ngAfterViewInit(): void {
		this.listLote.paginator = this.paginator;
		this.listLote.sort = this.sort;
	}
	ngOnInit(): void {
		this._loadLote();
	}
	private _loadLote(): void {
		this._loteApiService.getLote().subscribe({
			next: (response) => {
				this.listLote.data = response.result;
				console.log(response);
			},
			error: () => {
				console.log('erro');
			}
		});
	}
	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.listLote.filter = filterValue.trim().toLowerCase();
	}

	clickAplicar(datos: number): void {
		console.log(datos);
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	clickEdit(datos: any): void {
		console.log(datos);
		this._dialog
			.open(EditLotePageComponent, {
				width: '30%',
				autoFocus: false,
				maxHeight: '90vh',
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				data: datos
			})
			.afterClosed()
			.subscribe((val) => {
				if (val === 'sava') {
					this._loadLote();
				}
			});
	}
	clickDelete(id: number): void {
		this._snotifyService.confirm('Esta seguro de eliminar el registro?', {
			position: SnotifyPosition.rightTop,
			buttons: [
				{
					text: 'SI',
					bold: true,
					action: (toast) => {
						this._snotifyService.remove(toast.id);
						this._loteApiService.deleteLote(id).subscribe((response) => {
							if (response && response.success) {
								this._snotifyService.info('El registro ha sido Eliminado');
								this._loadLote();
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
}
