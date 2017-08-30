
import { RateOption } from "client/myTypes";

export default function(): RateOption[] {
	return [
		{
			id: "USD",
			name: "US Dollar",
		},
		{
			id: "MXN",
			name: "Mexican Peso",
		},
		{
			id: "EUR",
			name: "Euro",
		},
		{
			id: "INR",
			name: "Indian Rupee",
		},
		{
			id: "CAD",
			name: "Canadian Dollar",
		},
		{
			id: "CNY",
			name: "Yen?",
		},
	];
}
