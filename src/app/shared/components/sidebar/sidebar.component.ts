import { Router } from '@angular/router';
import { ChanelHeaderService } from './../../../services/local/chanel-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	constructor(private _chanelHeaderService: ChanelHeaderService, private _router: Router) {}
	showUser = false;
	ngOnInit(): void {
		this._chanelHeaderService.channelHeader$.subscribe((value) => {
			console.log(value);
			console.log('estamos en header');
		});
	}
	ASclick(): void {
		void this._router.navigateByUrl('/as');
	}
}
