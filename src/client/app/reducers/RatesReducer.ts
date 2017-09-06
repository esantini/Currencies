
import { Action } from "redux";
import { AnyAction } from "client/my-types";

export default function( state = {}, action: AnyAction ) {

	switch (action.type) {
		case "FETCH_RATES_START":

			return state;
		case "RECEIVE_DATA":
			state = {
				...action.payload,
			};
			return state;
		default:
			return state;
	}

}
