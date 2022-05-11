import { PATHS_CI_PAGES } from './config/path-page-ci';
import { PATHS_AUTH_PAGES, PATH_AS_PAGES } from './config/path-pages';
import { DefaultComponent } from './layouts/default/default.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: DefaultComponent,
		children: [
			{
				path: '',

				component: HomePageComponent
			},

			{
				path: PATH_AS_PAGES.onlyPath,
				loadChildren: () => import('./modules/as/as.module').then((m) => m.AsModule)
			},
			{
				path: PATH_AS_PAGES.pais.onlyPath,
				loadChildren: () => import('./modules/as/tablas/areas/pais/pais.module').then((m) => m.PaisModule)
			},
			{
				path: PATH_AS_PAGES.zona.onlyPath,
				loadChildren: () => import('./modules/as/tablas/areas/zonas/zonas.module').then((m) => m.ZonasModule)
			},
			{
				path: PATH_AS_PAGES.ruta.onlyPath,
				loadChildren: () => import('./modules/as/tablas/areas/rutas/rutas.module').then((m) => m.RutasModule)
			},
			{
				path: PATH_AS_PAGES.cobrador.onlyPath,
				loadChildren: () =>
					import('./modules/as/tablas/funcionarios/cobradores/cobradores.module').then((m) => m.CobradoresModule)
			},
			{
				path: PATH_AS_PAGES.vendedor.onlyPath,
				loadChildren: () =>
					import('./modules/as/tablas/funcionarios/vendedores/vendedores.module').then((m) => m.VendedoresModule)
			},
			{
				path: PATH_AS_PAGES.responsable.onlyPath,
				loadChildren: () =>
					import('./modules/as/tablas/funcionarios/responsables/responsables.module').then((m) => m.ResponsablesModule)
			},
			{
				path: PATH_AS_PAGES.categoriaCliente.onlyPath,
				loadChildren: () =>
					import('./modules/as/tablas/categorias/categoriacliente/categoriacliente.module').then(
						(m) => m.CategoriaclienteModule
					)
			},
			{
				path: PATH_AS_PAGES.categoriaProveedor.onlyPath,
				loadChildren: () =>
					import('./modules/as/tablas/categorias/categoriaproveedor/categoriaproveedor.module').then(
						(m) => m.CategoriaproveedorModule
					)
			},
			{
				path: PATH_AS_PAGES.categoriaArticulo.onlyPath,
				loadChildren: () =>
					import('./modules/as/tablas/categorias/categoriaarticulo/categoriaarticulo.module').then(
						(m) => m.CategoriaarticuloModule
					)
			},
			{
				path: PATH_AS_PAGES.nivelPrecios.onlyPath,
				loadChildren: () =>
					import('./modules/as/tablas/categorias/nivelprecio/nivelprecio.module').then((m) => m.NivelprecioModule)
			},
			//Otros
			{
				path: PATH_AS_PAGES.bodega.onlyPath,
				loadChildren: () => import('./modules/as/tablas/otros/bodega/bodega.module').then((m) => m.BodegaModule)
			},
			//ParametrosAS
			{
				path: PATH_AS_PAGES.parametrosAS.onlyPath,
				loadChildren: () =>
					import('./modules/as/administracion/administracion.module').then((m) => m.AdministracionModule)
			},
			//Mudulo Control Inventario
			{
				path: PATHS_CI_PAGES.moduloCI.onLyPath,
				loadChildren: () => import('./modules/ci/ci-routing.module').then((m) => m.CiRoutingModule)
			},
			{
				path: PATHS_CI_PAGES.parametrosModulo.onLyPath,
				loadChildren: () =>
					import('./modules/ci/administracion/parametros-modulo/parametros-modulo.module').then(
						(m) => m.ParametrosModuloModule
					)
			},
			{
				path: PATHS_CI_PAGES.clasificaciones.onLypath,
				loadChildren: () =>
					import('./modules/ci/administracion/clasificaciones/clasificaciones.module').then(
						(m) => m.ClasificacionesModule
					)
			}
		]
	},

	{
		path: PATHS_AUTH_PAGES.LoginPage.onLyPath,
		loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
