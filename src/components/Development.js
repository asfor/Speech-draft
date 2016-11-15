import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Content from './Content'
import {developmentPages} from '../constant'

export default class Development extends Content {
	constructor(props) {
		super(props, 'development')
		this.pagesLen = developmentPages.length
	}

	render() {
		const activeIndex = parseInt(this.props.params.activeIndex || 0)
		const body = this.pack(developmentPages, activeIndex)
		const nav = this.createNav(developmentPages, activeIndex)

		return (
			<div className='body-content' onWheel={this.listenMouseWheel}>
				{body}
				{nav}
			</div>
		)
	}
}