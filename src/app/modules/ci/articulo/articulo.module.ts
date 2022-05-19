import { AngularMaterialModule } from './../../../angular-material-modulo';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloPageComponent } from './pages/articulo-page/articulo-page.component';
import { AddArticuloPageComponent } from './pages/add-articulo-page/add-articulo-page.component';

@NgModule({
	declarations: [ArticuloPageComponent, AddArticuloPageComponent],
	imports: [
		CommonModule,
		ArticuloRoutingModule,
		FormsModule,
		MatTableModule,
		MatIconModule,
		ReactiveFormsModule,
		AngularMaterialModule
	]
})
export class ArticuloModule {}
