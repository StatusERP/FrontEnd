import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { AngularMaterialModule } from './../../../../angular-material-modulo';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosModuloRoutingModule } from './parametros-modulo-routing.module';
import { ParametrosModuloPageComponent } from './page/parametros-modulo-page/parametros-modulo-page.component';

@NgModule({
	declarations: [ParametrosModuloPageComponent],
	imports: [CommonModule, ParametrosModuloRoutingModule, AngularMaterialModule, HighchartsChartModule, FlexLayoutModule]
})
export class ParametrosModuloModule {}
