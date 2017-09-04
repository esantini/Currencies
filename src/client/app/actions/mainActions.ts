import { Convert, NumberAction, StringAction } from "../../my-types";

export const convert: Convert = (payload) => {
	return {
		type: "CONVERT",
		payload,
	};
};

export const selectOption: StringAction = (payload) => {
	return {
		type: "RATE_SELECT",
		payload,
	};
};

export const updateInput: NumberAction = (payload) => {
	return {
		type: "UPDATE_INPUT",
		payload,
	};
};
