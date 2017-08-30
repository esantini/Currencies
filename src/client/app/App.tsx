import React from "react";
import { Reducer } from "redux";
import { Provider } from "react-redux";

import SelectRate from "./containers/RateSelector";
import ConvertControls from "./containers/ConvertControls";

import Store from "./Store";

class App extends React.Component<{}, {}> {

	public render(){
		return (
			<Provider store={ Store }><div>
				<h3>Hello Converter</h3>

				<ConvertControls />

				<br />

				<SelectRate />

				Result:
				<span id="result"></span>

				<hr />
				History:
				<div>
					<ul id="historyUL">
					</ul>
				</div>
			</div></Provider>
		);
	}
}

export default App;
