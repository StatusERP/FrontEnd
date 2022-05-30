import { TipopagoPageComponent } from './pages/tipopago-Page/tipopago-Page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TipopagoPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CondcionPagoRoutingModule {}
