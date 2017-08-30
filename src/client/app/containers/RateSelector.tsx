import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { selectOption } from "../actions/SelectOption";
import { RateOption, IAction } from "client/myTypes";

interface IProps {
	rateOptions: RateOption[];
	selectOption?: (rateOption: RateOption) => IAction;
}
interface IState {
	rateOptions: RateOption[];
}

class RateSelector extends React.Component<IProps, IState> {

	public render() {
		return (
			<div>
				<select name="selectRates" id="selectRates">
					{ this.renderOptions() }
				</select>
			</div>
		);
	}

	private renderOptions() {
		return (
			this.props.rateOptions.map((option) => {
				return (
					<option value={option.id} key={"optionKey_" + option.id}>{option.name}</option>
				);
			})
		);
	}
}

function mapStateToProps(state: IState): IProps {
	return {
		rateOptions: state.rateOptions,
	};
}

function matchDispatchToProps(dispatch: Dispatch<any>) {
	return bindActionCreators( { selectOption }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(RateSelector as any);
