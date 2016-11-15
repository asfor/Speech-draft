import React, {Component, PropTypes} from 'react'

export default class Content extends Component {
	constructor(props, title) {
		super(props)
		this.id = this.props.route.id
		this.activeIndex = 0
		this.switchView = this.switchView.bind(this, title)
		this.listenMouseWheel = this.listenMouseWheel.bind(this)
	}

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
		this.props.route.switchView(this.id, activeIndex)
		this.props.router.push({
			pathname: `/${title}/${activeIndex}`
		})
	}

	listenMouseWheel(event) {
		const nextIndex = event.deltaY > 0 ? this.activeIndex + 1 : this.activeIndex - 1
		if(nextIndex < 0 || nextIndex >= this.pagesLen) return
		this.switchView(nextIndex)
	}
}

Content.propTypes = {
	switchView: PropTypes.func,
}