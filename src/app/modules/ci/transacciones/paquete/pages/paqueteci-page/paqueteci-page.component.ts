import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConsultaPaqueteInvApiModel } from './../../model/paqueteInv-api-model-interface';
import { AddPaqueteUsuarioPageComponent } from './../add-paqueteUsuario-page/add-paqueteUsuario-page.component';
import { AddPaqueteciPageComponent } from './../add-paqueteci-page/add-paqueteci-page.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IConsultaDocumnetoInvEnca } from './../../model/documentoInvEnca-api-model-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PaqueteciApiService } from './../../service/paqueteci-api.service';
import { SnotifyService } from 'ng-snotify';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-paqueteci-page',
	templateUrl: './paqueteci-page.component.html',
	styleUrls: ['./paqueteci-page.component.scss']
})
export class PaqueteciPageComponent implements OnInit, AfterViewInit {
	constructor(
		private _snotifyService: SnotifyService,
		private _paqueteciApiService: PaqueteciApiService,
		private _dialog: MatDialog,
		private _formBuilder: FormBuilder
	) {
		this._loadPaqueteUsuario();
	}
	selected = '';
	listDoc = new MatTableDataSource<IConsultaDocumnetoInvEnca>();
	displayedColumns: string[] = ['Consecutivo', 'Documento', 'FechaDoc', 'Referencia', 'Usuario', 'Estatus', 'actions'];
	@ViewChild(MatSort)
	sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	searchKey!: 'carlos';
	formPaqueteUsuario!: FormGroup;
	paquetes: IConsultaPaqueteInvApiModel[] = [];
	ngAfterViewInit(): void {
		this.listDoc.paginator = this.paginator;
		this.listDoc.sort = this.sort;
	}
	ngOnInit(): void {
		this._loadPaquete(1, 10000);
		this._loadDocumento(1, 10000);
	}
	private _loadDocumento(page: number, rows: number): void {
		this._paqueteciApiService.getDocumnetoInvEnc(page, rows).subscribe({
			next: (response) => {
				this.listDoc.data = response.result;
			},
			error: () => {
				console.log('error');
			}
		});
	}
	private _loadPaqueteUsuario(): void {
		this.formPaqueteUsuario = this._formBuilder.group({
			codigoPaqueteUsuario: [null, Validators.required]
		});
	}
	private _loadPaquete(page: number, rows: number): void {
		this._paqueteciApiService.getPaqueteInv(page, rows).subscribe({
			next: (response) => {
				this.paquetes = response.result;
			},
			error: () => {
				console.log('error');
			}
		});
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	clickEdit(element: any): void {
		console.log('editi');
	}
	clickDelete(id: number): void {
		console.log('delete');
	}
	openDialog(): void {
		this._dialog
			.open(AddPaqueteciPageComponent, {
				width: '60%',
				autoFocus: false,
				maxHeight: '90vh'
			})
			.afterClosed()
			.subscribe((val) => {
				if (val === 'save') {
					this._loadDocumento(1, 10000);
				}
			});
	}
	openDialog2(): void {
		this._dialog
			.open(AddPaqueteUsuarioPageComponent, {
				//width: '80%'
				autoFocus: false,
				maxHeight: '90vh'
			})
			.afterClosed()
			.subscribe((val) => {
				if (val === 'save') {
					this._loadPaquete(1, 10000);
				}
			});
	}
	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.listDoc.filter = filterValue.trim().toLowerCase();
	}
}
