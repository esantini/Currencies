import * as React from "react";
import { connect } from "react-redux";
import { AllStates, RateOption } from "../../my-types";

interface IResult {
	currentInput: number;
	rate: RateOption;
}

class Result extends React.Component<IResult> {

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
				Quantity: {this.props.currentInput}
				<hr />
				Currency: {this.props.rate.name}
				<hr />
				Rate: {this.props.rate.rate}
				<hr />
				Result: { this.props.currentInput * this.props.rate.rate }
			</div>
		);
	}
}

function mapStateToProps(state: AllStates): IResult{
	return {
		currentInput: state.conversions.currentInput,
		rate: state.conversions.rateSelected,
	};
}

export default connect(mapStateToProps)(Result);
