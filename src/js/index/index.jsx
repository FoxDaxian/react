import React from 'react';
import css from "./index.scss";

import{
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom"

import Com1 from '../component1/component1.jsx'
import Com2 from '../component2/component2.jsx'
import Com3 from '../component3/component3.jsx'

export default class Index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div className={css.wrap}>
					<ul>
						<li><Link to="/">组件1(主页)</Link></li>
						<li><Link to="/com2">组件2</Link></li>
						<li><Link to="/com3">组件3</Link></li>
					</ul>
					<div className="view">
						<Route exact  path="/" component={Com1}></Route>
						<Route path="/com2"  component={Com2}></Route>
						<Route path="/com3"  component={Com3}></Route>
					</div>
				</div>
			</Router>
			);
	}
}
