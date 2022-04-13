import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	Roles: any = ['Admin', 'Author', 'Reader'];
	/**
	 *
	 */
	constructor(private _formBuilder: FormBuilder) {
		this._loadFormGroup();
	}
	formGroup!: FormGroup;
	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			firstName: [null, Validators.required],
			lastName: [null, Validators.required],
			documentoNumer: [null, Validators.required],
			email: [null, [Validators.required]],
			password: [null, [Validators.required, Validators.email]],
			confirmPassword: [null, Validators.required],
			age: null
		});
	}
}
