import React, {Component, PropTypes} from 'react'
import {Router, Route, hashHistory} from 'react-router';
import Homepage from './Homepage'
import Start from './Start'
import Category from './Category'
import Development from './Development'
import End from './End'

export default class Body extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Homepage} />
				<Route path='/Start' component={Start} />
				<Route path='/Category' component={Category} />
				<Route path='/Development' component={Development} />
				<Route path='/End' component={End} />
			</Router>
		)
	}
}