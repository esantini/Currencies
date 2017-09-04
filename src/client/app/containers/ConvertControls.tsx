
import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { convert, updateInput } from "../actions/mainActions";
import { AllStates, RateOption, NumberAction, Convert } from "client/my-types";

interface IProps {
	rateSelected: RateOption;
	currentInput: number;
	updateInput?: NumberAction;
	convert?: Convert;
}

class ConvertControls extends React.Component<IProps> {
	public render() {
		return (
			<div>
				<label htmlFor="ConvertInput" >USD to {this.props.rateSelected.name}</label>
				<input id="ConvertInput" type="number" onChange={
							(evt: React.ChangeEvent<HTMLInputElement>) => {
								this.props.updateInput!( evt.currentTarget.valueAsNumber );
							}
						} />
				<button onClick={
							(evt: React.MouseEvent<HTMLButtonElement>) => {
								this.props.convert!( {
									currentInput: this.props.currentInput,
									rateSelected: this.props.rateSelected,
								} );
							}
						} >
					Convert
				</button>
			</div>
		);
	}
}

function mapStateToProps(state: AllStates): IProps {
	return {
		rateSelected: state.conversions.rateSelected,
		currentInput: state.conversions.currentInput,
	};
}

function mapDispatchToProps( dispatch: Dispatch<any> ) {
	return bindActionCreators( { convert, updateInput }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertControls as any);
