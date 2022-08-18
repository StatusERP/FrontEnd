import { CondicionPagoApiService } from './../../service/condicionPago-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICondicionPagoConsulta } from './../../models/condicionPago-api-model-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SnotifyService } from 'ng-snotify';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'app-tipopago-Page',
	templateUrl: './tipopago-Page.component.html',
	styleUrls: ['./tipopago-Page.component.scss']
})
export class TipopagoPageComponent implements OnInit, AfterViewInit {
	constructor(
		private _snotifyService: SnotifyService,
		private _dialog: MatDialog,
		private _condicionPagoApiService: CondicionPagoApiService
	) {}
	lista = new MatTableDataSource<ICondicionPagoConsulta>();
	displayedColumns: string[] = ['codCondicionPago', 'descripcion', 'diasNeto', 'activa', 'actions'];
	@ViewChild(MatSort)
	sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	searchKey!: 'carlos';

	ngAfterViewInit(): void {
		this.lista.paginator = this.paginator;
		this.lista.sort = this.sort;
	}
	ngOnInit(): void {
		this._loadCondiconPago(1, 1000);
	}
	private _loadCondiconPago(page: number, rows: number): void {
		this._condicionPagoApiService.getCondicionPago(page, rows).subscribe({
			next: (response) => {
				this.lista.data = response.result;
			},
			error: () => {
				console.log('error');
			}
		});
	}
	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.lista.filter = filterValue.trim().toLowerCase();
	}
	clickDelete(id: number): void {
		console.log('aqui eliminamos', id);
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	clickEdit(element: any): void {
		console.log('aqui eliminamos', element);
	}
	openDialog(): void {
		console.log('dialogo');
	}
}
