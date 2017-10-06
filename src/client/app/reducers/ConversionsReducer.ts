
import { Action } from "redux";

import { RateOption, ConversionState, AnyAction } from "../../my-types";
import RateOptions from "./RateOptions";

const optionsArray = RateOptions(undefined, { type: "", payload: null });

const initialState: ConversionState = {
	rateSelected: optionsArray[0],
	currentInput: 0,
	currentResult: 0,
	receivedData: false,
};

export default function( state: ConversionState = initialState, action: AnyAction): ConversionState {
	switch (action.type) {
		case "RECEIVE_DATA":
			state = {
				...state,
				receivedData: true,
			};
		case "RATE_SELECT":
			const newOption = optionsArray.find((option) => option.id === action.payload);
			if (newOption) {
				state = {
					...state,
					rateSelected: {
						...newOption,
					},
				};
			}
			return state;
		case "UPDATE_INPUT":
			state = {
				...state,
				currentInput: action.payload,
			};
			return state;
		default:
			return state;
	}

}
