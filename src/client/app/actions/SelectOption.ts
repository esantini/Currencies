
import { RateOption, SelectRateAction } from "../../my-types";

export const selectOption = (option: string): SelectRateAction => {
	return {
		type: "RATE_SELECT",
		payload: option,
	};
};
