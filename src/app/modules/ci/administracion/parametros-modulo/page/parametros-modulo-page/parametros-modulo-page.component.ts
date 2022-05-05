import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
interface Food {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-parametros-modulo-page',
	templateUrl: './parametros-modulo-page.component.html',
	styleUrls: ['./parametros-modulo-page.component.scss']
})
export class ParametrosModuloPageComponent {
	disableSelect = new FormControl(false);
}
