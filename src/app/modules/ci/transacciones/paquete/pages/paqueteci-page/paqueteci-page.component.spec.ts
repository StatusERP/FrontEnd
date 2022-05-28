/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaqueteciPageComponent } from './paqueteci-page.component';

describe('PaqueteciPageComponent', () => {
	let component: PaqueteciPageComponent;
	let fixture: ComponentFixture<PaqueteciPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PaqueteciPageComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaqueteciPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
