import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './../../angular-material-modulo';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'registar', component: RegisterComponent }
];
@NgModule({
	declarations: [LoginComponent, RegisterComponent, HeaderComponent],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ReactiveFormsModule,
		CommonModule,
		AngularMaterialModule,
		FlexLayoutModule
	]
})
export class UserModule {}
