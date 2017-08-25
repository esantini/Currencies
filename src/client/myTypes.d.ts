
/**
 * Actions are any change made to the application's state
 */
declare interface Action {
	/**
	 * Describes the change.
	 */
	type: string,
	/**
	 * (optional) extra data needed to perform the action.
	 * Can be named anything. By convention we use payload.
	 */
	payload: any,
}
