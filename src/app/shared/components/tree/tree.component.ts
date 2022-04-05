import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ok } from 'assert';
import * as internal from 'stream';

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
			},
			{
				name: 'Zona'
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
					},
					{
						name: 'Responsable'
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
						name: 'Categoria de Venedor'
					},
					{
						name: 'Categoria de articulo'
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
	nestdDataSource = new MatTreeNestedDataSource<AdminNode>();
	nestdTreeControl = new NestedTreeControl<AdminNode>((node) => node.children);
	ngOnInit(): void {
		this.nestdDataSource.data = TREE_DATA;
	}
	hasNestedChild(): void {
		return ok('hola');
	}
	/*
	hasNestedChild(index: number, node: AdminNode){
		return node?.children?.length;
	}
	*/
}
