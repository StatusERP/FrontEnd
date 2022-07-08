import { ObjToArrayPipe } from './../../administracion/transacciones-configurables/pipe/objToArray.pipe';
import { AddPaqueteUsuarioPageComponent } from './pages/add-paqueteUsuario-page/add-paqueteUsuario-page.component';
import { AddPaqueteciPageComponent } from './pages/add-paqueteci-page/add-paqueteci-page.component';
import { PaqueteciPageComponent } from './pages/paqueteci-page/paqueteci-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaqueteRoutingModule } from './paquete-routing.module';
import { AngularMaterialModule } from '@app/angular-material-modulo';

@NgModule({
	declarations: [PaqueteciPageComponent, AddPaqueteciPageComponent, AddPaqueteUsuarioPageComponent],
	imports: [
		CommonModule,
		PaqueteRoutingModule,
		AngularMaterialModule,
		FormsModule,
		MatTableModule,
		MatIconModule,
		ReactiveFormsModule
	]
})
export class PaqueteModule {}
