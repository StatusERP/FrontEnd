import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';
import { SessionStorageService } from '@app/services/local/storage/storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	constructor(private _router: Router, private _sessionStorageService: SessionStorageService) {}
	@Output() toggleSideBarForMe: EventEmitter<unknown> = new EventEmitter();

	toggleSideBar(): void {
		this.toggleSideBarForMe.emit();
	}
	home(): void {
		void this._router.navigateByUrl('/');
	}
	salir(): void {
		this._sessionStorageService.removeItem('data_user');
		void this._router.navigateByUrl('/login');
	}
}
