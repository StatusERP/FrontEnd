import { AddCatClientePageComponent } from './../add-cat-cliente-page/add-cat-cliente-page.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IResponseCatCliente } from './../../model/catCliente-api-model-interface';
import { MatTableDataSource } from '@angular/material/table';
import { CatClienteApiService } from './../../services/cat-cliente-api.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-categoriacliente-page',
	templateUrl: './categoriacliente-page.component.html',
	styleUrls: ['./categoriacliente-page.component.scss']
})
export class CategoriaclientePageComponent implements OnInit, AfterViewInit {
	constructor(private _catClienteApiService: CatClienteApiService, private _dialog: MatDialog) {}

	listCategoriaCliente = new MatTableDataSource<IResponseCatCliente>();
	displayedColumns: string[] = ['codCategoriaCliente', 'descripcion', 'actions'];
	@ViewChild(MatSort)
	sort!: MatSort;
	@ViewChild(MatPaginator) MatPaginator!: MatPaginator;
	searchKey!: 'carlos';
	ngOnInit(): void {
		this._loadCategoriaClientes();
	}
	ngAfterViewInit(): void {
		this.listCategoriaCliente.paginator = this.MatPaginator;
		this.listCategoriaCliente.sort = this.sort;
	}

	private _loadCategoriaClientes(): void {
		this._catClienteApiService.getCategoriaCliente(1, 1000).subscribe({
			next: (response) => {
				this.listCategoriaCliente.data = response.result;
			}
		});
	}
	openDialog(): void {
		this._dialog
			.open(AddCatClientePageComponent, {
				width: '30%'
			})
			.afterClosed()
			.subscribe((val) => {
				if (val === 'save') {
					this._loadCategoriaClientes();
				}
			});
	}
	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.listCategoriaCliente.filter = filterValue.trim().toLowerCase();
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	clickEdit(element: any): void {
		console.log(element);
	}
	clickDelete(id: number): void {
		console.log(id);
	}
}
