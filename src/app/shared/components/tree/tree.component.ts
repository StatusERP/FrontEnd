import { PATH_AS_PAGES } from './../../../config/path-pages';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface AdminNode {
	name: string;
	constante: string;
	children?: AdminNode[];
}

const TREE_DATA: AdminNode[] = [
	{
		name: 'Seguridad',
		constante: 'demo',
		children: [
			{
				name: 'Usuario',
				constante: '_usuario'
			},
			{
				name: 'Grupos',
				constante: '_grupos'
			}
		]
	},
	{
		name: 'Reportes',
		constante: 'demo',
		children: [
			{
				name: 'Reporte de Privilegios',
				constante: '_reporteDePrivilegios'
			},
			{
				name: 'Bitacora de procesos',
				constante: '_bitacoraDeProcesos'
			}
		]
	},

	{
		name: 'Tablas',
		constante: 'demo',
		children: [
			{
				name: 'Areas',
				constante: 'demo',
				children: [
					{
						name: 'Pais',
						constante: '_pais'
					},
					{
						name: 'Zona',
						constante: '_zona'
					},
					{
						name: 'Ruta',
						constante: '_ruta'
					},
					{
						name: 'Regiones',
						constante: '_regiones'
					}
				]
			},
			{
				name: 'Organizacion/Ubicacion',
				constante: 'demo',
				children: [
					{
						name: 'Centro de Costo',
						constante: '_centoDeCoso'
					},
					{
						name: 'Departamneto',
						constante: '_departamento'
					},
					{
						name: 'Ubicacion',
						constante: '_ubicacion'
					}
				]
			},
			{
				name: 'Funcionarios',
				constante: 'demo',
				children: [
					{
						name: 'Vendedor',
						constante: '_vendedor'
					},
					{
						name: 'Cobrador',
						constante: '_cobrador'
					}
				]
			},
			{
				name: 'Categoria',
				constante: 'demo',
				children: [
					{
						name: 'Categoria de Cliente',
						constante: '_categoriaDeCliente'
					},
					{
						name: 'Categoria de Proveedor',
						constante: '_categoriaDeProveedor'
					},
					{
						name: 'Categoria de Articulo',
						constante: '_categoriaDeArticulo'
					},
					{
						name: 'Nivel Precio',
						constante: '_nivelPrecio'
					}
				]
			},
			{
				name: 'Tipos',
				constante: 'demo',
				children: [
					{
						name: 'Moneda',
						constante: '_moneda'
					},
					{
						name: 'Tipos de cambio',
						constante: 'tipoDeCambio'
					},
					{
						name: 'Condiciones de Pago',
						constante: 'condicionDePago'
					},
					{
						name: 'Codigos de Impuestos',
						constante: '_codigoDeImpuestos'
					},
					{
						name: 'Direcciones',
						constante: '_direcciones'
					},
					{
						name: 'Retenciones',
						constante: '_retenciones'
					},
					{
						name: 'Tipos de Anulacion',
						constante: '_tipoDeAnulacion'
					},
					{
						name: 'Tipo de Impuestos',
						constante: 'tipoDeImpuestos'
					}
				]
			},
			{
				name: 'Otros',
				constante: 'demo',
				children: [
					{
						name: 'Entidades Finacieras',
						constante: '_entidadesFincaieras'
					},
					{
						name: 'Tarjetas de Credito',
						constante: '_tarjetasDeCredito'
					},
					{
						name: 'Bodegas',
						constante: '_bodegas'
					},
					{
						name: 'Unidades',
						constante: '_unidades'
					},
					{
						name: 'Unidad de Medida',
						constante: '_unidadDeMedida'
					},
					{
						name: 'Tipos de NITs',
						constante: '_tipoDeNits'
					},
					{
						name: 'NITs',
						constante: '_nits'
					},
					{
						name: 'Atributos',
						constante: '_atributos'
					},
					{
						name: 'Aduanas',
						constante: '_aduanas'
					},
					{
						name: 'Encargados de bodega',
						constante: '_encargadoDeBodegas'
					},
					{
						name: 'Consecutivo NCF',
						constante: '_consecutivoNcf'
					},
					{
						name: 'Modelo Retenciones',
						constante: '_modeloRetenciones'
					},
					{
						name: 'Consecutivos Globales',
						constante: '_consecutivosGlobales'
					},
					{
						name: 'Cargos',
						constante: '_cargos'
					}
				]
			}
		]
	},
	{
		name: 'Administracion',
		constante: 'demo',
		children: [
			{
				name: 'Companias',
				constante: '_companias'
			},
			{
				name: 'Cambio de Clave de Acceso',
				constante: '_cambioDeClaveAcesso'
			},
			{
				name: 'Periodos Contables',
				constante: '_periodosContables'
			},
			{
				name: 'Parametros del Modulo',
				constante: '_parametosDelModulo'
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
			case '_pais':
				void this._router.navigateByUrl(PATH_AS_PAGES.pais.onlyPath);
				break;
			case '_zona':
				void this._router.navigateByUrl(PATH_AS_PAGES.zona.onlyPath);
				break;
			case '_ruta':
				void this._router.navigateByUrl(PATH_AS_PAGES.ruta.onlyPath);
				break;
			case '_regiones':
				void this._router.navigateByUrl(PATH_AS_PAGES.region.onlyPath);
				break;
			case '_cobrador':
				void this._router.navigateByUrl(PATH_AS_PAGES.cobrador.onlyPath);
				break;
			case '_vendedor':
				void this._router.navigateByUrl(PATH_AS_PAGES.vendedor.onlyPath);
				break;
			case '_responsable':
				void this._router.navigateByUrl(PATH_AS_PAGES.responsable.onlyPath);
				break;
			case '_categoriaDeCliente':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaCliente.onlyPath);
				break;
			case '_categoriaDeProveedor':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaProveedor.onlyPath);
				break;
			case '_categoriaDeArticulo':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaArticulo.onlyPath);
				break;
			case '_nivelPrecio':
				void this._router.navigateByUrl(PATH_AS_PAGES.nivelPrecios.onlyPath);
				break;
			case '_bodegas':
				void this._router.navigateByUrl(PATH_AS_PAGES.bodega.onlyPath);
				break;
			case '_parametrosDelModulo':
				void this._router.navigateByUrl(PATH_AS_PAGES.parametrosAS.onlyPath);
				break;
			case '_periodosContables':
				void this._router.navigateByUrl(PATH_AS_PAGES.periodosContables.onlyPath);
				break;
			case '_unidadDeMedida':
				void this._router.navigateByUrl(PATH_AS_PAGES.unidadMedida.onlyPath);
				break;
			default:
				break;
		}
	}
}
