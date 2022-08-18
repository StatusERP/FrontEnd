import { TipopagoPageComponent } from './pages/tipopago-Page/tipopago-Page.component';
import { AngularMaterialModule } from './../../../../../angular-material-modulo';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondcionPagoRoutingModule } from './condcion-pago-routing.module';

@NgModule({
	declarations: [TipopagoPageComponent],
	imports: [
		CommonModule,
		CondcionPagoRoutingModule,
		FormsModule,
		MatTableModule,
		MatIconModule,
		ReactiveFormsModule,
		AngularMaterialModule
	]
})
export class CondcionPagoModule {}
