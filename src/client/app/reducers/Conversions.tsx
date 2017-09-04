
import { Action } from "redux";

import { RateOption, ConversionState, ConversionAction } from "../../my-types";
import optionsArray from "./RateOptions";

const initialState = {
	quantity: 0,
	rateSelected: optionsArray()[0],
};

export default function( state: ConversionState = initialState, action: ConversionAction): ConversionState {

	console.log(state);
	switch (action.type) {
		case "CONVERT":
			state = {
				quantity:     action.payload.quantity,
				rateSelected: action.payload.rate,
			};
			// TODO NOTIFY CONVERT ?
			break;
	}

	return state;
}
