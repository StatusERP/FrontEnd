import { UserApiService } from './../services/api/user-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	constructor(private _formBuilder: FormBuilder, private _router: Router, private _userApiService: UserApiService) {
		this._loadFormGroup();
	}
	formGroup!: FormGroup;
	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			firtstName: [null, Validators.required],
			lastName: [null, Validators.required],
			typeDocument: [null, Validators.required],
			documentNumber: [null, Validators.required],
			email: [null, Validators.required],
			password: [null, Validators.required],
			confirmPassword: [null, Validators.required],
			age: null
		});
	}
}
