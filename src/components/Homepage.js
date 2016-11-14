import React, {Component, PropTypes} from 'react'
import {homepageTitle} from '../constant'

export default class Homepage extends Component {
	render() {
		return (
			<div id='homepage'>
				<h1>{homepageTitle}</h1>
			</div>
		)
	}
}