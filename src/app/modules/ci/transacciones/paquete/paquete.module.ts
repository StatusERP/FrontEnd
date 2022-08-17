import { KzMaskCurrencyDirective } from './../../../../shared/directivas/kz-mask-currency.directive';
import { KzMaskDirective } from './../../../../shared/directivas/kz-mask.directive';
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
import { ConsecutivoComponent } from './componentes/consecutivo/consecutivo.component';
import { BodegaComponent } from './componentes/bodega/bodega.component';
import { LocalizacionComponent } from './componentes/localizacion/localizacion.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { LoteComponent } from './componentes/lote/lote.component';
import { SubtipoComponent } from './componentes/subtipo/subtipo.component';
import { SubsubtipoComponent } from './componentes/subsubtipo/subsubtipo.component';
import { TipoComponent } from './componentes/tipo/tipo.component';
import { CtrocostoComponent } from './componentes/ctrocosto/ctrocosto.component';
import { CtacontableComponent } from './componentes/ctacontable/ctacontable.component';
import { AddLotePageComponent } from './pages/add-lote-page/add-lote-page.component';

@NgModule({
	declarations: [
		PaqueteciPageComponent,
		AddPaqueteciPageComponent,
		AddPaqueteUsuarioPageComponent,
		ConsecutivoComponent,
		BodegaComponent,
		LocalizacionComponent,
		ArticuloComponent,
		LoteComponent,
		SubtipoComponent,
		SubsubtipoComponent,
		TipoComponent,
		CtrocostoComponent,
		CtacontableComponent,
		KzMaskDirective,
		KzMaskCurrencyDirective,
		AddLotePageComponent
	],
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
