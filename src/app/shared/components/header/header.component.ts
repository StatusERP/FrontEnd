import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

	toggleSideBar(): void {
		this.toggleSideBarForMe.emit();
	}
}