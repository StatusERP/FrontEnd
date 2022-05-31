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
export class AddArticuloPageComponent {
	constructor(
		private _formBuilder: FormBuilder,
		private _articuloApiService: ArticuloApiService,
		private _snotifyService: SnotifyService,
		private _unidadMedidaApiService: UnidadMedidaApiService,
		private _categoriaArticuloApiService: CategoriaArticuloApiService,
		private _impuestoApiService: ImpuestoApiService,
		//Falta Codigo Impuesto y Proveedor Id
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		@Inject(MAT_DIALOG_DATA) public ediData: any,
		private _dialogRef: MatDialogRef<AddArticuloPageComponent>
	) {
		this._loadFormGroup();
	}
	formGroup!: FormGroup;
	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	actionBtn: string = 'Guardar';
	activo = true;
	disableSelect = new FormControl(false);
	//Iniciamos los campos de html con su validacion correspondiente
	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			codArticulo: ['', [Validators.required, Validators.maxLength(20)]],
			descripcion: ['', [Validators.required, Validators.maxLength(250)]],
			//Tab Generales
			tipo: ['', Validators.required],
			activo: [false],
			tiendaLinea: [false],
			ventaTarjeta: [false],
			existenciaMinima: ['', Validators.required],
			existenciaReorden: ['', Validators.required],
			existenciaMaxima: ['', Validators.required],
			tipoCodBarraDetalle: ['', Validators.required],
			codBarraDetalle: ['', Validators.required],
			tipoCodBarraVenta: ['', Validators.required],
			codBarraVenta: ['', Validators.required],
			costoFiscal: ['', Validators.required],
			costoCorporativo: ['', Validators.required],
			//tab Clasificaciones
			clase: ['A'],
			//proveedor
			proveedor: ['', Validators.required],
			//otros
			conteoCiclico: ['', Validators.required],
			numeroBultos: ['', Validators.required],
			gtn: [''],
			manufactura: [''],
			pesoNeto: ['', Validators.required],
			pesoBruto: ['', Validators.required],
			volumne: ['', Validators.required],
			almacenamineto: ['', Validators.required],
			detalle: ['', Validators.required],
			venta: ['', Validators.required],
			multiploDetalle: ['', Validators.required],
			multiploVenta: ['', Validators.required]
		});
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
