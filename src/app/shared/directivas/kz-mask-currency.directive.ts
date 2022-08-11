/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appKzMaskCurrency]'
})
export class KzMaskCurrencyDirective {
	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	private regex: RegExp = new RegExp(/^\d*\\,?\d{0,2}$/g);
	private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
	constructor(private el: ElementRef) {}
	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (this.specialKeys.indexOf(event.key) !== -1) {
			return;
		}
		const current: string = this.el.nativeElement.value;
		const next: string = current.concat(event.key);
		if (next && !String(next).match(this.regex)) {
			event.preventDefault();
		}
	}
}
