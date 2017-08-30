import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import allReducers from "./reducers/AllReducers";

export default createStore(allReducers, {}, applyMiddleware(logger));
