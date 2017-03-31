import React from 'react';
import { withRouter } from 'react-router'

import Com2 from '../component2/component2.jsx'
import Com3 from '../component3/component3.jsx'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

export default class Index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	static defaultProps = {
		name:"冯世雨"
	}

	constructor(props) {
		super(props);
	}

	show_state(){
		console.log(this.props);
	}

	render() {
		const { match, location, history } = this.props
		console.log(match);
		console.log(location);
		console.log(history);
		return (
			<div>
				<button onClick={e => this.show_state(e)}>显示state</button>
				<h3>ID: {match.params.id}</h3>
			</div>
			);
	}
}
