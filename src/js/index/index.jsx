import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	Prompt
} from "react-router-dom";

import Com1 from "../component1/component1.jsx";
import Com2 from "../component2/component2.jsx";

class Index extends Component {
	render() {
		return (
			<Router>
				<div>
					<NavLink to={{
						pathname:"/",
						name:"冯世雨"
					}} exact activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}>主页</NavLink>
					<NavLink to="/com2" activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}>com2</NavLink>
					<Route exact path="/" component={Com1}></Route>
					<Route path="/com2" component={Com2}></Route>
					<Com2 value="这是不在route上写的"></Com2>
				</div>
			</Router>
		);
	}
}

export default Index;