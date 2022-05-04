import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelprecioRoutingModule } from './nivelprecio-routing.module';

import { AddNivelPrecioPageComponent } from './pages/add-nivel-precio-page/add-nivel-precio-page.component';
import { NivelPrecioPageComponent } from './pages/nivel-precio-page/nivel-precio-page.component';

@NgModule({
	declarations: [NivelPrecioPageComponent, AddNivelPrecioPageComponent],
	imports: [CommonModule, NivelprecioRoutingModule]
})
export class NivelprecioModule {}
