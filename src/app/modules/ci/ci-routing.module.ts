import { PATHS_CI_PAGES } from '@app/config/path-page-ci';
import { ControlInventarioPageComponent } from './pages/control-inventario-page/control-inventario-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth.guard';
const routes: Routes = [
	{
		path: '',
		component: ControlInventarioPageComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: PATHS_CI_PAGES.articulo.onLypath,
				loadChildren: () => import('../ci/articulo/articulo.module').then((m) => m.ArticuloModule)
			}
		]
	}
];

console.log(PATHS_CI_PAGES.articulo.withSlash);
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CiRoutingModule {}
