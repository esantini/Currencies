import { Action } from "redux";
import { RateOption, ConversionAction, ConversionPayload, ConvertAction } from "../../my-types";

export const convert: ConvertAction = (payload) => {
	return {
		type: "CONVERT",
		payload,
	};
};
