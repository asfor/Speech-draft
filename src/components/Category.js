import React, {PropTypes} from 'react'
import Content from './Content'
import {categoryPages} from '../constant'

export default class Category extends Content {
	constructor(props) {
		super(props)
	}

	render() {
		const body = this.pack(categoryPages)
		const nav = this.createNav(categoryPages)

		return (
			<div className='body-content'>
				{body}
				{nav}
			</div>
		)
	}
}