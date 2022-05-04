import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaproveedorRoutingModule } from './categoriaproveedor-routing.module';
import { CategoriaproveedorPageComponent } from './pages/categoriaproveedor-page/categoriaproveedor-page.component';
import { AddCatProveedorPageComponent } from './pages/add-cat-proveedor-page/add-cat-proveedor-page.component';

@NgModule({
	declarations: [CategoriaproveedorPageComponent, AddCatProveedorPageComponent],
	imports: [CommonModule, CategoriaproveedorRoutingModule]
})
export class CategoriaproveedorModule {}
