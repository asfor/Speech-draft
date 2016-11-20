import React, {Component, PropTypes} from 'react'
import {Router, Route, hashHistory} from 'react-router';
import Homepage from './Homepage'
import Start from './Start'
import Category from './Category'
import Development from './Development'
import End from './End'
import '../stylesheets/body.scss'

export default class Body extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Homepage} />
				<Route path='/Start/:activeIndex' component={Start} />
				<Route path='/Category/:activeIndex' component={Category} />
				<Route path='/Development/:activeIndex' component={Development} />
				<Route path='/End/:activeIndex' component={End} />
			</Router>
		)
	}

	shouldComponentUpdate() { return false; }
}
