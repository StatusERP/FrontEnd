import { AngularMaterialModule } from './../../angular-material-modulo';
import { AsPageComponent } from './pages/as-page/as-page/as-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsRoutingModule } from './as-routing.module';
console.log('asmodule');
@NgModule({
	declarations: [AsPageComponent],
	imports: [CommonModule, AsRoutingModule, AngularMaterialModule]
})
export class AsModule {}
