import React from "react";
import { Reducer } from "redux";
import { Provider } from "react-redux";

import SelectRate from "./containers/RateSelector";
import ConvertControls from "./containers/ConvertControls";
import Result from "./containers/Result";
import HistoryList from "./containers/HistoryList";

import Store from "./Store";

class App extends React.Component {

	public render(){
		return (
			<Provider store={ Store }><div>
				<h3>Hello Converter</h3>

				<ConvertControls />

				<br />

				<SelectRate />

				<Result />

				<hr />

				<HistoryList />

			</div></Provider>
		);
	}
}

export default App;
