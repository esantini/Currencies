# Currencies
Exercise: Design the front-end and back-end of a system that will help with currency conversions

* Create a web-app using ReactJS+typescript for the front-end, and a node.js+express server for the back-end that will support displaying a page with the below transactions + APIs to support currency conversion
* Write the unit tests to ensure that there are no bugs. 
The module should determine the exchange rate based on the given currency code (e.g. ‘USD’, ‘EUR’, ‘MXN’, ‘INR’, etc)
* There should be a store of conversion rates
* The module needs to be configured to consult the latest conversion rates from either a file or a public API (possible source: https://openexchangerates.org)
* If retrieving live information from an API, a file should be updated to store the latest rates. 
* The web-app should be able to display the transaction history
* The app should be able to convert currencies
* The app should give the conversion rate for a currency
* Make the design decisions required to integrate the functionality of currency conversion into the transactions app


## Redux (with React) concepts:

Store
	all your applications states/data (one big javascript object)

Provider	
	makes store available to all containers

Containers
	fetch apps state data and use it to render (display) components 
	Note: apps state will become component props 

	when application state changes: components are re-rendered (updated) 

Components
	<MyButton />
	<MyElement />
	etc

User input:

Actions
	Any change made to the applications state
	type - describes the change
		ie. NEW_MOVIE_BUTTON_CLICKED
		payload - (optional) extra data
			needed to perform the action
			{ "title": "asdf" }

Reducers
	Take in actions and update part of the applications state
		Users Reducer:
		[{
			"first": "Rick",
			"last": "Sanchez"
		}]

	Updated data gets dispatched to the store 

