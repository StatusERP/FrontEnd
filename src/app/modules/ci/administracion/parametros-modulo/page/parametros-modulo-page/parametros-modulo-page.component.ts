import { ICreateGlobalesCI } from './../../service/parametros-ci-api-model-interface';
import { ParametrosCIApiService } from './../../service/parametros-ci-api.service';
import { SnotifyService } from 'ng-snotify';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
interface Food {
	value: string;
	viewValue: string;
}
// eslint-disable-next-line no-unused-labels

@Component({
	selector: 'app-parametros-modulo-page',
	templateUrl: './parametros-modulo-page.component.html',
	styleUrls: ['./parametros-modulo-page.component.scss']
})
export class ParametrosModuloPageComponent implements OnInit {
	globalesCI: ICreateGlobalesCI[] = [];
	globalesCIForm!: FormGroup;
	constructor(
		private _formBuilder: FormBuilder,
		private _snotifyService: SnotifyService,
		private _parametrosCIApiService: ParametrosCIApiService
	) {
		this._loadFormGroup();
	}

	ngOnInit(): void {
		this._loadGlobalesCI(1, 1);
	}

	private _loadFormGroup(): void {
		this.globalesCIForm = this._formBuilder.group({
			// eslint-disable-next-line no-useless-escape
			costoDecimal: ['0', Validators.required],
			existenciaDecimal: ['0', Validators.required],
			pesoDecimal: ['0', Validators.required],

			unidadPeso: ['', Validators.required],
			unidadVolumen: ['', Validators.required],
			usaLocalizaciones: ['', Validators.required],
			AjustarConteo: ['', Validators.required],
			maxAuditoria: ['', Validators.required],
			isDeleted: ['', Validators.required],
			createBy: ['', Validators.required],
			createDate: ['', Validators.required],
			updateBy: ['', Validators.required],
			updateDate: ['', Validators.required],
			asntAjuCompras: ['', Validators.required],
			asntAjuConsumo: ['', Validators.required],
			asntAjuCosto: ['', Validators.required],
			astnAjuFisico: ['', Validators.required],
			asntAjuMiscelan: ['', Validators.required],
			asntAjuProduc: ['', Validators.required],
			asntAjuVencim: ['', Validators.required],
			asntAjuVent: ['', Validators.required],
			ctrEnTransaccion: ['', Validators.required],
			existEnTotales: ['', Validators.required],
			fchUltProcApro: ['', Validators.required],
			fchUltProcVcto: ['', Validators.required],
			fechaInicioTrans: ['', Validators.required],
			integracionCont: ['', Validators.required],
			modAplicAsiento: ['', Validators.required],
			nombreClasif1: ['', [Validators.required, Validators.maxLength(25)]],
			nombreClasif2: ['', [Validators.required, Validators.maxLength(25)]],
			nombreClasif3: ['', [Validators.required, Validators.maxLength(25)]],
			nombreClasif4: ['', [Validators.required, Validators.maxLength(25)]],
			nombreClasif5: ['', [Validators.required, Validators.maxLength(25)]],
			nombreClasif6: ['', [Validators.required, Validators.maxLength(25)]],
			paqueteId: ['', Validators.required],
			tipoAsientoId: ['', Validators.required],
			asistenciaAutomatica: ['', Validators.required],
			cntrlSeriesEntr: ['', Validators.required],
			EAN13ReglaLocal: ['', Validators.required],
			EAN18ReglaLocal: ['', Validators.required],
			lienaMaxTrans: ['', Validators.required],
			modalidadUso: ['', Validators.required],
			prioridadBusqueda: ['', Validators.required],
			transacXusuario: ['', Validators.required],
			UCC12ReglaLocal: ['', Validators.required],
			usaCodigoBarras: ['', Validators.required],
			usaCodigoEAN13: ['', Validators.required],
			usaCodigoEAN8: ['', Validators.required],
			usaCodigoGeneric: ['', Validators.required],
			usaCodigoUCC12: ['', Validators.required],
			usaCodigoUCC8: ['', Validators.required],
			usaConsecutivos: ['', Validators.required],
			usaUnidadDistr: ['', Validators.required],
			usarAprobacion: ['', Validators.required],
			usarNumeroSerie: ['', Validators.required],
			cuarentena: ['', Validators.required],
			disponible: ['', Validators.required],
			reservada: ['', Validators.required],
			vencida: ['', Validators.required],
			email: ['', Validators.required],
			tipo: ['', Validators.required]
		});

		if (this.globalesCI.length === 0) {
			console.log('mayor a cero');
		} else {
			console.log('mayor a cero');
		}
	}

	disableSelect = new FormControl(false);

	private _loadGlobalesCI(page: number, rows: number): void {
		this._parametrosCIApiService.getGlobalesCI(page, rows).subscribe({
			next: (response) => {
				this.globalesCI = response.result;
			},
			error: () => {
				console.log('error');
			}
		});
	}

	get costoDecimalField(): AbstractControl {
		return this.globalesCIForm.get('costoDecimal')!;
	}
	get existenciaDecimalField(): AbstractControl {
		return this.globalesCIForm.get('existenciaDecimal')!;
	}
	get pesoDecimalField(): AbstractControl {
		return this.globalesCIForm.get('pesoDecimal')!;
	}
	get unidadPesoField(): AbstractControl {
		return this.globalesCIForm.get('unidadPeso')!;
	}
	get unidadVolumenField(): AbstractControl {
		return this.globalesCIForm.get('unidadVolumen')!;
	}
	get usaLocalizacionesField(): AbstractControl {
		return this.globalesCIForm.get('usaLocalizaciones')!;
	}
	get AjustarConteoField(): AbstractControl {
		return this.globalesCIForm.get('AjustarConteo')!;
	}
	get maxAuditoriaField(): AbstractControl {
		return this.globalesCIForm.get('maxAuditoria')!;
	}
	get asntAjuComprasField(): AbstractControl {
		return this.globalesCIForm.get('asntAjuCompras')!;
	}
	get asntAjuConsumoField(): AbstractControl {
		return this.globalesCIForm.get('asntAjuConsumo')!;
	}

	get asntAjuCostoField(): AbstractControl {
		return this.globalesCIForm.get('asntAjuCosto')!;
	}
	get astnAjuFisicoField(): AbstractControl {
		return this.globalesCIForm.get('astnAjuFisico')!;
	}
	get asntAjuMiscelanField(): AbstractControl {
		return this.globalesCIForm.get('asntAjuMiscelan')!;
	}
	get asntAjuProducField(): AbstractControl {
		return this.globalesCIForm.get('asntAjuProduc')!;
	}
	get asntAjuVencimField(): AbstractControl {
		return this.globalesCIForm.get('asntAjuVencim')!;
	}
	get asntAjuVentField(): AbstractControl {
		return this.globalesCIForm.get('asntAjuVent')!;
	}
	get ctrEnTransaccionField(): AbstractControl {
		return this.globalesCIForm.get('ctrEnTransaccion')!;
	}

	get existEnTotalesField(): AbstractControl {
		return this.globalesCIForm.get('existEnTotales')!;
	}
	get fchUltProcAproField(): AbstractControl {
		return this.globalesCIForm.get('fchUltProcApro')!;
	}
	get fchUltProcVctoField(): AbstractControl {
		return this.globalesCIForm.get('fchUltProcVcto')!;
	}
	get fechaInicioTrans(): AbstractControl {
		return this.globalesCIForm.get('fechaInicioTrans')!;
	}
	get integracionContField(): AbstractControl {
		return this.globalesCIForm.get('integracionCont')!;
	}
	get modAplicAsientoField(): AbstractControl {
		return this.globalesCIForm.get('modAplicAsiento')!;
	}
	get nombreClasif1Field(): AbstractControl {
		return this.globalesCIForm.get('nombreClasif1')!;
	}
	get nombreClasif12Field(): AbstractControl {
		return this.globalesCIForm.get('nombreClasif2')!;
	}
	get nombreClasif3Field(): AbstractControl {
		return this.globalesCIForm.get('nombreClasif1')!;
	}
	get nombreClasif4Field(): AbstractControl {
		return this.globalesCIForm.get('nombreClasif4')!;
	}
	get nombreClasif5Field(): AbstractControl {
		return this.globalesCIForm.get('nombreClasif5')!;
	}
	get nombreClasif6Field(): AbstractControl {
		return this.globalesCIForm.get('nombreClasif6')!;
	}
	get paqueteIdField(): AbstractControl {
		return this.globalesCIForm.get('paqueteId')!;
	}
	get tipoAsientoIdField(): AbstractControl {
		return this.globalesCIForm.get('tipoAsientoId')!;
	}
	get asistenciaAutomaticaField(): AbstractControl {
		return this.globalesCIForm.get('asistenciaAutomatica')!;
	}

	get cntrlSeriesEntrField(): AbstractControl {
		return this.globalesCIForm.get('cntrlSeriesEntr')!;
	}
	get EAN13ReglaLocalField(): AbstractControl {
		return this.globalesCIForm.get('EAN13ReglaLocal')!;
	}
	get EAN18ReglaLocalField(): AbstractControl {
		return this.globalesCIForm.get('EAN18ReglaLocal')!;
	}
	get lienaMaxTransField(): AbstractControl {
		return this.globalesCIForm.get('lienaMaxTrans')!;
	}
	get modalidadUsoField(): AbstractControl {
		return this.globalesCIForm.get('modalidadUso')!;
	}
	get prioridadBusquedaField(): AbstractControl {
		return this.globalesCIForm.get('prioridadBusqueda')!;
	}
	get transacXusuarioField(): AbstractControl {
		return this.globalesCIForm.get('transacXusuario')!;
	}

	get UCC12ReglaLocalField(): AbstractControl {
		return this.globalesCIForm.get('UCC12ReglaLocal')!;
	}
	get usaCodigoBarrasField(): AbstractControl {
		return this.globalesCIForm.get('usaCodigoBarras')!;
	}
	get usaCodigoEAN13Field(): AbstractControl {
		return this.globalesCIForm.get('usaCodigoEAN13')!;
	}
	get usaCodigoEAN8Field(): AbstractControl {
		return this.globalesCIForm.get('usaCodigoEAN8')!;
	}
	get usaCodigoGenericField(): AbstractControl {
		return this.globalesCIForm.get('usaCodigoGeneric')!;
	}
	get usaCodigoUCC12Field(): AbstractControl {
		return this.globalesCIForm.get('usaCodigoUCC12')!;
	}
	get usaCodigoUCC8Field(): AbstractControl {
		return this.globalesCIForm.get('usaCodigoUCC8')!;
	}
	get usaConsecutivosField(): AbstractControl {
		return this.globalesCIForm.get('usaConsecutivos')!;
	}
	get usaUnidadDistrField(): AbstractControl {
		return this.globalesCIForm.get('usaUnidadDistr')!;
	}
	get usarAprobacionField(): AbstractControl {
		return this.globalesCIForm.get('usarAprobacion')!;
	}
	get usarNumeroSerieField(): AbstractControl {
		return this.globalesCIForm.get('usarNumeroSerie')!;
	}
}
