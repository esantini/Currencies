
import { Action } from "redux";

import { RateOption, SelectRateAction } from "../../my-types";
import RateOptions from "./RateOptions";

const optionsArray = RateOptions();
const initialState = optionsArray[0];

export default function( state: RateOption = initialState, action: SelectRateAction): RateOption {

	switch (action.type) {
		case "RATE_SELECT":
			const newOption = optionsArray.find((option) => option.id === action.payload);
			if (newOption)
				state = { ...newOption };
	}

	return state;
}
