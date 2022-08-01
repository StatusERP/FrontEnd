import { ArticuloApiService } from '../service/articulo-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
@Injectable()
export class articuloEffects {
	articulo$ = createEffect(() => {
		return this.actions$.pipe(
			ofType('[Articulo List] Load Articulo'),
			mergeMap(() =>
				this._articuloApiService.getArticulo(1, 1000).pipe(
					map((datos) => ({ type: '[Articulo List] Load Articulo success', articulo: datos })),
					catchError(() => EMPTY)
				)
			)
		);
	});
	constructor(private actions$: Actions, private _articuloApiService: ArticuloApiService) {}
}
