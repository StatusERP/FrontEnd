import { Iglobales_CI } from '../model/globales_CI.interface';

export interface IGlobalesCIState {
	loading: boolean;
	datos: ReadonlyArray<Iglobales_CI>;
}
