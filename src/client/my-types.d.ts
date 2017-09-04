
/**
 * Actions are any change made to the application's state
 */
import { Action } from "redux";

export interface IAction extends Action {
	payload: any,
}

export interface RateOption {
	id: string;
	name: string;
}