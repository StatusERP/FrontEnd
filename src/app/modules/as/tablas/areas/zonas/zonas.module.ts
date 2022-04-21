import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonasRoutingModule } from './zonas-routing.module';
import { ZonaPageComponent } from './pages/zona-page/zona-page.component';

@NgModule({
	declarations: [ZonaPageComponent],
	imports: [
		CommonModule,
		ZonasRoutingModule,
		MatTableModule,
		MatIconModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class ZonasModule {}
