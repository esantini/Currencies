import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./app/reducers/AllReducers";

// import "file-loader?name=[name].[ext]!../public/favicon.ico";
// import "file-loader?name=[name].[ext]!../public/index.html";
// import "file-loader?name=[name].[ext]!../public/manifest.json";

import "file-loader?name=[name].css!./public/style.less";

import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(allReducers);

ReactDOM.render((
		// <Provider store={store}>
			<App/>
		// </Provider>
	), document.getElementById("root"));

registerServiceWorker();
