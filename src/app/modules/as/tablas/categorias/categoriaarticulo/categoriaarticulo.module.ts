import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaarticuloRoutingModule } from './categoriaarticulo-routing.module';
import { CategoriaarticuloPageComponent } from './pages/categoriaarticulo-page/categoriaarticulo-page.component';
import { AddCatArticuloPageComponent } from './pages/add-cat-articulo-page/add-cat-articulo-page.component';

console.log('routercategoriaarticulo');
@NgModule({
	declarations: [CategoriaarticuloPageComponent, AddCatArticuloPageComponent],
	imports: [CommonModule, CategoriaarticuloRoutingModule]
})
export class CategoriaarticuloModule {}
