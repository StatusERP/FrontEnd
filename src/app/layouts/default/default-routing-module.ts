import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS_CI_PAGES } from '@app/config/path-page-ci';
import { PATH_AS_PAGES } from '@app/config/path-pages';
import { AuthGuard } from '@app/guards/auth.guard';
import { HomePageComponent } from '@app/modules/home/pages/home-page/home-page.component';
import { DefaultComponent } from './default.component';
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
				loadChildren: () => import('../../modules/as/as.module').then((m) => m.AsModule)
			},
			{
				path: PATHS_CI_PAGES.moduloCI.onLyPath,
				loadChildren: () => import('../../modules/ci/ci-routing.module').then((m) => m.CiRoutingModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DefaultRoutingModule {}
