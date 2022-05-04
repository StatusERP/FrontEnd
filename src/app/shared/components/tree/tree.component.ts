import { PATH_AS_PAGES } from './../../../config/path-pages';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface AdminNode {
	name: string;
	children?: AdminNode[];
}

const TREE_DATA: AdminNode[] = [
	{
		name: 'Seguridad',
		children: [
			{
				name: 'Usuario'
			},
			{
				name: 'Grupos'
			}
		]
	},
	{
		name: 'Reportes',
		children: [
			{
				name: 'Reporte de Privilegios'
			},
			{
				name: 'Bitacora de procesos'
			}
		]
	},

	{
		name: 'Tablas',
		children: [
			{
				name: 'Areas',
				children: [
					{
						name: 'Pais'
					},
					{
						name: 'Zona'
					},
					{
						name: 'Ruta'
					},
					{
						name: 'Regiones'
					}
				]
			},
			{
				name: 'Organizacion/Ubicacion',
				children: [
					{
						name: 'Centro de Costo'
					},
					{
						name: 'Departamneto'
					},
					{
						name: 'Ubicacion'
					}
				]
			},
			{
				name: 'Funcionarios',
				children: [
					{
						name: 'Vendedor'
					},
					{
						name: 'Cobrador'
					}
				]
			},
			{
				name: 'Categoria',
				children: [
					{
						name: 'Categoria de Cliente'
					},
					{
						name: 'Categoria de Proveedor'
					},
					{
						name: 'Categoria de Articulo'
					},
					{
						name: 'Nivel Precio'
					}
				]
			},
			{
				name: 'Tipos',
				children: [
					{
						name: 'Moneda'
					},
					{
						name: 'Tipos de cambio'
					},
					{
						name: 'Condiciones de Pago'
					},
					{
						name: 'Codigos de Impuestos'
					},
					{
						name: 'Direcciones'
					},
					{
						name: 'Retenciones'
					},
					{
						name: 'Tipos de Anulacion'
					},
					{
						name: 'Tipo de Impuestos'
					}
				]
			},
			{
				name: 'Otros',
				children: [
					{
						name: 'Entidades Finacieras'
					},
					{
						name: 'Tarjetas de Credito'
					},
					{
						name: 'Bodegas'
					},
					{
						name: 'Unidades'
					},
					{
						name: 'Tipos de NITs'
					},
					{
						name: 'NITs'
					},
					{
						name: 'Atributos'
					},
					{
						name: 'Aduanas'
					},
					{
						name: 'Encargados de bodega'
					},
					{
						name: 'Consecutivo NCF'
					},
					{
						name: 'Modelo Retenciones'
					},
					{
						name: 'Consecutivos Globales'
					},
					{
						name: 'Cargos'
					}
				]
			}
		]
	},
	{
		name: 'Administracion',
		children: [
			{
				name: 'Companias'
			},
			{
				name: 'Cambio de Clave de Acceso'
			},
			{
				name: 'Periodos Contables'
			},
			{
				name: 'Parametros del Modulo'
			}
		]
	}
];

@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
	constructor(private _router: Router) {}
	nestdDataSource = new MatTreeNestedDataSource<AdminNode>();
	nestdTreeControl = new NestedTreeControl<AdminNode>((node) => node.children);
	ngOnInit(): void {
		this.nestdDataSource.data = TREE_DATA;
	}

	hasNestedChild(index: number, node: AdminNode): number | undefined {
		return node?.children?.length;
	}
	navigateToPage(name: string): void {
		switch (name) {
			case 'Pais':
				void this._router.navigateByUrl(PATH_AS_PAGES.pais.onlyPath);
				break;
			case 'Zona':
				void this._router.navigateByUrl(PATH_AS_PAGES.zona.onlyPath);
				break;
			case 'Ruta':
				void this._router.navigateByUrl(PATH_AS_PAGES.ruta.onlyPath);
				break;
			case 'Regiones':
				void this._router.navigateByUrl(PATH_AS_PAGES.region.onlyPath);
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
