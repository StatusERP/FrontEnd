import { AsPageComponent } from './modules/as/pages/as-page/as-page/as-page.component';
import { PATHS_AUTH_PAGES } from './config/path-pages';
import { DefaultComponent } from './layouts/default/default.component';

import { RegisterComponent } from './page/user/register/register.component';

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
				path: 'as',
				component: AsPageComponent
			}
		]
	},

	{
		path: PATHS_AUTH_PAGES.LoginPage.onLyPath,
		loadChildren: () => import('./page/user/user.module').then((m) => m.UserModule)
	},
	{ path: 'register', component: RegisterComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
