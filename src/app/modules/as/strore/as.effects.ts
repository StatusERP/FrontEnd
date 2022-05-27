//import { GlobalesASApiService } from './../service/globales-as-api.service';
import { Injectable } from '@angular/core';
/* import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
 */
@Injectable()
export class globalesASEffects {
	/* loadGlobalesAS$ = createEffect(() =>
		this.actions$.pipe(
			ofType('[GlobalesAS List] Load Globales_AS'),
			mergeMap(() =>
				this.globalesASApiService.getGlobalesAS(1, 1000).pipe(
					map((items) => ({ type: '[GlobalesAS List] Load Globales_AS success', payload: items.result })),
					catchError(() => EMPTY)
				)
			)
		)
	) */
	//constructor(private actions$: Actions, private globalesASApiService: GlobalesASApiService) {}
}
