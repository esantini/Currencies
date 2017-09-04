
import { Action } from "redux";
import update from "immutability-helper";

import { AnyAction, HistoryState } from "../../my-types";

const initialState: HistoryState = {
	history: [],
};

export default function( state: HistoryState = initialState, action: AnyAction): HistoryState {

	switch (action.type) {
		case "CONVERT":
			state = {
				history: update(state.history, { $push:
					[{
						...action.payload,
						date: new Date(),
					}],
				}),
			};
			break;
	}

	return state;
}
