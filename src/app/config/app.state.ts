import { globalesCIReducer } from './../modules/ci/store/ci.reducer';
import { globalesASReducer } from './../modules/as/strore/as.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { IGlobalesAS_State } from './../modules/as/strore/as.state';
import { IGlobalesCIState } from '@app/modules/ci/store/ci.state';
export interface AppState {
	globalesAS: IGlobalesAS_State;
	globalesCI: IGlobalesCIState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
	globalesAS: globalesASReducer,
	globalesCI: globalesCIReducer
};
