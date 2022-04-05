import { DefaultModule } from './layouts/default/default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material-modulo';

import { UserModule } from './page/user/user.module';
@NgModule({
	declarations: [AppComponent],
	imports: [
		FlexLayoutModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		DefaultModule,
		AngularMaterialModule,
		FormsModule,
		ReactiveFormsModule,
		UserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
