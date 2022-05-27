import { FormControl, AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-articulo-page',
	templateUrl: './add-articulo-page.component.html',
	styleUrls: ['./add-articulo-page.component.scss']
})
export class AddArticuloPageComponent {
	constructor(private _formBuilder: FormBuilder) {}
	formGroup!: FormGroup;

	disableSelect = new FormControl(false);
	onFileSelected(event: Event): void {
		const htmlInput: HTMLInputElement = event.target as HTMLInputElement;
		if (htmlInput && htmlInput.files) {
			const reader = new FileReader();
			console.log(htmlInput.files);

			reader.readAsDataURL(htmlInput.files[0]);
			reader.onload = () => {
				console.log(reader.result);

				const resultImageFile = reader.result!.toString();

				this.fileNameField.setValue(htmlInput.files![0].name);
				this.imageField.setValue(resultImageFile);
			};
		}
	}

	get imageField(): AbstractControl {
		return this.formGroup.get('image')!;
	}

	get fileNameField(): AbstractControl {
		return this.formGroup.get('fileName')!;
	}
}
