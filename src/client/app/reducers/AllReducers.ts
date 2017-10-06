import { combineReducers } from "redux";

import conversions from "./ConversionsReducer";
import rateOptions from "./RateOptions";
import history from "./ConvertHistoryReducer";

const allReducers = combineReducers({
	conversions,
	rateOptions,
	history,
});

export default allReducers;
