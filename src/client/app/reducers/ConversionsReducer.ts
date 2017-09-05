
import { Action } from "redux";

import { RateOption, ConversionState, AnyAction } from "../../my-types";
import RateOptions from "./RateOptions";

const optionsArray = RateOptions();

const initialState: ConversionState = {
	rateSelected: optionsArray[0],
	currentInput: 0,
	currentResult: 0,
};

export default function( state: ConversionState = initialState, action: AnyAction): ConversionState {
	let currentResult;
	switch (action.type) {
		case "CONVERT":
			// state = {
			// 	...state,
			// 	quantity: action.payload,
			// };
			return state;
		case "RATE_SELECT":
			const newOption = optionsArray.find((option) => option.id === action.payload);
			if (newOption) {
				currentResult = Math.round(state.currentInput * newOption.rate * 100) / 100;
				state = {
					...state,
					rateSelected: {
						...newOption, // TODO is this necesary?
					},
					currentResult,
				};
			}
			return state;
		case "UPDATE_INPUT":
			currentResult = Math.round(action.payload * state.rateSelected.rate * 100) / 100;
			state = {
				...state,
				currentInput: action.payload,
				currentResult,
			};
			return state;
		default:
			return state;
	}

}
