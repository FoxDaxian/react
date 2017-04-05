import React from 'react';
import css from "./index.scss";

import {
	BrowserRouter as Router,
	Route,
	Link,
} from "react-router-dom"

import Com1 from '../component1/component1.jsx'
import Com2 from '../component2/component2.jsx'
import Com3 from '../component3/component3.jsx'

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const topics = (props) => (
	<Router>
		<div>
			<h3>儿子里的路由</h3>
			<ul>
				<li><Link to={`${props.match.url}/son_son1`}>儿子儿子1</Link></li>
				<li><Link to={`${props.match.url}/son_son2`}>儿子儿子2</Link></li>
				<li><Link to={`${props.match.url}/son_son3`}>儿子儿子3</Link></li>
			</ul>
			<Route path={`${props.match.url}/:id`} component={topics_temp}></Route>
			<Route exact path={`${props.match.url}`} render={() => (
					<h5>儿子的主页</h5>
				)}></Route>
		</div>
	</Router>
)

const topics_temp = (props) => (
	<div>
		{props.match.params.id}
	</div>
)

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
						<li><Link to="/">组件(这是主页)</Link></li>
						<li><Link to="/com2">组件2</Link></li>
						<li><Link to="/com3">组件3</Link></li>
					</ul>
					<div className="view">
						<Route exact path="/" component={Home}></Route>
						<Route path="/com2" component={About}></Route>
						<Route path="/com3" component={topics}></Route>
					</div>
				</div>
			</Router>
		);
	}
}
