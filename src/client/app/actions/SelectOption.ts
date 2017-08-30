
import { RateOption, IAction } from "client/myTypes";

export const selectOption = (option: RateOption): IAction => {

	return {
		type: "RATE_SELECT",
		payload: option,
	};

};
