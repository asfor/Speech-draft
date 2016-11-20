import React, {Component, PropTypes} from 'react'
import Promise from 'promise'

export default class Content extends Component {
	constructor(props, title) {
		super(props)
		this.switchView = this.switchView.bind(this, title)
		this.listenMouseWheel = this.listenMouseWheel.bind(this)
		this.animations = {}
	}
	
	componentDidMount() {this.switchView(0)}

	pack(bodies, activeIndex) {
		const list = bodies.map((body, index) => {
			let marginLeft
			if(index < activeIndex)	marginLeft = '-100%'
			if(index > activeIndex)	marginLeft = '100%'

			return <li style={{marginLeft: marginLeft || 0}} key={index}>{body}</li>
		})

		return <ul>{list}</ul>
	}

	createNav(bodies, activeIndex) {
		const list = bodies.map((body, index) => {
			return <li className={index === activeIndex ? 'active' : ''} onClick={e => this.switchView(index)} key={index} ref={`nav_${index}`}></li>
		})

		return (
			<nav>
				<ul>{list}</ul>
			</nav>
		)
	}

	switchView(title, activeIndex) {
		this.activeIndex = activeIndex
		this.props.router.push({
			pathname: `/${title}/${activeIndex}`
		})

		const animation = this.animations[activeIndex]
		if(animation) animation(this.animations, activeIndex)
	}

	listenMouseWheel(event) {
		const nextIndex = event.deltaY > 0 ? this.activeIndex + 1 : this.activeIndex - 1
		if(nextIndex < 0 || nextIndex >= this.pagesLen) return
		this.switchView(nextIndex)
	}

	animation(node, styleObj, duration, wait, callback) {
		styleObj.transition = parseFloat(duration/1000).toFixed(2) + 's linear'

		for(var key in styleObj)
			node.style[key] = styleObj[key]

		return new Promise((resolve, reject) => {
			setTimeout(resolve, wait)
		}).then(callback)
	}

	run(tasks) {
		const start = new Promise((resolve, reject) => {
			setTimeout(resolve, 500)
		}).then(tasks)
	}
}
