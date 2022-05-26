import { TestBed } from '@angular/core/testing';

import { PeriodoContableApiService } from './periodo-contable-api.service';

describe('PeriodoContableApiService', () => {
	let service: PeriodoContableApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PeriodoContableApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
