import React, {PropTypes} from 'react'
import Content from './Content'
import {endPages} from '../constant'

export default class End extends Content {
	constructor(props) {
		super(props)
	}

	render() {
		const body = this.pack(endPages)
		const nav = this.createNav(endPages)

		return (
			<div className='body-content'>
				{body}
				{nav}
			</div>
		)
	}
}