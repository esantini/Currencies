
import { Action } from "redux";

import { RateOption, ConversionState, AnyAction } from "../../my-types";
import RateOptions from "./RateOptions";

const optionsArray = RateOptions();

interface IConversionRecord extends ConversionState {
	date: Date;
}

const initialState: IConversionRecord[] = [];

export default function( state: IConversionRecord[] = initialState, action: AnyAction): IConversionRecord[] {

	switch (action.type) {
		case "CONVERT":
			state.push( {
				...action.payload,
				date: new Date(),
			} );
			break;
	}

	return state;
}
