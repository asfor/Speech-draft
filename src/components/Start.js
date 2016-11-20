import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Content from './Content'
import {startPages} from '../constant'
import '../stylesheets/start.scss'

export default class Start extends Content {
	constructor(props) {
		super(props, 'start')
		this.pagesLen = startPages.length
		this.initAnimations.call(this)
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

	initAnimations(animationsDidRun) {
		animationsDidRun = animationsDidRun || function() {}
		this.animations[0] = (animations, index) => {
			const icons = Array.prototype.slice.call(document.querySelectorAll('#icons li img'))
			icons.push(animationsDidRun)

			this.run(icons.reduceRight((previous, icon) => {
				return () => this.animation(icon, {transform: 'scale(1)'}, 700, 500, previous)
			}))

			delete animations[index]
		}
	}
}