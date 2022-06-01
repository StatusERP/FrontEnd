import { ImpuestoModelConsulta } from './../../../../as/tablas/tipos/codigo-impuesto/model/impuesto-model';
import {
	ICreateUnidadMedida,
	IResponseUnidadMedida
} from './../../../../as/tablas/otros/unidad-medida/service/unidad-medida-api-model-interface';
import { IConsultaPais } from './../../../../as/tablas/areas/pais/service/pais-api-model-interface';
import { IResponseClasificacion } from './../../../administracion/clasificaciones/services/clasificacion-api-model-interface';
import { PaisApiService } from './../../../../as/tablas/areas/pais/service/pais-api.service';
import { ClasificacionApiService } from './../../../administracion/clasificaciones/services/clasificacion-api.service';
import { ImpuestoApiService } from './../../../../as/tablas/tipos/codigo-impuesto/service/impuesto-api.service';
import { CategoriaArticuloApiService } from './../../../../as/tablas/categorias/categoriaarticulo/service/categoria-articulo-api.service';
import { UnidadMedidaApiService } from './../../../../as/tablas/otros/unidad-medida/service/unidad-medida-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnotifyService } from 'ng-snotify';
import { ArticuloApiService } from './../../service/articulo-api.service';
import { FormControl, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-articulo-page',
	templateUrl: './add-articulo-page.component.html',
	styleUrls: ['./add-articulo-page.component.scss']
})
export class AddArticuloPageComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private _articuloApiService: ArticuloApiService,
		private _snotifyService: SnotifyService,
		private _unidadMedidaApiService: UnidadMedidaApiService,
		private _categoriaArticuloApiService: CategoriaArticuloApiService,
		private _impuestoApiService: ImpuestoApiService,
		private _clasificacionApiService: ClasificacionApiService,
		private _paisApiService: PaisApiService,

		//Falta Codigo Impuesto y Proveedor Id
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		@Inject(MAT_DIALOG_DATA) public ediData: any,
		private _dialogRef: MatDialogRef<AddArticuloPageComponent>
	) {
		this._loadFormGroup();
	}
	ngOnInit(): void {
		this._loadClasificacion();
		this._loadProveedor();
		this._loadPais();
		this._loadUnidadMedida();
		this._loadImpuesto();
	}
	formGroup!: FormGroup;
	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	actionBtn: string = 'Guardar';
	activo = true;
	disableSelect = new FormControl(false);
	listClasArt: IResponseClasificacion[] = [];
	listPais: IConsultaPais[] = [];
	listUndMedida: IResponseUnidadMedida[] = [];
	listImpuesto: ImpuestoModelConsulta[] = [];
	private _loadClasificacion(): void {
		this._clasificacionApiService.getClasifi(1, 10000).subscribe((response) => {
			if (response && response.success) {
				this.listClasArt = response.result;
			}
		});
	}
	private _loadProveedor(): void {
		console.log('preoveedor');
	}
	private _loadImpuesto(): void {
		this._impuestoApiService.getImpuesto(1, 10000).subscribe((response) => {
			this.listImpuesto = response.result;
		});
	}
	private _loadPais(): void {
		this._paisApiService.getPaises(1, 10000).subscribe((response) => {
			if (response && response.success) {
				this.listPais = response.result;
			}
		});
	}
	private _loadUnidadMedida(): void {
		this._unidadMedidaApiService.getUnidadMedida(1, 1000).subscribe((response) => {
			if (response && response.success) {
				this.listUndMedida = response.result;
			}
		});
	}
	//Iniciamos los campos de html con su validacion correspondiente
	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			codArticulo: [null, [Validators.required, Validators.maxLength(20)]],
			descripcion: [null, [Validators.required, Validators.maxLength(250)]],
			//Tab Generales
			tipo: [null, Validators.required],
			activo: [false],
			tiendaLinea: [false],
			ventaTarjeta: [false],
			existenciaMinima: [null],
			existenciaReorden: [null],
			existenciaMaxima: [null],
			tipoCodBarraDetalle: [null, Validators.required],
			codBarraDetalle: [null],
			tipoCodBarraVenta: [null, Validators.required],
			codBarraVenta: [null],
			costoFiscal: [null, Validators.required],
			costoCorporativo: [null, Validators.required],
			//tab Clasificaciones
			clas1: [null],
			clas2: [null],
			clas3: [null],
			clas4: [null],
			clas5: [null],
			clas6: [null],
			clase: ['A'],
			//proveedor
			proveedor: [null, Validators.required],
			paismanofactura: [null, Validators.required],
			codArtProveedor: [null, Validators.required],
			ordenMinima: [null, Validators.required],
			rebastesimineto: [null, Validators.required],
			multiploLote: [null, Validators.required],
			//otros
			conteoCiclico: [null],
			numeroBultos: [null],
			gtn: [null],
			manufactura: [null],
			pesoNeto: [null],
			pesoBruto: [null],
			volumen: [null],
			almacenamiento: [null, Validators.required],
			detalle: [null, Validators.required],
			venta: [null, Validators.required],
			multiploDetalle: [null, Validators.required],
			multiploVenta: [null, Validators.required],
			codigoImpuesto: [null],
			cuenta: [null],
			retencionVentas: [null],
			retencionCompras: [null],
			retencionModelo: [null],
			//Usa Lote
			usaLote: [false],
			percedero: [false],
			obligaCuarentena: [false],
			mimimoVidaCompra: [null],
			mimimoVidaConsumo: [null],
			mimimoVidaVenta: [null],
			vidaUtilPromedio: [null],
			cuarentena: [null]
		});
	}
	onclickArticulo(): void {
		console.log('hola desde guardar');

		if (this.formGroup.invalid) {
			return;
		}

		console.log(this.formGroup.value);
	}
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
