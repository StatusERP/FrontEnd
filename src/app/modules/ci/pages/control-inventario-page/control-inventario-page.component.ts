import { loadLocalizacionAccion } from './../../../as/tablas/otros/bodega/store/localizaciones/loc.actions';
import { loadBodegaAccion } from './../../../as/tablas/otros/bodega/store/bodega.actions';
/* eslint-disable ngrx/avoid-dispatching-multiple-actions-sequentially */
import { loadArticuloAccion } from './../../articulo/store/articulo.actions';

import { loadGlobalesCI } from './../../store/ci.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-control-inventario-page',
	templateUrl: './control-inventario-page.component.html',
	styleUrls: ['./control-inventario-page.component.scss']
})
export class ControlInventarioPageComponent implements OnInit {
	constructor(private store: Store<any>) {}
	ngOnInit(): void {
		this.store.dispatch(loadGlobalesCI());
		this.store.dispatch(loadArticuloAccion());
		this.store.dispatch(loadBodegaAccion());
		this.store.dispatch(loadLocalizacionAccion());
	}
}
