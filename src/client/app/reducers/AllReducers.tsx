import { combineReducers } from "redux";

import conversions from "./Conversions";
import rateOptions from "./RateOptions";

const allReducers = combineReducers({
	conversions,
	rateOptions,
});

export default allReducers;
