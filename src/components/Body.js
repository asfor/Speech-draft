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
		const {switchView} = this.props

		return (
			<Router history={hashHistory}>
				<Route path='/' component={Homepage} />
				<Route path='/Start/:activeIndex' component={Start} switchView={switchView} id={0} />
				<Route path='/Category/:activeIndex' component={Category} switchView={switchView} id={1} />
				<Route path='/Development/:activeIndex' component={Development} switchView={switchView} id={2} />
				<Route path='/End/:activeIndex' component={End} switchView={switchView} id={3} />
			</Router>
		)
	}

	shouldComponentUpdate() { return false; }
}

Body.propTypes = {
	switchView: PropTypes.func
}