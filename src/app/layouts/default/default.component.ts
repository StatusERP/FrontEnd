import { loadBodegaAccion } from './../../modules/as/tablas/otros/bodega/store/bodega.actions';
import { loadGlobalesAS } from './../../modules/as/strore/as.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
	constructor(private store: Store<any>) {}
	ngOnInit(): void {
		// eslint-disable-next-line ngrx/avoid-dispatching-multiple-actions-sequentially
		this.store.dispatch(loadGlobalesAS());
		// eslint-disable-next-line ngrx/avoid-dispatching-multiple-actions-sequentially
		this.store.dispatch(loadBodegaAccion());
	}
	sideBarOpen = true;
	sideBarToggler(): void {
		this.sideBarOpen = !this.sideBarOpen;
	}
}
