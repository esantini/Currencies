
import { Action } from "redux";
import update from "immutability-helper";

import { AnyAction, HistoryRecord } from "../../my-types";

const initialState: HistoryRecord[] = [];

export default function( state: HistoryRecord[] = initialState, action: AnyAction): HistoryRecord[] {

	switch (action.type) {
		case "CONVERT":
			state = update(state, { $push:
					[{
						...action.payload,
						date: new Date(),
					}],
				});
			break;
	}

	return state;
}
