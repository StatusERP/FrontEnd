export interface IResponse<T = void> {
	succes: boolean;
	errors: string[];
	result: T;
}
