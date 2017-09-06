import { combineReducers } from "redux";

import conversions from "./ConversionsReducer";
import rateOptions from "./RateOptions";
import history from "./ConvertHistoryReducer";
import rates from "./RatesReducer";

const allReducers = combineReducers({
	conversions,
	rateOptions,
	history,
	rates,
});

export default allReducers;
