
import { RateOption, AnyAction } from "../../my-types";

export default function(state = initialRates, action: AnyAction): RateOption[] {

	switch (action.type) {
		case "RECEIVE_DATA":

			// TODO: how does immutability affect here?
			for (const rateOption of state) {
				rateOption.value = action.payload[rateOption.id];
			}

		default:
			return state;
	}
}

const initialRates =
[
	{
		id: "USD",
		name: "US Dollar",
		value: null,
	},
	{
		id: "MXN",
		name: "Mexican Peso",
		value: null,
	},
	{
		id: "EUR",
		name: "Euro",
		value: null,
	},
	{
		id: "INR",
		name: "Indian Rupee",
		value: null,
	},
	{
		id: "CAD",
		name: "Canadian Dollar",
		value: null,
	},
	{
		id: "CNY",
		name: "Chinese Yuan",
		value: null,
	},
];
