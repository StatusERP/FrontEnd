import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-cat-cliente-page',
	templateUrl: './add-cat-cliente-page.component.html',
	styleUrls: ['./add-cat-cliente-page.component.scss']
})
export class AddCatClientePageComponent {
	constructor(private _formBuilder: FormBuilder) {
		this._loadFormulario();
	}
	formCategoriaCliente!: FormGroup;
	private _loadFormulario(): void {
		this.formCategoriaCliente = this._formBuilder.group({
			categoria: ['', [Validators.required, Validators.maxLength(10)]]
		});
	}
	consultar(): void {
		console.log('demo');
	}
}
