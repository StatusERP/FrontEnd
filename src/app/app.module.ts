import { DefaultModule } from './layouts/default/default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material-modulo';

import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ErrorApiInterceptor } from './interceptors/error-api.interceptor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SnotifyModule, ToastDefaults, SnotifyService } from 'ng-snotify';

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
		AuthModule,
		HttpClientModule,
		NgxUiLoaderModule,
		SnotifyModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
		{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
		SnotifyService,
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorApiInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
