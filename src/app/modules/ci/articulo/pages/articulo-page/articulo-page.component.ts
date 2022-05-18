import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IResponseArticulo } from './../../service/articulo-api-model-interface';
import { MatTableDataSource } from '@angular/material/table';
import { ArticuloApiService } from './../../service/articulo-api.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-articulo-page',
	templateUrl: './articulo-page.component.html',
	styleUrls: ['./articulo-page.component.scss']
})
export class ArticuloPageComponent implements OnInit, AfterViewInit {
	constructor(private _snotifyService: SnotifyService, private _articuloApiService: ArticuloApiService) {}

	listArticulo = new MatTableDataSource<IResponseArticulo>();
	displayedColumns: string[] = ['CodArticulo', 'Descripcion', 'actions'];
	@ViewChild(MatSort)
	sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	searchKey!: 'carlos';
	ngOnInit(): void {
		this._loadArticulo(1, 1000000);
	}
	ngAfterViewInit(): void {
		this.listArticulo.paginator = this.paginator;
		this.listArticulo.sort = this.sort;
	}
	private _loadArticulo(page: number, rows: number): void {
		this._articuloApiService.getArticulo(page, rows).subscribe({
			next: (response) => {
				this.listArticulo.data = response.result;
			},
			error: () => {
				console.log('erro');
			}
		});
	}
	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.listArticulo.filter = filterValue.trim().toLowerCase();
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
						this._articuloApiService.deleteArticulo(id).subscribe((response) => {
							if (response && response.success) {
								this._snotifyService.info('El registro ha sido Eliminado');
								this._loadArticulo(1, 100000);
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
