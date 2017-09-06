import { createStore, applyMiddleware, AnyAction } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rxjs from "rxjs";

import allReducers from "./reducers/AllReducers";

const myLogger = createLogger({
	predicate: (getState, action: AnyAction) => {
		switch (action.type) { // Return false to ignore the following Action types:
			case "UPDATE_INPUT": return false;
			case "RATE_SELECT": return false;
			default: return true;
		}
	},
	collapsed: true,
});

const store = createStore(allReducers, {}, applyMiddleware(thunk, myLogger));

store.dispatch((dispatch: (action: AnyAction) => void ): any => {

	fetch("https://openexchangerates.org/api/latest.json?app_id=192732a1f5374bbc9671ea6b3a6759c9")
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			}
		})
		.then((response) => {
			dispatch({ type: "RECEIVE_DATA", payload: response.rates });
		});
});

export default store;
