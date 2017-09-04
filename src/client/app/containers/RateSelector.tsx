import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators, Action } from "redux";

import { selectOption } from "../actions/SelectOption";
import { RateOption, AllStates } from "../../my-types";
import { ReactElement } from "react";

interface IProps {
	rateOptions: RateOption[];
	selectOption?: (rateOption: string) => IAction;
}
interface IState {
	rateOptions: RateOption[];
}
interface IAction extends Action {
	payload: any;
}

class RateSelector extends React.Component<IProps, IState> {

	public render() {
		return (
			<div>
				<select
						name="selectRates"
						id="selectRates"
						onChange={ (evt: React.ChangeEvent<HTMLSelectElement> ) => {
							this.props.selectOption!( evt.currentTarget.value );
						}}>
					{ this.renderOptions() }
				</select>
			</div>
		);
	}

	private renderOptions() {
		return (
			this.props.rateOptions.map((option) => {
				return (
					<option
							value={ option.id }
							key={ "optionKey_" + option.id }>
						{ option.name }
					</option>
				);
			})
		);
	}
}

function mapStateToProps(state: AllStates): IProps {
	return {
		rateOptions: state.rateOptions,
	};
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
	return bindActionCreators( { selectOption }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RateSelector as any);
