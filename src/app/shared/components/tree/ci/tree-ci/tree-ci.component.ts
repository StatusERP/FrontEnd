import { PATHS_CI_PAGES } from './../../../../../config/path-page-ci';
import { PATH_AS_PAGES } from './../../../../../config/path-pages';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
interface CiNode {
	name: string;
	constante: string;
	children?: CiNode[];
}

const TREE_DATA: CiNode[] = [
	{
		name: 'Articulo',
		constante: 'demo',
		children: [
			{
				name: 'Articulos',
				constante: '_articulos'
			}
		]
	},
	{
		name: 'Lotes',
		constante: 'demo',
		children: [
			{
				name: 'Lotes',
				constante: '_lote'
			}
		]
	},
	{
		name: 'Administración',
		constante: 'demo',
		children: [
			{
				name: 'Unidad Medida',
				constante: '_unidaMedida'
			},
			{
				name: 'Consecutivos',
				constante: '_consecutivos'
			},
			{
				name: 'Clasificaciones',
				constante: '_clasificciones'
			},
			{
				name: 'Transacciones Configurables',
				constante: '_transaccionesConfigurables'
			},
			{
				name: 'Parámetros de Módulo',
				constante: '_parametroModulo'
			}
		]
	}
];

@Component({
	selector: 'app-tree-ci',
	templateUrl: './tree-ci.component.html',
	styleUrls: ['./tree-ci.component.scss']
})
export class TreeCiComponent implements OnInit {
	constructor(private _router: Router) {}
	nestdDataSource = new MatTreeNestedDataSource<CiNode>();
	nestdTreeControl = new NestedTreeControl<CiNode>((node) => node.children);

	ngOnInit(): void {
		this.nestdDataSource.data = TREE_DATA;
	}
	hasNestedChild(index: number, node: CiNode): number | undefined {
		return node?.children?.length;
	}
	navigateToPage(name: string): void {
		switch (name) {
			case '_articulo':
				void this._router.navigateByUrl(PATHS_CI_PAGES.articulo.onLypath);
				break;
			case '_lote':
				void this._router.navigateByUrl(PATHS_CI_PAGES.lote.onLypath);
				break;
			case '_parametroModulo':
				void this._router.navigateByUrl(PATHS_CI_PAGES.parametrosModulo.onLyPath);
				break;
			case '_clasificciones':
				void this._router.navigateByUrl(PATHS_CI_PAGES.clasificaciones.onLypath);
				break;
			case 'Cobrador':
				void this._router.navigateByUrl(PATH_AS_PAGES.cobrador.onlyPath);
				break;
			case 'Vendedor':
				void this._router.navigateByUrl(PATH_AS_PAGES.vendedor.onlyPath);
				break;
			case 'Responsable':
				void this._router.navigateByUrl(PATH_AS_PAGES.responsable.onlyPath);
				break;
			case 'Categoria de Cliente':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaCliente.onlyPath);
				break;
			case 'Categoria de Proveedor':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaProveedor.onlyPath);
				break;
			case 'Categoria de Articulo':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaArticulo.onlyPath);
				break;
			case 'Nivel Precio':
				void this._router.navigateByUrl(PATH_AS_PAGES.nivelPrecios.onlyPath);
				break;
			case 'Bodegas':
				void this._router.navigateByUrl(PATH_AS_PAGES.bodega.onlyPath);
				break;
			case 'Parametros del Modulo':
				void this._router.navigateByUrl(PATH_AS_PAGES.parametrosAS.onlyPath);
				break;
			default:
				break;
		}
	}
}
