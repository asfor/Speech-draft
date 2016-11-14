import React, {Component, PropTypes} from 'react'

export default class Content extends Component {
	constructor(props) {
		super(props)
	}

	pack(bodies) {
		const list = bodies.map((body, index) => {
			return <li key={index}>{body}</li>
		})

		return <ul>{list}</ul>
	}

	createNav(bodies) {
		const list = bodies.map((body, index) => {
			return <li key={index} ref={`nav_${index}`}></li>
		})

		return (
			<nav>
				<ul>{list}</ul>
			</nav>
		)
	}
}