import { AngularMaterialModule } from './../../../angular-material-modulo';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ParametrosPageComponent } from './pages/parametros-page/parametros-page.component';

@NgModule({
	declarations: [ParametrosPageComponent],
	imports: [CommonModule, AdministracionRoutingModule, AngularMaterialModule]
})
export class AdministracionModule {}
