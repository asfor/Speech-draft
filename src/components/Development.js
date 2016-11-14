import React, {PropTypes} from 'react'
import Content from './Content'
import {developmentPages} from '../constant'

export default class Development extends Content {
	constructor(props) {
		super(props)
	}

	render() {
		const body = this.pack(developmentPages)
		const nav = this.createNav(developmentPages)

		return (
			<div className='body-content'>
				{body}
				{nav}
			</div>
		)
	}
}