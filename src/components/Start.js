import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Content from './Content'
import {startPages} from '../constant'

export default class Start extends Content {
	constructor(props) {
		super(props, 'start')
		this.pagesLen = startPages.length
	}

	render() {
		const activeIndex = parseInt(this.props.params.activeIndex || 0)
		const body = this.pack(startPages, activeIndex)
		const nav = this.createNav(startPages, activeIndex)

		return (
			<div className='body-content' onWheel={this.listenMouseWheel}>
				{body}
				{nav}
			</div>
		)
	}
}