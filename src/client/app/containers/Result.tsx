import * as React from "react";
import { connect } from "react-redux";
import { AllStates, RateOption } from "../../my-types";

interface IResult {
	currentInput: number;
	rateOption: RateOption;
	currentResult: number;
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
				Quantity: { this.props.currentInput }
				<hr />
				Currency: { this.props.rateOption.name }
				<hr />
				Rate: { this.props.rateOption.value }
				<hr />
				Result: { this.props.currentResult }
			</div>
		);
	}
}

function mapStateToProps(state: AllStates): IResult{
	return {
		currentInput: state.conversions.currentInput,
		rateOption: state.conversions.rateSelected,
		currentResult: state.conversions.currentResult!,
	};
}

export default connect(mapStateToProps)(Result);
