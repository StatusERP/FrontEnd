import { ICreateGlobalesCI } from './../../service/parametros-ci-api-model-interface';
import { ParametrosCIApiService } from './../../service/parametros-ci-api.service';
import { SnotifyService } from 'ng-snotify';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
			costoDecimal: ['', Validators.required],
			existenciaDecimal: ['', Validators.required],
			pesoDecimal: ['', Validators.required],
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
			nombreClasif1: ['', Validators.required],
			nombreClasif2: ['', Validators.required],
			nombreClasif3: ['', Validators.required],
			nombreClasif4: ['', Validators.required],
			nombreClasif5: ['', Validators.required],
			nombreClasif6: ['', Validators.required],
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
			usarNumeroSerie: ['', Validators.required]
		});
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
}
