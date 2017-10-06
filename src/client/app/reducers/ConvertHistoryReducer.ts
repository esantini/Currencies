
import { Action } from "redux";
import update from "immutability-helper";

import { AnyAction, HistoryRecord } from "../../my-types";

const initialState: HistoryRecord[] = [];

export default function( state: HistoryRecord[] = initialState, action: AnyAction): HistoryRecord[] {

	switch (action.type) {
		case "CONVERT":
			state = update(state, { $push:
					[{
						date: new Date(),
						rate: action.payload.rateSelected.value,
						rateId: action.payload.rateSelected.id,
						quantity: action.payload.currentInput,
					}],
				});
			break;
	}

	return state;
}
