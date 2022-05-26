import { GlobalesASApiService } from './../../modules/as/service/globales-as-api.service';
import { loadGlobalesAS, loadedGlobalesAS } from './../../modules/as/strore/as.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
	constructor(private store: Store<any>, private _globalesASApiService: GlobalesASApiService) {}
	ngOnInit(): void {
		// eslint-disable-next-line ngrx/avoid-dispatching-multiple-actions-sequentially
		this.store.dispatch(loadGlobalesAS());
		this._globalesASApiService.getGlobalesAS(1, 1).subscribe({
			next: (response) => {
				// eslint-disable-next-line ngrx/avoid-dispatching-multiple-actions-sequentially
				this.store.dispatch(loadedGlobalesAS({ globales: response.result }));
			}
		});
	}
	sideBarOpen = true;
	sideBarToggler(): void {
		this.sideBarOpen = !this.sideBarOpen;
	}
}
