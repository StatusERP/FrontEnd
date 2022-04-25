import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { IRequestCreateZona } from './../../service/zona-api-model-interfaces';
import { ZonaApiService } from './../../service/zona-api.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent {
	zonaForm!: FormGroup;
	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	actionBtn: string = 'Guardar';
	constructor(
		private _formBuider: FormBuilder,
		private _zonaApiService: ZonaApiService,
		private _snotifyService: SnotifyService,
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		@Inject(MAT_DIALOG_DATA) public editData: any,
		private _dialogRef: MatDialogRef<AddComponent>
	) {
		this._loadFormGroup();
	}

	private _loadFormGroup(): void {
		this.zonaForm = this._formBuider.group({
			codZona: ['', Validators.required],
			descripcion: ['', Validators.required]
		});
		if (this.editData) {
			this.actionBtn = 'Editar';
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			this.zonaForm.controls['codZona'].setValue(this.editData.codZona);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			this.zonaForm.controls['descripcion'].setValue(this.editData.descripcion);
		}
	}

	clickSave(): void {
		if (this.zonaForm.invalid) {
			return;
		}
		if (!this.editData) {
			const sendZona: IRequestCreateZona = {
				codZona: this.codZonaField.value as string,
				descripcion: this.descriocionField.value as string
			};
			this._save(sendZona);
		} else {
			const sendZona: IRequestCreateZona = {
				codZona: this.codZonaField.value as string,
				descripcion: this.descriocionField.value as string
			};
			this._edit(sendZona);
		}
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

	private _edit(zona: IRequestCreateZona) {
		console.log('actualizar');
		this.zonaForm.reset();
		this._snotifyService.info('El registro se actualizo sin problema', { position: SnotifyPosition.rightTop });
		this._dialogRef.close('update');
	}

	get codZonaField(): AbstractControl {
		return this.zonaForm.get('codZona')!;
	}
	get descriocionField(): AbstractControl {
		return this.zonaForm.get('descripcion')!;
	}
}
