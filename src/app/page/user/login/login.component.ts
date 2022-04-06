import { UserApiService } from './../services/api/user-api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(private _router: Router, private _formBuilder: FormBuilder, private _userApiService: UserApiService) {
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
				console.log('exito');
			},
			error: () => {
				console.log('error');
			}
		});
	}

	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, Validators.required],
			empresa: [null, Validators.required]
		});
	}
}
