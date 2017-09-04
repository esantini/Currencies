import { combineReducers } from "redux";

import conversions from "./Conversions";
import rateOptions from "./RateOptions";
import rateSelected from "./RateSelected";

const allReducers = combineReducers({
	conversions,
	rateOptions,
	rateSelected,
});

export default allReducers;
