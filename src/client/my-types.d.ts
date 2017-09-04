
import { Action } from "redux";

export interface RateOption {
	id: string;
	name: string;
	rate: number;
}

export interface AllStates {
	conversions: ConversionState;
	rateOptions: RateOption[];
	rateSelected: RateOption;
}

export interface ConversionState {
	quantity: number;
	rateSelected: RateOption;
}

export interface ConversionAction extends Action {
	payload: ConversionPayload;
}

export type ConvertAction = (payload: ConversionPayload) => ConversionAction;

export interface ConversionPayload {
	quantity: number;
	rate: RateOption;
}

export interface SelectRateAction extends Action {
	payload: string;
}


