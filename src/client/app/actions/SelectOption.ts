
import {  IAction } from "client/myTypes";

// tslint:disable

interface RateOption {
	id: string;
	name: string;
}

export const selectOption = (option: RateOption): IAction => {

	return {
		type: "RATE_SELECT",
		payload: option,
	};
};

var asdf = {
	id: "",
	name: "",
};

selectOption( asdf );
