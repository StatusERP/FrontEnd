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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ErrorApiInterceptor } from './interceptors/error-api.interceptor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SnotifyModule, ToastDefaults, SnotifyService } from 'ng-snotify';
import { AsPageComponent } from './modules/as/pages/as-page/as-page/as-page.component';

@NgModule({
	declarations: [AppComponent, AsPageComponent],
	imports: [
		FlexLayoutModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		DefaultModule,
		AngularMaterialModule,
		FormsModule,
		ReactiveFormsModule,
		UserModule,
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
