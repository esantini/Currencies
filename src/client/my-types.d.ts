
import { Action } from "redux";

export interface RateOption {
	id: string;
	name: string;
	rate: number;
}

export interface AllStates {
	conversions: ConversionState;
	rateOptions: RateOption[];
	history: HistoryRecord[];
}

export interface ConversionState {
	rateSelected: RateOption;
	currentInput: number;
	currentResult?: number;
}

export interface AnyAction extends Action {
	payload: any;
}
export interface ConvertAction extends Action {
	payload: ConversionState;
}

export type NumberAction = (payload: number) => AnyAction;
export type StringAction = (payload: string) => AnyAction;

// History: 

export type Convert = (payload: ConversionState) => ConvertAction;

export interface HistoryRecord extends ConversionState {
	date: Date;
}
