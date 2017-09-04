
import { Action } from "redux";

import { AnyAction, HistoryState } from "../../my-types";

const initialState: HistoryState = {
	history: [],
};

export default function( state: HistoryState = initialState, action: AnyAction): HistoryState {

	switch (action.type) {
		case "CONVERT":
			state = {
				history: state.history,
			};
			state.history.push( {
				...action.payload,
				date: new Date(),
			} );
			break;
	}

	return state;
}
