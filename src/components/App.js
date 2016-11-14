import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {changeBackground} from '../action'
import Nav from './Nav'
import Body from './Body'
import '../stylesheets/waves.scss'
import '../stylesheets/layout.scss'

class Page extends Component {
	render() {
		const {color, list, onSwitch} = this.props

		return (
			<div id='app' className={color}>
				<Nav list={list} onSwitch={onSwitch} />
				<Body />
			</div>
		)
	}
}

Page.propTypes = {
	list: PropTypes.arrayOf(PropTypes.string)
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		onSwitch: color => {dispatch(changeBackground(color))}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Page)

// {list: ['start', 'end']}