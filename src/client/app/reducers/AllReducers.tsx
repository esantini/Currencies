import { combineReducers } from "redux";

import conversions from "./ConversionsReducer";
import rateOptions from "./RateOptions";

const allReducers = combineReducers({
	conversions,
	rateOptions,
});

export default allReducers;
