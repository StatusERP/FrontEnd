import { AppRoutingModule } from './../../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './../../angular-material-modulo';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [LoginComponent, RegisterComponent, HeaderComponent],
	imports: [CommonModule, AngularMaterialModule, FlexLayoutModule, AppRoutingModule]
})
export class UserModule {}
