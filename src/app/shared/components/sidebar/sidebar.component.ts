import { SessionStorageService } from './../../../services/local/storage/storage.service';
import { Router } from '@angular/router';
import { ChanelHeaderService } from './../../../services/local/chanel-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	datoUsuario!: any;
	constructor(
		private _chanelHeaderService: ChanelHeaderService,
		private _router: Router,
		private _sessionStorageService: SessionStorageService
	) {}
	showUser = false;

	ngOnInit(): void {
		this._chanelHeaderService.channelHeader$.subscribe((value) => {
			console.log(value);
		});

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.datoUsuario = this._sessionStorageService.getItem('data_user');
	}

	ASclick(): void {
		void this._router.navigateByUrl('/as');
	}
	CIclick(): void {
		void this._router.navigateByUrl('/ci');
	}
}
