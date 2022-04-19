import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	constructor(private _router: Router) {}
	@Output() toggleSideBarForMe: EventEmitter<unknown> = new EventEmitter();

	toggleSideBar(): void {
		this.toggleSideBarForMe.emit();
	}
	home(): void {
		void this._router.navigateByUrl('/');
	}
	salir(): void {
		console.log('salir');
	}
}
