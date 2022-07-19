import { loadBodegaAccion } from './../../../../../as/tablas/otros/bodega/store/bodega.actions';
import { selectListBodega, selectLoading } from './../../../../../as/tablas/otros/bodega/store/bodega.selectors';
import { AppState } from '@app/config/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IResponseLocaizacionBodega } from './../../../../../as/tablas/otros/bodega/service/bodega-api-model-interface';
import { BodegaApiService } from './../../../../../as/tablas/otros/bodega/service/bodega-api.service';
import {
	IResponseConsecutivoCi,
	IResponseConsInvAjCon
} from './../../../../administracion/consecutivos/model/IResponseConsecutivoCi';
import { ConsecutivoApiService } from './../../../../administracion/consecutivos/service/consecutivo-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-paqueteci-page',
	templateUrl: './add-paqueteci-page.component.html',
	styleUrls: ['./add-paqueteci-page.component.scss']
})
export class AddPaqueteciPageComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private _consecutivoApiService: ConsecutivoApiService,
		private _bodegaService: BodegaApiService,
		// eslint-disable-next-line ngrx/no-typed-global-store
		private store: Store<AppState>
	) {
		this._loadFormulario();
		this.store.dispatch(loadBodegaAccion());
	}

	loading$: Observable<boolean> = new Observable();
	bodega$: Observable<any> = new Observable();
	ngOnInit(): void {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.loading$ = this.store.select(selectLoading);
		this.bodega$ = this.store.select(selectListBodega);

		setTimeout(() => {
			this._loadConsecutivo(1, 10000);
		});
	}
	formPaquete!: FormGroup;
	actionBtn = 'Guardar';
	selected = '';
	consecutivos: IResponseConsecutivoCi[] = [];
	ajuste: IResponseConsInvAjCon[] = [];
	localizaciones: IResponseLocaizacionBodega[] = [];
	// eslint-disable-next-line @typescript-eslint/ban-types
	ajusteSelect: Number | undefined;
	private _loadFormulario(): void {
		this.formPaquete = this._formBuilder.group({
			codConsecutivo: ['', Validators.required],
			descripcion: ['', Validators.required],
			fecha: [null, Validators.required],
			referencia: [null, Validators.required],
			usuario: [null, Validators.required],
			nombreUsuario: [null, Validators.required],
			fechaCreacion: [null, Validators.required],
			ajuste: ['', Validators.required]
		});
	}
	private _loadConsecutivo(page: number, rows: number): void {
		this._consecutivoApiService.getConsecutivoCI(page, rows).subscribe({
			next: (response) => {
				this.consecutivos = response.result;
			}
		});
	}
	select(id: number): void {
		//Buscamos los  registron en ConsInvAjConfig y Consecutivos Usuarios
		this._consecutivoApiService.getConsInvAjuste().subscribe({
			next: (response) => {
				const consAjusteNew = response.result;
				const _ajuste = consAjusteNew.filter((p) => p.consecutivoInvId === id);
				this.ajuste = _ajuste;

				console.log(this.ajuste);
			}
		});
		//Cargamos Bodega y Localizacion
		this._bodegaService.getLocalizacionesAll().subscribe({
			next: (response) => {
				console.log(response);
				this.localizaciones = response.result;
			}
		});
		console.log('aqui son las Localizaciones', this.localizaciones);
	}
}
