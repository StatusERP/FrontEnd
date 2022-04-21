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
	}
];
console.log('asroutingModule');

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AsRoutingModule {}
