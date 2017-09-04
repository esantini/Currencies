
import { Action } from "redux";

export interface RateOption {
	id: string;
	name: string;
	rate: number;
}

export interface AllStates {
	conversions: ConversionState;
	rateOptions: RateOption[];
}

export interface ConversionState {
	quantity: number;
	rateSelected: RateOption;
	currentInput: number;
}

export interface AnyAction extends Action {
	payload: any;
}

export type NumberAction = (payload: number) => AnyAction;

