import { TestBed } from '@angular/core/testing';

import { ArticuloApiService } from './articulo-api.service';

describe('ArticuloApiService', () => {
	let service: ArticuloApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ArticuloApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
