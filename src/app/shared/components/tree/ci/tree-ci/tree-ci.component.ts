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
		name: 'Transacciones',
		constante: 'demo',
		children: [
			{
				name: 'Paquete',
				constante: '_paquete'
			},
			{
				name: 'En Linea',
				constante: '_enlinea'
			}
		]
	},
	{
		name: 'Consulta',
		constante: 'demo',
		children: [
			{
				name: 'Lotes',
				constante: '_lote'
			}
		]
	},
	{
		name: 'Reporte',
		constante: 'demo',
		children: [
			{
				name: 'Lotes',
				constante: '_lote'
			}
		]
	},
	{
		name: 'Procesos',
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
			case '_articulos':
				void this._router.navigateByUrl(PATHS_CI_PAGES.articulo.withSlash);
				break;
			case '_lote':
				void this._router.navigateByUrl(PATHS_CI_PAGES.lote.withSlash);
				break;
			case '_paquete':
				void this._router.navigateByUrl(PATHS_CI_PAGES.paqueteCI.withSlash);
				break;
			case '_enlinea':
				void this._router.navigateByUrl(PATHS_CI_PAGES.enLinea.withSlash);
				break;
			case '_parametroModulo':
				void this._router.navigateByUrl(PATHS_CI_PAGES.parametrosModulo.withSlash);
				break;
			case '_clasificciones':
				void this._router.navigateByUrl(PATHS_CI_PAGES.clasificaciones.withSlash);
				break;
			case '_consecutivos':
				void this._router.navigateByUrl(PATHS_CI_PAGES.consecutivoCI.withSlash);
				break;
			case '_transaccionesConfigurables':
				void this._router.navigateByUrl(PATHS_CI_PAGES.transaccionesConfigurables.withSlash);
				break;
			default:
				break;
		}
	}
}
