import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
	selector: 'app-add-transconfigurable-page',
	templateUrl: './add-transconfigurable-page.component.html',
	styleUrls: ['./add-transconfigurable-page.component.scss']
})
export class AddTransconfigurablePageComponent {
	constructor(private _formBuilder: FormBuilder) {
		this._loadForm();
	}
	Form!: FormGroup;

	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	actionBtn: string = 'Guardar';

	private _loadForm(): void {
		this.Form = this._formBuilder.group({
			codAjuste: ['', Validators.required],
			descripcion: ['', Validators.required],
			ajuste: ['', Validators.required],
			activo: [false],
			funcionalidad: ['E']
		});
	}
}
