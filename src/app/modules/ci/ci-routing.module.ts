import { ControlInventarioPageComponent } from './pages/control-inventario-page/control-inventario-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		component: ControlInventarioPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CiRoutingModule {}
