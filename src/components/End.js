import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Content from './Content'
import {endPages} from '../constant'

export default class End extends Content {
	constructor(props) {
		super(props, 'end')
		this.pagesLen = endPages.length
	}

	render() {
		const activeIndex = parseInt(this.props.params.activeIndex || 0)
		const body = this.pack(endPages, activeIndex)
		const nav = this.createNav(endPages, activeIndex)

		return (
			<div className='body-content' onWheel={this.listenMouseWheel}>
				{body}
				{nav}
			</div>
		)
	}
}