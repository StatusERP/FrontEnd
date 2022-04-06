import { PATHS_AUTH_PAGES } from './config/path-pages';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { RegisterComponent } from './page/user/register/register.component';
import { LoginComponent } from './page/user/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsComponent } from './modules/as/as.component';

const routes: Routes = [
	{
		path: '',
		component: DefaultComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'as',
				component: AsComponent
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
