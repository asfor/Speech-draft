import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Content from './Content'
import {categoryPages} from '../constant'

export default class Category extends Content {
	constructor(props) {
		super(props, 'category')
		this.pagesLen = categoryPages.length
	}

	render() {
		const activeIndex = parseInt(this.props.params.activeIndex || 0)
		const body = this.pack(categoryPages, activeIndex)
		const nav = this.createNav(categoryPages, activeIndex)

		return (
			<div className='body-content' onWheel={this.listenMouseWheel}>
				{body}
				{nav}
			</div>
		)
	}
}