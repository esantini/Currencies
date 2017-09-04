import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators, Action } from "redux";
import { AllStates, ConversionState } from "../../my-types";

class Result extends React.Component<ConversionState> {

	public render() {
		return (
			<div className="resultsDiv" >
				Quantity: {this.props.quantity}
				<br />
				Currency: {this.props.rateSelected.name}
				<br />
				Rate: {this.props.rateSelected.rate}
				<br />
				Result: { this.props.quantity * this.props.rateSelected.rate }
			</div>
		);
	}
}

function mapStateToProps(state: AllStates) {
	const letsee = {
		...state.conversions,
	};
// 	console.log("AVERRR", letsee);
	return letsee;
}

export default connect(mapStateToProps)(Result);
