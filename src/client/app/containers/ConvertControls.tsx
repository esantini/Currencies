
import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { convert, updateInput } from "../actions/mainActions";
import { AllStates, RateOption, NumberAction, Convert } from "client/my-types";

/*
Removed "as any" from the default export with interfaces.

Separated IProps into IStateProps and IAllProps

Interface IStateProps contains only the data that comes from the state
IAllProps extends IStateProps & includes the Actions.
*/
interface IStateProps {
	rateSelected: RateOption;
	currentInput: number;
}
interface IAllProps extends IStateProps {
	updateInput: NumberAction;
	convert: Convert;
}

class ConvertControls extends React.Component<IAllProps> {
	public render() {
		return (
			<div>
				<label htmlFor="ConvertInput" >USD to {this.props.rateSelected.name}</label>
				<input id="ConvertInput" type="number" onChange={
							(evt: React.ChangeEvent<HTMLInputElement>) => {
								this.props.updateInput( evt.currentTarget.valueAsNumber );
							}
						} />
				<button onClick={
							(evt: React.MouseEvent<HTMLButtonElement>) => {
								this.props.convert( {
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

function mapStateToProps(state: AllStates): IStateProps {
	return {
		rateSelected: state.conversions.rateSelected,
		currentInput: state.conversions.currentInput,
	};
}

function mapDispatchToProps( dispatch: Dispatch<any> ) {
	return bindActionCreators( { convert, updateInput }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertControls);
