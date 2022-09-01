import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoteApiService } from './../service/lote-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable()
export class loteEffects {
	lote$ = createEffect(() => {
		return this.actions$.pipe(
			// eslint-disable-next-line ngrx/prefer-action-creator-in-of-type
			ofType('[Lote List] Load Lote'),
			mergeMap(() =>
				this._loteApiService.getLote().pipe(
					map((datos) => ({ type: '[Lote List] Load Lote success', lote: datos })),
					catchError(() => EMPTY)
				)
			)
		);
	});

	constructor(private actions$: Actions, private _loteApiService: LoteApiService) {}
}
