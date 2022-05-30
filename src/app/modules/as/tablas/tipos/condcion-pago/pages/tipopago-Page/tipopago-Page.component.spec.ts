/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TipopagoPageComponent } from './tipopago-Page.component';

describe('TipopagoPageComponent', () => {
	let component: TipopagoPageComponent;
	let fixture: ComponentFixture<TipopagoPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TipopagoPageComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TipopagoPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
