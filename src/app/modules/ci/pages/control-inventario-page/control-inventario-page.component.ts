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
	}
}
