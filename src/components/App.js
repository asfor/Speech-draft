import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {changeBackground, switchView} from '../action'
import Nav from './Nav'
import Body from './Body'
import '../stylesheets/waves.scss'
import '../stylesheets/layout.scss'

class Page extends Component {
	render() {
		const {
			color, list, title, activeIndex,
			onSwitch, switchView
		} = this.props

		return (
			<div id='app' className={color}>
				<Nav list={list} title={title} activeIndex={activeIndex} onSwitch={onSwitch} />
				<Body switchView={switchView} />
			</div>
		)
	}
}

Page.propTypes = {
	color: PropTypes.string,
	list: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	activeIndex: PropTypes.arrayOf(PropTypes.number),
	onSwitch: PropTypes.func,
	switchView: PropTypes.func
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		onSwitch: (color, title) => {dispatch(changeBackground(color, title))},
		switchView: (title, activeIndex) => {dispatch(switchView(title, activeIndex))}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Page)

// {
// 	color: 'red',
// 	list: ['start', 'end'],
// 	title: 'Start',
// 	onSwitch: function(){...}
// }