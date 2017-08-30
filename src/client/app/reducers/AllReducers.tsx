import { combineReducers } from "redux";

import Conversions from "./Conversions";
import RateOptions from "./RateOptions";

const allReducers = combineReducers({
	conversions: Conversions,
	rateOptions: RateOptions,
});

export default allReducers;
