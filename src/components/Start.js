import React, {PropTypes} from 'react'
import Content from './Content'
import {startPages} from '../constant'

export default class Start extends Content {
	constructor(props) {
		super(props)
	}

	render() {
		const body = this.pack(startPages)
		const nav = this.createNav(startPages)

		return (
			<div className='body-content'>
				{body}
				{nav}
			</div>
		)
	}
}