import { globalesCIReducer } from './../modules/ci/store/ci.reducer';
import { globalesASReducer } from './../modules/as/strore/as.reducer';
import { bodegaReducer } from './../modules/as/tablas/otros/bodega/store/bodega.reducer';
import { ActionReducerMap } from '@ngrx/store';

import { IGlobalesAS_State } from './../modules/as/strore/as.state';
import { IGlobalesCI_State } from '@app/modules/ci/store/ci.state';
import { IBodega_State } from '@app/modules/as/tablas/otros/bodega/store/bodega.state';
export interface AppState {
	globalesAS: IGlobalesAS_State;
	globalesCI: IGlobalesCI_State;
	bodega: IBodega_State;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
	globalesAS: globalesASReducer,
	globalesCI: globalesCIReducer,
	bodega: bodegaReducer
};
