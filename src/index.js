import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import rootReducer from './reducers/reducer'
import initialState from './initialState'

// store

const store = createStore(rootReducer, initialState)

// render

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
