import { ICrearDocumnetoInvEnca } from './../../model/documentoInvEnca-api-model-interface';
import { IResponseExistenciaLote } from './../../../../lote/model/existenciaLote-interface';
import { ExistenciaLoteApiService } from './../../../../lote/service/existenciaLote-api.service';
import {
	IResponseConsultarExistenciaBodega,
	IResponseConsultarArticuloBodega
} from './../../../../../as/tablas/otros/bodega/service/existenciaBodega-api-model-interface';
import { IResponseArticulo } from '../../../../articulo/model/articulo-api-model-interface';
import { ExistenciaBodegaApiService } from './../../../../../as/tablas/otros/bodega/service/existenciaBodega-api.service';
import { selectListLocalizacion } from './../../../../../as/tablas/otros/bodega/store/localizaciones/loc.selectors';
import { IResponseAjusteSubSubTipo } from './../../../../administracion/transacciones-configurables/model/ajusteSubSubTipo-model-interface';
import { IResponseAjusteSubTipo } from './../../../../administracion/transacciones-configurables/model/ajusteSubTipo-model-interface';
import { AjusteSubSubTipoApiService } from './../../../../administracion/transacciones-configurables/service/ajusteSubSubTipo-api.service';
import { AjusteSubtipoApiService } from './../../../../administracion/transacciones-configurables/service/ajusteSubtipo-api.service';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { selectListBodega } from './../../../../../as/tablas/otros/bodega/store/bodega.selectors';
import { AppState } from '@app/config/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
	IResponseLocaizacionBodega,
	IResponseBodega
} from './../../../../../as/tablas/otros/bodega/service/bodega-api-model-interface';
import { BodegaApiService } from './../../../../../as/tablas/otros/bodega/service/bodega-api.service';
import {
	IResponseConsecutivoCi,
	IResponseConsInvAjCon
} from './../../../../administracion/consecutivos/model/IResponseConsecutivoCi';
import { ConsecutivoApiService } from './../../../../administracion/consecutivos/service/consecutivo-api.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
		private _ajusteSubtipoApiService: AjusteSubtipoApiService,
		private _ajusteSubSubTipoApiService: AjusteSubSubTipoApiService,
		private _existenciaBodegaApiService: ExistenciaBodegaApiService,
		private _existenciaLoteApiService: ExistenciaLoteApiService,
		// eslint-disable-next-line ngrx/no-typed-global-store
		private store: Store<AppState>
	) {
		this._loadFormulario();
	}

	loading$: Observable<boolean> = new Observable();
	bodega$: Observable<any> = new Observable();
	localizacion$: Observable<any> = new Observable();
	datosBodega: IResponseBodega[] = [];
	ngOnInit(): void {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

		setTimeout(() => {
			this._loadConsecutivo(1, 10000);
			this.bodega$ = this.store.select(selectListBodega);
			this.bodega$.subscribe((res) => {
				const { result } = res;
				this.datosBodega = result;
			});
		});
	}

	formPaquete!: FormGroup;
	actionBtn = 'Guardar';
	selected = '';
	consecutivos: IResponseConsecutivoCi[] = [];
	consecutivoselecionado: IResponseConsecutivoCi[] = [];
	ajuste: IResponseConsInvAjCon[] = [];
	ajusteSubtipo: IResponseAjusteSubTipo[] = [];
	ajusteSubSubTipo: IResponseAjusteSubSubTipo[] = [];
	localizaciones: IResponseLocaizacionBodega[] = [];
	locDestino: IResponseLocaizacionBodega[] = [];
	existenciaBodega: IResponseConsultarArticuloBodega[] = [];
	idBodega!: number;
	existenciaLote: IResponseExistenciaLote[] = [];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	seleccion: any;
	// eslint-disable-next-line @typescript-eslint/ban-types
	ajusteSelect: Number | undefined;
	private _loadFormulario(): void {
		this.formPaquete = this._formBuilder.group({
			codConsecutivo: ['', Validators.required],

			descripcion: [''],
			fecha: [null, Validators.required],
			referencia: [null, Validators.required],
			ajuste: [null],
			fase: [null],
			ordenCambio: [null],
			centroCosto: [null],
			cuentaContable: [null],
			bodegaDestino: ['', Validators.required],
			locDestino: ['', Validators.required],
			articulo: ['', Validators.required],
			cantidad: [0.0, Validators.required],
			cantidadDetalle: [0.0, Validators.required],
			subtipo: ['', Validators.required],
			subsubtipo: ['', Validators.required],
			lote: ['', Validators.required],
			costofiscallocal: [0, Validators.required],
			costofiscaldolar: [0, Validators.required],
			precioUnitarioLocal: [0, Validators.required],
			precioUnitarioDolar: [0, Validators.required]
		});
	}
	private _loadConsecutivo(page: number, rows: number): void {
		this._consecutivoApiService.getConsecutivoCI(page, rows).subscribe({
			next: (response) => {
				this.consecutivos = response.result;
			}
		});
	}

	selectTipo(id: number): void {
		/* consultamos ajusteSubtipo */
		this._ajusteSubtipoApiService.getAjusteSubTipo().subscribe({
			next: (response) => {
				const ajusteSubtipoNew = response.result;
				const _ajusteSubtipo = ajusteSubtipoNew.filter((p) => p.ajusteConfigId === id);
				this.ajusteSubtipo = _ajusteSubtipo;
			}
		});
		/* Consultamos ajusteSubSubTipo */
		this._ajusteSubSubTipoApiService.getAjusteSubSubTipo().subscribe({
			next: (response) => {
				const ajusteSubSubTipoNew = response.result;
				const _ajusteSubSubTipo = ajusteSubSubTipoNew.filter((p) => p.ajusteConfigId === id);
				this.ajusteSubSubTipo = _ajusteSubSubTipo;
			}
		});
	}
	selectConsecutivo(id: number): void {
		//Buscamos en consecutivo segun selecionado

		const datosNew = this.consecutivos.filter((f) => f.id == id);

		this.consecutivoselecionado = datosNew;
		//Buscamos los  registron en ConsInvAjConfig y Consecutivos Usuarios

		this._consecutivoApiService.getConsInvAjuste().subscribe({
			next: (response) => {
				const consAjusteNew = response.result;
				const _ajuste = consAjusteNew.filter((p) => p.consecutivoInvId === id);
				this.ajuste = _ajuste;
			}
		});
	}
	selectBodegaDestino(id: number): void {
		/* buscamos las localizaciones a esa bodega */
		this.idBodega = id;
		this._bodegaService.getLocalizacionesAll().subscribe({
			next: (response) => {
				const localizacionesNew = response.result;
				const _localizaciones = localizacionesNew.filter((p) => p.bodegaId == id);
				this.localizaciones = _localizaciones;
			}
		});
		/* buscar los articulos que estan en existencia bodega */
		this._existenciaBodegaApiService.getall(1, 10000).subscribe({
			next: (response) => {
				const existenciabodegaNew = response.result;
				const _existencisBodega = existenciabodegaNew.filter((b) => b.bodegaId == id);
				this.existenciaBodega = _existencisBodega;
			}
		});
	}

	selectBodega(id: number): void {
		/* buscamos las localizaciones a esa bodega */
		this.idBodega = id;
		this._bodegaService.getLocalizacionesAll().subscribe({
			next: (response) => {
				const localizacionesNew = response.result;
				const _localizaciones = localizacionesNew.filter((p) => p.bodegaId == id);
				this.localizaciones = _localizaciones;
			}
		});
		/* buscar los articulos que estan en existencia bodega */
		this._existenciaBodegaApiService.getall(1, 10000).subscribe({
			next: (response) => {
				const existenciabodegaNew = response.result;
				const _existencisBodega = existenciabodegaNew.filter((b) => b.bodegaId == id);
				this.existenciaBodega = _existencisBodega;
			}
		});
	}
	/* consultamos lote relacioando con articulo,bodega  y localizacion */
	selectArticulo(id: number): void {
		console.log(id);
		this._existenciaLoteApiService.getexitenicaLote().subscribe({
			next: (response) => {
				const existenciaLoteNew = response.result;
				const _existenciaLoteNew = existenciaLoteNew.filter(
					(f) =>
						f.articulo.id == id &&
						f.bodega.id == this.idBodega &&
						f.localizacion.id == (this.locDestinoField.value as number)
				);

				console.log('Loteexistencia', _existenciaLoteNew);
				this.existenciaLote = _existenciaLoteNew;
			}
		});
	}

	//Guardamos
	adicionar(): void {
		/* validamos que los campos esten llenos segun requerido    */
		console.log('entramos a adicionar');
		console.log(this.formPaquete);
		if (this.formPaquete.invalid) {
			return;
		}
		/* Enviamos encabezado a la tabla documentoInvEnca */
		const sendDocumentoInvEnca: ICrearDocumnetoInvEnca = {
			documentoInv: 'doc-255',
			referencia: this.referenciaField.value as string,
			fechaDocumento: this.fechaField.value as string,
			consecutivoId: 1,
			paqueteInventarioId: 2
		};
		this._save(sendDocumentoInvEnca);
	}

	_save(documentoInvEnca: ICrearDocumnetoInvEnca): void {
		console.log(documentoInvEnca);
	}

	get bodegaField(): AbstractControl {
		return this.formPaquete.get('bodega')!;
	}
	get localizacionField(): AbstractControl {
		return this.formPaquete.get('localizacion')!;
	}

	get codConsecutivoField(): AbstractControl {
		return this.formPaquete.get('codConsecutivo')!;
	}

	get descripcionField(): AbstractControl {
		return this.formPaquete.get('descripcion')!;
	}

	get fechaField(): AbstractControl {
		return this.formPaquete.get('fecha')!;
	}

	get referenciaField(): AbstractControl {
		return this.formPaquete.get('referencia')!;
	}

	get ajusteField(): AbstractControl {
		return this.formPaquete.get('ajuste')!;
	}
	get faseField(): AbstractControl {
		return this.formPaquete.get('fase')!;
	}
	get ordenCambioField(): AbstractControl {
		return this.formPaquete.get('ordenCambio')!;
	}

	get centroCostoField(): AbstractControl {
		return this.formPaquete.get('centroCosto')!;
	}
	get cuentaContableField(): AbstractControl {
		return this.formPaquete.get('cuentaContable')!;
	}

	get bodegaDestinoField(): AbstractControl {
		return this.formPaquete.get('bodegaDestino')!;
	}

	get locDestinoField(): AbstractControl {
		return this.formPaquete.get('locDestino')!;
	}
	get articuloField(): AbstractControl {
		return this.formPaquete.get('articulo')!;
	}
	get cantidadField(): AbstractControl {
		return this.formPaquete.get('cantiad')!;
	}

	get cantidadDetalleField(): AbstractControl {
		return this.formPaquete.get('cantidadDEetalle')!;
	}
	get subTipoField(): AbstractControl {
		return this.formPaquete.get('subtipo')!;
	}
	get subsubTipoField(): AbstractControl {
		return this.formPaquete.get('subsubtipo')!;
	}

	get loteField(): AbstractControl {
		return this.formPaquete.get('lote')!;
	}

	get costofiscallocalField(): AbstractControl {
		return this.formPaquete.get('costofiscallocal')!;
	}

	get costofiscalDolarField(): AbstractControl {
		return this.formPaquete.get('costofiscaldolar')!;
	}

	get precioUnitarioLocalField(): AbstractControl {
		return this.formPaquete.get('precioUnitarioLocal')!;
	}
	get precioUnitarioDolarField(): AbstractControl {
		return this.formPaquete.get('precioUnitarioDolar')!;
	}
}
