# Currencies
Exercise: Design the front-end and back-end of a system that will help with currency conversions


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

