
import { Action } from "redux";

import { RateOption, ConversionState, AnyAction } from "../../my-types";
import RateOptions from "./RateOptions";

const optionsArray = RateOptions();

const initialState: ConversionState = {
	rateSelected: optionsArray[0],
	currentInput: 0,
};

export default function( state: ConversionState = initialState, action: AnyAction): ConversionState {

	switch (action.type) {
		case "CONVERT":
			// state = {
			// 	...state,
			// 	quantity: action.payload,
			// };
			break;
		case "RATE_SELECT":
			const newOption = optionsArray.find((option) => option.id === action.payload);
			if (newOption)
				state = {
					...state,
					rateSelected: {
						...newOption, // TODO is this necesary?
					},
				};
			break;
		case "UPDATE_INPUT":
			state = {
				...state,
				currentInput: action.payload,
			};
			break;
	}

	return state;
}
