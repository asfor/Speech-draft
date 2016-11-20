import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import {backgroundColor, wavesClassName} from '../constant'
import '../lib/waves'
import '../stylesheets/nav.scss'

export default class Nav extends Component {
	constructor(props) {
		super(props)
		this.btns = []
		this.onSwitch = this.props.onSwitch
		this.onClick = this.onClick.bind(this)
		this.listCache = this.listCache.bind(this)
	}

	render() {
		const title = this.props.title ? (<h1>{this.props.title}</h1>) : undefined
		const list = this.listCache(this.props.list)

		return (
			<nav id='nav'>
				<ul>{list}</ul>
				{title}
			</nav>
		)
	}

	componentDidMount() {
		Waves.init()
		Waves.attach(`.${wavesClassName}`, ['waves-button', 'waves-effect'])
	}

	onClick({color, title, index}) {
		let last = index
		let next = index
		let count = 1
		const btns = this.btns
		const length = btns.length

		this.onSwitch(color, title)
		while(last > -1 || next < length) {
			spread(btns[--last], 'up')
			spread(btns[++next], 'down')
			count++
		}

		function spread(node, direction) {
			if(!node)	return

			let x

			switch(direction) {
				case 'up':
					x = node.clientWidth
					break

				case 'down':
					x = 0
					break

				default: 
					return
			}

			setTimeout(() => Waves.ripple(node, {
				wait: 0,
				position: {
					x: x,
					y: node.clientHeight / 2
				}
			}), 350 * count)
		}
	}

	listCache(list) {
		this.list = this.list || (function() {
			const colorLen = backgroundColor.length

			return list.map((title, index) => {
				const hrefURL = `#/${title}/0`
				const color = backgroundColor[index % colorLen]

				return <li key={index}><a className={wavesClassName} href={hrefURL} onClick={() => this.onClick({color, title, index})} ref={self => {this.btns.push(findDOMNode(self))}}>{title}</a></li>
			})
		}).call(this)

		return this.list
	}
}

Nav.propTypes = {
	title: PropTypes.string,
	list: PropTypes.arrayOf(PropTypes.string),
	activeIndex: PropTypes.arrayOf(PropTypes.number),
	onSwitch: PropTypes.func
}

// {list: ['start', 'end'], title: 'Start'}