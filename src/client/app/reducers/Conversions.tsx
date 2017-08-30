
import { IAction, RateOption } from "../../myTypes";

const initialState = {
	USD: {
		USD: 1,
		MXN: 17.72,
		EUR: 0.85,
		INR: 64.05,
		CAD: 1.25,
		CNY: 6.66,
	},
};

export default function(state: any = initialState, action: IAction) {

	switch (action.type) {
		case "CONVERT":
			//
			break;
	}

	return state;
}
