import { } from "redux";
import { RateOption, AnyAction } from "../../my-types";

export const convert = (payload: number): AnyAction => {
	return {
		type: "CONVERT",
		payload,
	};
};

export const selectOption = (option: string): AnyAction => {
	return {
		type: "RATE_SELECT",
		payload: option,
	};
};

export const updateInput = (option: number): AnyAction => {
	return {
		type: "UPDATE_INPUT",
		payload: option,
	};
};
