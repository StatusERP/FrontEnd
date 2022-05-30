import { PATH_AS_PAGES } from './../../config/path-pages';
import { AsPageComponent } from './pages/as-page/as-page/as-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: AsPageComponent,
		canActivate: [AuthGuard]
	},
	//Seguridad
	{
		path: PATH_AS_PAGES.usuario.onlyPath,
		loadChildren: () => import('../as/seguridad/usuario/usuario.module').then((m) => m.UsuarioModule)
	},
	{
		path: PATH_AS_PAGES.grupo.onlyPath,
		loadChildren: () => import('../as/seguridad/grupo/grupo.module').then((m) => m.GrupoModule)
	},
	//Tablas/Areas
	{
		path: PATH_AS_PAGES.pais.onlyPath,
		loadChildren: () => import('../as/tablas/areas/pais/pais.module').then((m) => m.PaisModule)
	},
	{
		path: PATH_AS_PAGES.zona.onlyPath,
		loadChildren: () => import('../as/tablas/areas/zonas/zonas.module').then((m) => m.ZonasModule)
	},
	{
		path: PATH_AS_PAGES.ruta.onlyPath,
		loadChildren: () => import('../as/tablas/areas/rutas/rutas.module').then((m) => m.RutasModule)
	},
	{
		path: PATH_AS_PAGES.region.onlyPath,
		loadChildren: () => import('../as/tablas/areas/regiones/regiones.module').then((m) => m.RegionesModule)
	},
	//Tablas/Organizacion-Ubicacion
	{
		path: PATH_AS_PAGES.centroCosto.onlyPath,
		loadChildren: () =>
			import('../as/tablas/organizacion/centro-costo/centro-costo.module').then((m) => m.CentroCostoModule)
	},
	{
		path: PATH_AS_PAGES.departamento.onlyPath,
		loadChildren: () =>
			import('../as/tablas/organizacion/departamento/departamento.module').then((m) => m.DepartamentoModule)
	},
	{
		path: PATH_AS_PAGES.ubicacion.onlyPath,
		loadChildren: () => import('../as/tablas/organizacion/ubicacion/ubicacion.module').then((m) => m.UbicacionModule)
	},
	//Tablas/Funcionarios
	{
		path: PATH_AS_PAGES.vendedor.onlyPath,
		loadChildren: () => import('../as/tablas/funcionarios/vendedores/vendedores.module').then((m) => m.VendedoresModule)
	},
	{
		path: PATH_AS_PAGES.cobrador.onlyPath,
		loadChildren: () => import('../as/tablas/funcionarios/cobradores/cobradores.module').then((m) => m.CobradoresModule)
	},
	//Categorias
	{
		path: PATH_AS_PAGES.categoriaCliente.onlyPath,
		loadChildren: () =>
			import('../as/tablas/categorias/categoriacliente/categoriacliente.module').then((m) => m.CategoriaclienteModule)
	},
	{
		path: PATH_AS_PAGES.categoriaProveedor.onlyPath,
		loadChildren: () =>
			import('../as/tablas/categorias/categoriaproveedor/categoriaproveedor.module').then(
				(m) => m.CategoriaproveedorModule
			)
	},
	{
		path: PATH_AS_PAGES.categoriaArticulo.onlyPath,
		loadChildren: () =>
			import('../as/tablas/categorias/categoriaarticulo/categoriaarticulo.module').then(
				(m) => m.CategoriaarticuloModule
			)
	},
	{
		path: PATH_AS_PAGES.nivelPrecios.onlyPath,
		loadChildren: () =>
			import('../as/tablas/categorias/nivelprecio/nivelprecio.module').then((m) => m.NivelprecioModule)
	},
	//Tipos
	{
		path: PATH_AS_PAGES.moneda.onlyPath,
		loadChildren: () => import('../as/tablas/tipos/moneda/moneda.module').then((m) => m.MonedaModule)
	},
	{
		path: PATH_AS_PAGES.tipocambio.onlyPath,
		loadChildren: () =>
			import('../as/tablas/tipos/tipo-de-cambio/tipo-de-cambio.module').then((m) => m.TipoDeCambioModule)
	},
	{
		path: PATH_AS_PAGES.codigoImpuesto.onlyPath,
		loadChildren: () =>
			import('../as/tablas/tipos/codigo-impuesto/codigo-impuesto.module').then((m) => m.CodigoImpuestoModule)
	},
	{
		path: PATH_AS_PAGES.condiconPago.onlyPath,
		loadChildren: () =>
			import('../as/tablas/tipos/condcion-pago/condcion-pago.module').then((m) => m.CondcionPagoModule)
	},
	{
		path: PATH_AS_PAGES.retencion.onlyPath,
		loadChildren: () => import('../as/tablas/tipos/retenciones/retenciones.module').then((m) => m.RetencionesModule)
	},
	{
		path: PATH_AS_PAGES.tipoAnulacion.onlyPath,
		loadChildren: () =>
			import('../as/tablas/tipos/tipos-anulacion/tipos-anulacion.module').then((m) => m.TiposAnulacionModule)
	},
	{
		path: PATH_AS_PAGES.tipoImpuesto.onlyPath,
		loadChildren: () =>
			import('../as/tablas/tipos/tipo-impuesto/tipo-impuesto.module').then((m) => m.TipoImpuestoModule)
	},
	//tablas/otros
	{
		path: PATH_AS_PAGES.entidadFinaciera.onlyPath,
		loadChildren: () =>
			import('../as/tablas/otros/entidad-finaciera/entidad-finaciera.module').then((m) => m.EntidadFinacieraModule)
	},
	{
		path: PATH_AS_PAGES.tarjetaCredito.onlyPath,
		loadChildren: () =>
			import('../as/tablas/otros/tarjetas-creditos/tarjetas-creditos.module').then((m) => m.TarjetasCreditosModule)
	},
	{
		path: PATH_AS_PAGES.bodega.onlyPath,
		loadChildren: () => import('../as/tablas/otros/bodega/bodega.module').then((m) => m.BodegaModule)
	},
	{
		path: PATH_AS_PAGES.unidadMedida.onlyPath,
		loadChildren: () =>
			import('../as/tablas/otros/unidad-medida/unidad-medida.module').then((m) => m.UnidadMedidaModule)
	},
	{
		path: PATH_AS_PAGES.tipoNit.onlyPath,
		loadChildren: () => import('../as/tablas/otros/tipo-nits/tipo-nits.module').then((m) => m.TipoNitsModule)
	},
	{
		path: PATH_AS_PAGES.nit.onlyPath,
		loadChildren: () => import('../as/tablas/otros/nit/nit.module').then((m) => m.NitModule)
	},
	{
		path: PATH_AS_PAGES.atributos.onlyPath,
		loadChildren: () => import('../as/tablas/otros/atributos/atributos.module').then((m) => m.AtributosModule)
	},
	{
		path: PATH_AS_PAGES.aduana.onlyPath,
		loadChildren: () => import('../as/tablas/otros/aduanas/aduanas.module').then((m) => m.AduanasModule)
	},
	{
		path: PATH_AS_PAGES.encagrdoBodega.onlyPath,
		loadChildren: () =>
			import('../as/tablas/otros/encargado-bodega/encargado-bodega.module').then((m) => m.EncargadoBodegaModule)
	},
	{
		path: PATH_AS_PAGES.consecNfc.onlyPath,
		loadChildren: () =>
			import('../as/tablas/otros/consecutivo-ncf/consecutivo-ncf.module').then((m) => m.ConsecutivoNCFModule)
	},
	{
		path: PATH_AS_PAGES.modeloRetencion.onlyPath,
		loadChildren: () =>
			import('../as/tablas/otros/modelo-retencion/modelo-retencion.module').then((m) => m.ModeloRetencionModule)
	},
	{
		path: PATH_AS_PAGES.consecGlo.onlyPath,
		loadChildren: () =>
			import('../as/tablas/otros/consecutivo-globales/consecutivo-globales.module').then(
				(m) => m.ConsecutivoGlobalesModule
			)
	},
	//Administracion
	{
		path: PATH_AS_PAGES.cambioClave.onlyPath,
		loadChildren: () => import('../as/administracion/cambio-clave/cambio-clave.module').then((m) => m.CambioClaveModule)
	},
	{
		path: PATH_AS_PAGES.periodosContables.onlyPath,
		loadChildren: () =>
			import('../as/administracion/periodos-contable/periodos-contable.module').then((m) => m.PeriodosContableModule)
	},
	{
		path: PATH_AS_PAGES.parametrosAS.onlyPath,
		loadChildren: () =>
			import('../as/administracion/parametros-modulo/parametros-modulo.module').then((m) => m.ParametrosModuloModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AsRoutingModule {}
