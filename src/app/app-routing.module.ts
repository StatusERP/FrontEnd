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
