import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDataUser } from '@app/modules/auth/models/data-user';
import { IResponseLogin } from '@app/modules/auth/services/api/user-api-model-interface';
import { UserApiService } from '@app/modules/auth/services/api/user-api.service';
import { ChanelHeaderService } from '@app/services/local/chanel-header.service';
import { SessionStorageService } from '@app/services/local/storage/storage.service';
import { KEYS_WEB_STORAGE } from '@app/util/enums';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	inputValue = '';
	constructor(
		private _router: Router,
		private _formBuilder: FormBuilder,
		private _userApiService: UserApiService,
		private _chanelHeaderService: ChanelHeaderService,
		private _sessionStorageService: SessionStorageService
	) {
		this._loadFormGroup();
	}
	disableButton = false;
	formGroup!: FormGroup;
	clickLogin(): void {
		if (this.formGroup.valid) {
			const email = this.formGroup.get('email')?.value as string;
			const password = this.formGroup.get('password')?.value as string;

			this._login(email, password);
		}
	}

	private _login(email: string, password: string): void {
		this._userApiService.login({ email, password }).subscribe({
			next: (response) => {
				this._saveDateUserAndRedirect(response);
			},
			error: () => {
				console.log('error');
			}
		});
	}

	private _saveDateUserAndRedirect(response: IResponseLogin): void {
		const dataUser: IDataUser = {
			token: response.token,
			fullName: response.fullName,
			isAdmin: response.roles[0] === 'Administrator'
		};
		this._sessionStorageService.setItem(KEYS_WEB_STORAGE.DATA_USER, dataUser);
		this._redirectUser(dataUser.isAdmin);
	}

	private _redirectUser(isAdmin: boolean): void {
		const url = isAdmin ? '/' : '/';
		void this._router.navigateByUrl(url);
		this._chanelHeaderService.showUser(true);
	}

	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, Validators.required],
			empresa: [null, Validators.required]
		});
	}
}
