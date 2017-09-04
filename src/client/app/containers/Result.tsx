import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators, Action } from "redux";
import { AllStates, ConversionState } from "../../my-types";

class Result extends React.Component<ConversionState> {

	private static style: React.CSSProperties = {
		border: "1px solid black",
		display: "inline-block",
		padding: "10px",
		minWidth: "20%",
		textAlign: "center",
	};

	public render() {
		return (
			<div style={ Result.style } >
				Quantity: {this.props.quantity}
				<hr />
				Currency: {this.props.rateSelected.name}
				<hr />
				Rate: {this.props.rateSelected.rate}
				<hr />
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
