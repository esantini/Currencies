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
						<strong> {record.quantity} US Dollars </strong>
						to&nbsp;
						<strong>
							{ Math.round(record.rate * record.quantity * 100) / 100 + " " }
							{ record.rateId }
						</strong>
					</li>
				);
			},
		);
	}
}

function mapStateToProps(state: AllStates): IProps {
	return { history: state.history };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
	return bindActionCreators( { }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryList);
