import { AddArticuloPageComponent } from './pages/add-articulo-page/add-articulo-page.component';
import { ArticuloPageComponent } from './pages/articulo-page/articulo-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ArticuloPageComponent
	},
	{
		path: 'articulo/add',
		component: AddArticuloPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ArticuloRoutingModule {}
