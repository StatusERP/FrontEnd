import { IResponseCategoriaArticulo } from './../../../../as/tablas/categorias/categoriaarticulo/service/categoria-articulo-api-model-interface';
import { CRUD_METHOD } from './../../../../../util/enums';
import { IResponseArticulo, IRequestCreateArticulo } from './../../service/articulo-api-model-interface';
import { ImpuestoModelConsulta } from './../../../../as/tablas/tipos/codigo-impuesto/model/impuesto-model';
import { IResponseUnidadMedida } from './../../../../as/tablas/otros/unidad-medida/service/unidad-medida-api-model-interface';
import { IConsultaPais } from './../../../../as/tablas/areas/pais/service/pais-api-model-interface';
import { IResponseClasificacion } from './../../../administracion/clasificaciones/services/clasificacion-api-model-interface';
import { PaisApiService } from './../../../../as/tablas/areas/pais/service/pais-api.service';
import { ClasificacionApiService } from './../../../administracion/clasificaciones/services/clasificacion-api.service';
import { ImpuestoApiService } from './../../../../as/tablas/tipos/codigo-impuesto/service/impuesto-api.service';
import { CategoriaArticuloApiService } from './../../../../as/tablas/categorias/categoriaarticulo/service/categoria-articulo-api.service';
import { UnidadMedidaApiService } from './../../../../as/tablas/otros/unidad-medida/service/unidad-medida-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnotifyPosition, SnotifyService } from 'ng-snotify';
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
		setTimeout(() => {
			this._loadClasificacion();
			this._loadProveedor();
			this._loadPais();
			this._loadUnidadMedida();
			this._loadImpuesto();
			this._loadCuentaArticulo();
		}, 0);
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
	listCuenta: IResponseCategoriaArticulo[] = [];
	private _crudMethod = CRUD_METHOD.SAVE;
	disableButtonSave = false;
	private _loadClasificacion(): void {
		this._clasificacionApiService.getClasifi(1, 10000).subscribe((response) => {
			if (response && response.success) {
				this.listClasArt = response.result;
			}
		});
	}
	private _loadCuentaArticulo(): void {
		this._categoriaArticuloApiService.getCatArticulo(1, 1000).subscribe((response) => {
			this.listCuenta = response.result;
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
			image: [null],
			//Tab Generales
			tipo: [null, Validators.required],
			activo: [true],
			tiendaLinea: [false],
			ventaTarjeta: [false],
			existenciaMinima: [null, Validators.required],
			existenciaReorden: [null, Validators.required],
			existenciaMaxima: [null, Validators.required],
			//	tipoCodBarraDetalle: [null, Validators.required],
			codBarraDetalle: [null],
			//	tipoCodBarraVenta: [null, Validators.required],
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
			pesoNeto: [null, Validators.required],
			pesoBruto: [null, Validators.required],
			volumen: [null, Validators.required],
			bultos: [null, Validators.required],
			almacenamiento: [null, Validators.required],
			detalle: [null, Validators.required],
			venta: [null, Validators.required],
			multiploDetalle: [null, Validators.required],
			multiploVenta: [null, Validators.required],
			codigoImpuesto: [null, Validators.required],
			cuenta: [null, Validators.required],
			retencionVentas: [null],
			retencionCompras: [null],
			retencionModelo: [null],
			estilo: [null],
			nombreEstilo: [null],
			talla: [null],
			nombreTalla: [null],
			color: [null],
			nombreColor: [null],
			nota: [null],
			//Usa Lote
			usaLote: [false],
			perecedero: [false],
			obligaCuarentena: [false],
			mimimoVidaCompra: [null],
			mimimoVidaConsumo: [null],
			mimimoVidaVenta: [null],
			vidaUtilPromedio: [null],
			cuarentena: [null]
		});
	}

	onclickArticulo(): void {
		console.log(this.formGroup);
		if (this.formGroup.invalid) {
			return;
		}

		if (!this.ediData) {
			//		const base64 = (this.imageField.value as string).split(',')[1];
			const sendArticulo: IRequestCreateArticulo = {
				codArticulo: this.codArticuloField.value as string,
				descripcion: this.descripcionField.value as string,
				tipo: this.tipoField.value as string,
				tiendaEnLinea: this.tiendaLineaField.value as boolean,
				ventaTarjetaCredito: this.ventaTarjetaField.value as boolean,
				pesoNeto: this.pesoNetoField.value as number,
				pesoBruto: this.pesoBrutoField.value as number,
				volumen: this.volumenField.value as number,
				//bultos: this.numeroBultosField.value as number,
				categoriaArticuloId: this.cuentaField.value as number,
				factorEmpaque: this.multiploDetalleField.value as number,
				factorVenta: this.multiploVentaField.value as number,
				existenciaMinima: this.existenciaMinimaField.value as number,
				existenciaMaxima: this.existenciaMaximaField.value as number,
				puntoDeOrden: this.existenciaReordenField.value as number,
				costoLoc: 0,
				costoDol: 0,
				precioBaseLocal: 0,
				precioBaseDol: 0,
				ultimaSalida: '1980-01-01',
				ultimoMovimiento: '1980-01-01',
				ultimoIngreso: '1980-01-01',
				ultimoInventario: '1980-01-01',
				claseABC: this.claseField.value as string,
				//frecuenciaConteo: this.conteoCiclicoField.value as number,
				activo: this.activoField.value as boolean,
				usaLotes: this.usaLoteField.value as boolean,
				obligaCuarentena: this.obligaCuarentenaField.value as boolean,
				//minVidaCompra: this.mimimoVidaCompraField.value as number,
				//minVidaConsumo: this.mimimoVidaConsumoField.value as number,
				//minVidaVenta: this.mimimoVidaVentaField.value as number,
				//vidaUtilPromedio: this.vidaUtilPromedioField.value as number,
				//diasCuarentena: this.cuarentenaField.value as number,
				ordenMinima: this.ordenMinimaField.value as number,
				//plazoReabast: this.rebastesiminetoField.value as number,
				loteMultiplo: this.multipoLoteField.value as number,
				usaNumerosSerie: false,
				usaReglasLocales: false,
				unidadAlmacenId: this.almacenamientoField.value as number,
				unidadVentaId: this.ventaField.value as number,
				perecedero: this.perecederoField.value as boolean,
				tipoCosto: this.tipoField.value as string,
				costoPromUltimoLoc: 0,
				costoPromUltimoDol: 0,
				esImpuesto: true,
				sugiereMin: true,
				calculaPercep: true,
				impuestoId: this.codigoImpuestoField.value as number,
				unidadEmpaqueId: this.detalleField.value as number,
				proveedorId: 48,
				clasificacion1Id: this.clas1Field.value as number,
				clasificacion2Id: this.clas2Field.value as number,
				clasificacion3Id: this.clas3Field.value as number,
				clasificacion4Id: this.clas4Field.value as number,
				clasificacion5Id: this.clas5Field.value as number,
				clasificacion6Id: this.clas6Field.value as number,
				factorConver1: 1,
				factorConver2: 1,
				factorConver3: 1,
				factorConver4: 1,
				factorConver5: 1,
				factorConver6: 1,
				codigoBarrasVent: this.codBarraVentaField.value as string,
				//	codigoBarrasInvt: this.codBarraDetalleField.value as string,
				articuloDelProv: this.codArtProveedorField.value as string,
				//tipoCodBarraDet: '',
				//tipoCodBarraAlm: '',
				//codigoRetencion: this.retencionComprasField.value as string,
				//retencionVenta: this.retencionVentasField.value as string,
				//modeloRetencion: this.retencionModeloField.value as string,
				//modalidadInvFis: 'T',
				//manufacturador: this.manufacturaField.value as string,
				estilo: this.estiloField.value as string,
				talla: this.tallaField.value as string,
				color: this.colorField.value as string
				//notas: this.notaField.value as string,
				//urlimagen:base64,
				//porcPercep: 0,
				//tipoDocIVA: '',
				//retencionCompra: this.retencionComprasField.value as string
			};
			this._save(sendArticulo);
		}
	}
	private _save(articulo: IRequestCreateArticulo) {
		this._articuloApiService.createArticulo(articulo).subscribe({
			next: (response) => {
				if (response && response.success) {
					this.formGroup.reset();
					this._snotifyService.info('El registro se guardo sin problema');
					this._dialogRef.close('save');
				} else {
					this._snotifyService.error(response.errors[0], { position: SnotifyPosition.rightTop });
				}
			},
			error: (e) => {
				console.log(e);
			}
		});
	}
	onFileSelected(event: Event): void {
		const htmlInput: HTMLInputElement = event.target as HTMLInputElement;
		if (htmlInput && htmlInput.files) {
			const reader = new FileReader();

			reader.readAsDataURL(htmlInput.files[0]);
			reader.onload = () => {
				const resultImageFile = reader.result!.toString();
				this.fileNameField.setValue(htmlInput.files![0].name);
				this.imageField.setValue(resultImageFile);
			};
		}
	}

	get idField(): AbstractControl {
		return this.formGroup.get('id')!;
	}
	get codArticuloField(): AbstractControl {
		return this.formGroup.get('codArticulo')!;
	}
	get descripcionField(): AbstractControl {
		return this.formGroup.get('descripcion')!;
	}
	get tipoField(): AbstractControl {
		return this.formGroup.get('tipo')!;
	}
	get activoField(): AbstractControl {
		return this.formGroup.get('activo')!;
	}
	get tiendaLineaField(): AbstractControl {
		return this.formGroup.get('tiendaLinea')!;
	}
	get ventaTarjetaField(): AbstractControl {
		return this.formGroup.get('ventaTarjeta')!;
	}
	get existenciaMinimaField(): AbstractControl {
		return this.formGroup.get('existenciaMinima')!;
	}
	get existenciaReordenField(): AbstractControl {
		return this.formGroup.get('existenciaReorden')!;
	}
	get existenciaMaximaField(): AbstractControl {
		return this.formGroup.get('existenciaMaxima')!;
	}

	get codBarraDetalleField(): AbstractControl {
		return this.formGroup.get('codBarraDetalle')!;
	}
	get codBarraVentaField(): AbstractControl {
		return this.formGroup.get('codBarraVenta')!;
	}

	get costoFiscalField(): AbstractControl {
		return this.formGroup.get('costoFiscal')!;
	}
	get costoCorporativoField(): AbstractControl {
		return this.formGroup.get('costoCorporativo')!;
	}

	get clas1Field(): AbstractControl {
		return this.formGroup.get('clas1')!;
	}
	get clas2Field(): AbstractControl {
		return this.formGroup.get('clas2')!;
	}
	get clas3Field(): AbstractControl {
		return this.formGroup.get('clas3')!;
	}
	get clas4Field(): AbstractControl {
		return this.formGroup.get('clas4')!;
	}
	get clas5Field(): AbstractControl {
		return this.formGroup.get('clas5')!;
	}
	get clas6Field(): AbstractControl {
		return this.formGroup.get('clas6')!;
	}
	get claseField(): AbstractControl {
		return this.formGroup.get('clase')!;
	}
	get proveedorField(): AbstractControl {
		return this.formGroup.get('proveedor')!;
	}
	get paismanofacturaField(): AbstractControl {
		return this.formGroup.get('paismanofactura')!;
	}
	get codArtProveedorField(): AbstractControl {
		return this.formGroup.get('codArtProveedor')!;
	}
	get ordenMinimaField(): AbstractControl {
		return this.formGroup.get('ordenMinima')!;
	}
	get rebastesiminetoField(): AbstractControl {
		return this.formGroup.get('rebastesimineto')!;
	}
	get multipoLoteField(): AbstractControl {
		return this.formGroup.get('multiploLote')!;
	}

	get conteoCiclicoField(): AbstractControl {
		return this.formGroup.get('conteoCiclico')!;
	}
	get numeroBultosField(): AbstractControl {
		return this.formGroup.get('numeroBultos')!;
	}
	get gtnField(): AbstractControl {
		return this.formGroup.get('gtn')!;
	}
	get manufacturaField(): AbstractControl {
		return this.formGroup.get('manufactura')!;
	}
	get pesoNetoField(): AbstractControl {
		return this.formGroup.get('pesoNeto')!;
	}
	get pesoBrutoField(): AbstractControl {
		return this.formGroup.get('pesoBruto')!;
	}
	get volumenField(): AbstractControl {
		return this.formGroup.get('volumen')!;
	}
	get almacenamientoField(): AbstractControl {
		return this.formGroup.get('almacenamiento')!;
	}
	get detalleField(): AbstractControl {
		return this.formGroup.get('detalle')!;
	}
	get ventaField(): AbstractControl {
		return this.formGroup.get('venta')!;
	}
	get multiploDetalleField(): AbstractControl {
		return this.formGroup.get('multiploDetalle')!;
	}
	get multiploVentaField(): AbstractControl {
		return this.formGroup.get('multiploVenta')!;
	}
	get codigoImpuestoField(): AbstractControl {
		return this.formGroup.get('codigoImpuesto')!;
	}
	get cuentaField(): AbstractControl {
		return this.formGroup.get('cuenta')!;
	}
	get retencionVentasField(): AbstractControl {
		return this.formGroup.get('retencionVentas')!;
	}
	get retencionComprasField(): AbstractControl {
		return this.formGroup.get('retencionCompras')!;
	}
	get retencionModeloField(): AbstractControl {
		return this.formGroup.get('retencionModelo')!;
	}
	get estiloField(): AbstractControl {
		return this.formGroup.get('estilo')!;
	}
	get nombreEstiloField(): AbstractControl {
		return this.formGroup.get('nombreEstilo')!;
	}
	get tallaField(): AbstractControl {
		return this.formGroup.get('talla')!;
	}
	get nombreTallaField(): AbstractControl {
		return this.formGroup.get('nombreTalla')!;
	}
	get colorField(): AbstractControl {
		return this.formGroup.get('color')!;
	}
	get nombreColorField(): AbstractControl {
		return this.formGroup.get('nombreColor')!;
	}
	get notaField(): AbstractControl {
		return this.formGroup.get('nota')!;
	}
	get usaLoteField(): AbstractControl {
		return this.formGroup.get('usaLote')!;
	}
	get obligaCuarentenaField(): AbstractControl {
		return this.formGroup.get('obligaCuarentena')!;
	}
	get perecederoField(): AbstractControl {
		return this.formGroup.get('perecedero')!;
	}

	get mimimoVidaCompraField(): AbstractControl {
		return this.formGroup.get('mimimoVidaCompra')!;
	}
	get mimimoVidaConsumoField(): AbstractControl {
		return this.formGroup.get('mimimoVidaConsumo')!;
	}
	get mimimoVidaVentaField(): AbstractControl {
		return this.formGroup.get('mimimoVidaVenta')!;
	}
	get vidaUtilPromedioField(): AbstractControl {
		return this.formGroup.get('vidaUtilPromedio')!;
	}
	get cuarentenaField(): AbstractControl {
		return this.formGroup.get('cuarentena')!;
	}

	get imageField(): AbstractControl {
		return this.formGroup.get('image')!;
	}

	get fileNameField(): AbstractControl {
		return this.formGroup.get('fileName')!;
	}
}
