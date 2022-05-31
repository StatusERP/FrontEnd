/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoteApiService } from './lote-api.service';

describe('Service: LoteApi', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoteApiService]
		});
	});

	it('should ...', inject([LoteApiService], (service: LoteApiService) => {
		expect(service).toBeTruthy();
	}));
});
