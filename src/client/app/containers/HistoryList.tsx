import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { HistoryRecord, AllStates } from "../../my-types";

interface IProps {
	history: HistoryRecord[];
}

class HistoryList extends React.Component<IProps> {

	public render() {
		return (
			<div>
				History:
				<ul>
					{ this.createListItems() }
				</ul>
			</div>
		);
	}

	private createListItems() {
		return this.props.history.map((record) => {
				return (
					<li key={ record.date.getTime() } >
						Converted
						<strong> {record.currentInput} US Dollars </strong>
						to
						<strong>
							{ Math.round(record.rateSelected.rate * record.currentInput * 100) / 100 + " " }
							{ record.rateSelected.name }
						</strong>
					</li>
				);
			},
		);
	}
}

function mapStateToProps(state: AllStates): IProps {
	return { history: state.history.history };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
	return bindActionCreators( { }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryList);
