import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodigoImpuestoRoutingModule } from './codigo-impuesto-routing.module';
import { CodImpuestoPageComponent } from './pages/cod-impuesto-page/cod-impuesto-page.component';

@NgModule({
	declarations: [CodImpuestoPageComponent],
	imports: [CommonModule, CodigoImpuestoRoutingModule]
})
export class CodigoImpuestoModule {}
