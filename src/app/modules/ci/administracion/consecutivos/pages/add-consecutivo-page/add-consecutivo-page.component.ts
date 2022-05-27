import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
	selector: 'app-add-consecutivo-page',
	templateUrl: './add-consecutivo-page.component.html',
	styleUrls: ['./add-consecutivo-page.component.scss']
})
export class AddConsecutivoPageComponent {
	disableSelect = new FormControl(false);
}
