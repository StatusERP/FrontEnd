import { IResponseConsecutivoCi } from './../../../../administracion/consecutivos/model/IResponseConsecutivoCi';
import { ConsecutivoApiService } from './../../../../administracion/consecutivos/service/consecutivo-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-paqueteci-page',
	templateUrl: './add-paqueteci-page.component.html',
	styleUrls: ['./add-paqueteci-page.component.scss']
})
export class AddPaqueteciPageComponent implements OnInit {
	constructor(private _formBuilder: FormBuilder, private _consecutivoApiService: ConsecutivoApiService) {
		this._loadFormulario();
	}
	ngOnInit(): void {
		setTimeout(() => {
			this._loadConsecutivo(1, 10000);
		});
	}
	formPaquete!: FormGroup;
	actionBtn = 'Guardar';
	selected = '';
	consecutivos: IResponseConsecutivoCi[] = [];
	private _loadFormulario(): void {
		this.formPaquete = this._formBuilder.group({
			codConsecutivo: ['', Validators.required],
			descripcion: ['', Validators.required],
			fecha: [null, Validators.required],
			referencia: [null, Validators.required],
			usuario: [null, Validators.required],
			nombreUsuario: [null, Validators.required],
			fechaCreacion: [null, Validators.required]
		});
	}
	private _loadConsecutivo(page: number, rows: number): void {
		this._consecutivoApiService.getConsecutivoCI(page, rows).subscribe({
			next: (response) => {
				this.consecutivos = response.result;
				console.log(response.result);
			}
		});
	}
	select(id: number): void {
		//Buscamos los  registron en ConsInvAjConfig y Consecutivos Usuarios
		this._consecutivoApiService.getConsInvAjuste().subscribe({
			next: (response) => {
				const consAjusteNew = response.result;
				const ajuste = consAjusteNew.filter((p) => p.consecutivoInvId === id);
				console.log(ajuste);
			}
		});
		console.log(id);
	}
}
