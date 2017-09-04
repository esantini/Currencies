
import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { convert, updateInput } from "../actions/mainActions";
import { AllStates, NumberAction, RateOption } from "client/my-types";

interface IProps {
	rateSelected: RateOption;
	currentInput: number;
	updateInput?: NumberAction;
	convert?: NumberAction;
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
								this.props.convert!( this.props.currentInput );
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
