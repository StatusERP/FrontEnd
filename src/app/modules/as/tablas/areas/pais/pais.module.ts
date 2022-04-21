import { AngularMaterialModule } from './../../../../../angular-material-modulo';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';

console.log('PaisModule');
@NgModule({
	declarations: [PaisPageComponent],
	imports: [CommonModule, PaisRoutingModule, AngularMaterialModule]
})
export class PaisModule {}
