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
	}

	render() {
		const colorLen = backgroundColor.length

		const list = this.props.list.map((title, index) => {
			const hrefURL = `#/${title}`
			const color = backgroundColor[index % colorLen]

			return <li key={index}><a className={wavesClassName} href={hrefURL} onClick={() => this.onClick({color, index})} ref={self => this.btns.push(findDOMNode(self))}>{title}</a></li>
		})

		return (
			<nav id='nav'>
				<ul>{list}</ul>
				<h1>{}</h1>
			</nav>
		)
	}

	componentDidMount() {
		Waves.init()
		Waves.attach(`.${wavesClassName}`, ['waves-button', 'waves-effect'])
	}

	shouldComponentUpdate(nextProps, ) {return false}

	onClick({color, index}) {
		let last = index
		let next = index
		let count = 1
		const btns = this.btns
		const length = btns.length

		this.onSwitch(color)
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
}

Nav.propTypes = {list: PropTypes.arrayOf(PropTypes.string)}

// {list: ['start', 'end']}