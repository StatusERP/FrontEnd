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
						constante: '_centroDeCosto'
					},
					{
						name: 'Departamento',
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
						constante: '_tipoDeCambio'
					},
					{
						name: 'Condiciones de Pago',
						constante: '_condicionDePago'
					},
					{
						name: 'Codigos de Impuestos',
						constante: '_codigoDeImpuestos'
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
						constante: '_tipoDeImpuestos'
					}
				]
			},
			{
				name: 'Otros',
				constante: 'demo',
				children: [
					{
						name: 'Entidades Finacieras',
						constante: '_entidadesFinciera'
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
			//Seguridad
			case '_usuario':
				void this._router.navigateByUrl(PATH_AS_PAGES.usuario.withSlash);
				break;
			case '_grupos':
				void this._router.navigateByUrl(PATH_AS_PAGES.grupo.withSlash);
				break;
			//Tablas/areas
			case '_pais':
				void this._router.navigateByUrl(PATH_AS_PAGES.pais.withSlash);
				break;
			case '_zona':
				void this._router.navigateByUrl(PATH_AS_PAGES.zona.withSlash);
				break;
			case '_ruta':
				void this._router.navigateByUrl(PATH_AS_PAGES.ruta.withSlash);
				break;
			case '_regiones':
				void this._router.navigateByUrl(PATH_AS_PAGES.region.withSlash);
				break;
			//Tablas/organizacion-ubicacion
			case '_centroDeCosto':
				void this._router.navigateByUrl(PATH_AS_PAGES.centroCosto.withSlash);
				break;
			case '_departamento':
				void this._router.navigateByUrl(PATH_AS_PAGES.departamento.withSlash);
				break;
			case '_ubicacion':
				void this._router.navigateByUrl(PATH_AS_PAGES.ubicacion.withSlash);
				break;
			//Tablas/funcionarios
			case '_cobrador':
				void this._router.navigateByUrl(PATH_AS_PAGES.cobrador.withSlash);
				break;
			case '_vendedor':
				void this._router.navigateByUrl(PATH_AS_PAGES.vendedor.withSlash);
				break;
			case '_responsable':
				void this._router.navigateByUrl(PATH_AS_PAGES.responsable.withSlash);
				break;
			//Tablas/Categorias
			case '_categoriaDeCliente':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaCliente.withSlash);
				break;
			case '_categoriaDeProveedor':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaProveedor.withSlash);
				break;
			case '_categoriaDeArticulo':
				void this._router.navigateByUrl(PATH_AS_PAGES.categoriaArticulo.withSlash);
				break;
			case '_nivelPrecio':
				void this._router.navigateByUrl(PATH_AS_PAGES.nivelPrecios.withSlash);
				break;

			//Tipos
			case '_moneda':
				void this._router.navigateByUrl(PATH_AS_PAGES.moneda.withSlash);
				break;
			case '_tipoDeCambio':
				void this._router.navigateByUrl(PATH_AS_PAGES.tipocambio.withSlash);
				break;
			case '_condicionDePago':
				void this._router.navigateByUrl(PATH_AS_PAGES.condiconPago.withSlash);
				break;
			case '_codigoDeImpuestos':
				void this._router.navigateByUrl(PATH_AS_PAGES.codigoImpuesto.withSlash);
				break;
			case '_retenciones':
				void this._router.navigateByUrl(PATH_AS_PAGES.retencion.withSlash);
				break;
			case '_tipoDeAnulacion':
				void this._router.navigateByUrl(PATH_AS_PAGES.tipoAnulacion.withSlash);
				break;
			case '_tipoDeImpuestos':
				void this._router.navigateByUrl(PATH_AS_PAGES.tipoImpuesto.withSlash);
				break;
			//as/tablas/otros
			case '_entidadesFinciera':
				void this._router.navigateByUrl(PATH_AS_PAGES.entidadFinaciera.withSlash);
				break;
			case '_tarjetasDeCredito':
				void this._router.navigateByUrl(PATH_AS_PAGES.tarjetaCredito.withSlash);
				break;
			case '_bodegas':
				void this._router.navigateByUrl(PATH_AS_PAGES.bodega.withSlash);
				break;
			case '_unidadDeMedida':
				void this._router.navigateByUrl(PATH_AS_PAGES.unidadMedida.withSlash);
				break;
			case '_tipoDeNits':
				void this._router.navigateByUrl(PATH_AS_PAGES.tipoNit.withSlash);
				break;
			case '_nits':
				void this._router.navigateByUrl(PATH_AS_PAGES.nit.withSlash);
				break;
			case '_atributos':
				void this._router.navigateByUrl(PATH_AS_PAGES.atributos.withSlash);
				break;
			case '_aduanas':
				void this._router.navigateByUrl(PATH_AS_PAGES.aduana.withSlash);
				break;
			case '_encargadoDeBodegas':
				void this._router.navigateByUrl(PATH_AS_PAGES.encagrdoBodega.withSlash);
				break;
			case '_consecutivoNcf':
				void this._router.navigateByUrl(PATH_AS_PAGES.consecNfc.withSlash);
				break;
			case '_modeloRetenciones':
				void this._router.navigateByUrl(PATH_AS_PAGES.modeloRetencion.withSlash);
				break;
			case '_consecutivosGlobales':
				void this._router.navigateByUrl(PATH_AS_PAGES.consecGlo.withSlash);
				break;
			//administracion
			case '_parametosDelModulo':
				void this._router.navigateByUrl(PATH_AS_PAGES.parametrosAS.withSlash);
				break;
			case '_periodosContables':
				void this._router.navigateByUrl(PATH_AS_PAGES.periodosContables.withSlash);
				break;
			case '_cambioDeClaveAcesso':
				void this._router.navigateByUrl(PATH_AS_PAGES.cambioClave.withSlash);
				break;
			default:
				break;
		}
	}
}
