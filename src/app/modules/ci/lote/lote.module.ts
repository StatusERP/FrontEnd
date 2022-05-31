import { LotePageComponent } from './pages/lote-page/lote-page.component';
import { AngularMaterialModule } from './../../../angular-material-modulo';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteRoutingModule } from './lote-routing.module';
import { AddLotePageComponent } from './add-lote-page/add-lote-page.component';

@NgModule({
	declarations: [AddLotePageComponent, LotePageComponent],
	imports: [CommonModule, LoteRoutingModule, FormsModule, MatTableModule, MatIconModule, AngularMaterialModule]
})
export class LoteModule {}
