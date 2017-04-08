import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom'
import Com1 from "../component1/component1.jsx";
import Com2 from "../component2/component2.jsx";
import Com3 from "../component3/component3.jsx";
import css from "./index.scss";

const routes = [{
	name: "主页",
	path: "/",
	exact: "true",
	com: Com1
}, {
	name: "组件2",
	path: "/Com2",
	com: Com2
}, {
	name: "组件3",
	path: "/Com3",
	com: Com3
}]

class Index extends Component {
	render() {

		return (
			<Router>
				<div className={css.wrap}>
					{routes.map((el, i) => {
						return (
							<Link key={el.path} to={el.path}>{el.name}</Link>
						)
					})}

					{
						routes.map((el, i) => {
							return (
								// 必须有location，用来启动动画，因为react-router需要知道"来龙去脉"
								<Route key={i} render={({ location }) => {
									return (
										<ReactCSSTransitionGroup
											transitionName="example"
											transitionEnterTimeout={500}
											transitionLeaveTimeout={300}
										>

											<Route
												exact={!!el.exact ? true : false}
												location={location}//这个也是必须这样写的
												key={location.key}//这个也是必须这样写的
												path={el.path}
												component={el.com}
											/>


										</ReactCSSTransitionGroup>
									)
								}} />
							)
						})
					}


				</div>
			</Router>
		);
	}
}

export default Index;