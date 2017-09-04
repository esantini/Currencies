
import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { convert } from "../actions/mainActions";
import { AllStates, ConvertAction, RateOption } from "client/my-types";

interface IProps {
	convert: ConvertAction;
	rateSelected: RateOption;
}

class ConvertControls extends React.Component<IProps> {
	public render() {
		let convertInput = 0;
		return (
			<div>
				<label htmlFor="ConvertInput" >USD to {this.props.rateSelected.name}</label>
				<input id="ConvertInput" type="number" onChange={
							(evt: React.ChangeEvent<HTMLInputElement>) => {
								convertInput = evt.currentTarget.valueAsNumber;
							}
						} />
				<button onClick={
							(evt: React.MouseEvent<HTMLButtonElement>) => {
								this.props.convert( { quantity: convertInput, rate: this.props.rateSelected } );
							}
						} >
					Convert
				</button>
			</div>
		);
	}
}

function mapStateToProps(state: AllStates) {
	console.log("AVERRRR");
	return {
		rateSelected: state.rateSelected,
	};
}

function mapDispatchToProps( dispatch: Dispatch<any> ) {
	return bindActionCreators( { convert }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertControls as any);
