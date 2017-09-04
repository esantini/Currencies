
import { Action } from "redux";

import { RateOption, ConversionState, ConversionAction } from "../../my-types";
import optionsArray from "./RateOptions";

const initialState = {
	quantity: 0,
	rateSelected: optionsArray()[0],
};

export default function( state: ConversionState = initialState, action: ConversionAction): ConversionState {

	switch (action.type) {
		case "CONVERT":
			if (typeof action.payload !== "number")
				break;
			state = {
				...state,
				quantity: action.payload,
			};
			// TODO NOTIFY CONVERT ?
			break;
	}

	return state;
}
