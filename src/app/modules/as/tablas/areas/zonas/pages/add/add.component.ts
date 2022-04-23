import { MatDialogRef } from '@angular/material/dialog';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { IRequestCreateZona } from './../../service/zona-api-model-interfaces';
import { ZonaApiService } from './../../service/zona-api.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
	zonaForm!: FormGroup;
	constructor(
		private _formBuider: FormBuilder,
		private _zonaApiService: ZonaApiService,
		private _snotifyService: SnotifyService,
		private _dialogRef: MatDialogRef<AddComponent>
	) {
		this._loadFormGroup();
	}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

	private _loadFormGroup(): void {
		this.zonaForm = this._formBuider.group({
			codZona: ['', Validators.required],
			descripcion: ['', Validators.required]
		});
	}

	clickSave(): void {
		if (this.zonaForm.invalid) {
			return;
		}
		//	this.zonaForm.disable();

		const sendZona: IRequestCreateZona = {
			codZona: this.codZonaField.value as string,
			descripcion: this.descriocionField.value as string
		};
		this._save(sendZona);
	}

	private _save(zona: IRequestCreateZona) {
		this._zonaApiService.createZona(zona).subscribe({
			next: (response) => {
				console.log(response);

				if (response.success) {
					this.zonaForm.reset();
					this._snotifyService.info('El registro se guardo sin problema', { position: SnotifyPosition.rightTop });
					this._dialogRef.close('save');
				} else {
					this._snotifyService.error(response.errors[0], { position: SnotifyPosition.rightTop });
				}
			},
			error: () => {
				console.log('error');
			}
		});
	}

	get codZonaField(): AbstractControl {
		return this.zonaForm.get('codZona')!;
	}
	get descriocionField(): AbstractControl {
		return this.zonaForm.get('descripcion')!;
	}
}
