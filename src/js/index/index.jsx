import React, { PropTypes } from 'react';

import Com1 from '../component1/component1.jsx';
import Com2 from '../component2/component2.jsx';
import Com3 from '../component3/component3.jsx';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

const grandson1 = () => (
	<div>
		<h2>孙子1</h2>
	</div>
)
const grandson2 = () => (
	<div>
		<h2>孙子2</h2>
	</div>
)
const grandson3 = () => (
	<div>
		<h2>孙子3</h2>
	</div>
)

const Topic = ( props ) => {
	console.log(props);
	return(
		<div>
			<h3>{props.match.params.gs_id}</h3>
		</div>
	)
}

const Third_route = ({ match }) => (
	<Router>
		<div>
			<div>
				<Link to={`${match.url}/gr1`}>孙子1</Link>
				<Link to={`${match.url}/gr2`}>孙子2</Link>
				<Link to={`${match.url}/gr3`}>孙子3</Link>
			</div>
			<Route path={`${match.url}/:gs_id`} component={Topic}></Route>
			<Route exact path={`${match.url}`} render={
				() => (
					<div>孙子的主页</div>
				)
			}></Route>
		</div>
	</Router>
)

export class Index extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Router>
				<div>
					<div>
						<Link to="/">第一个路由</Link>
						<Link to="/com1">第二个路由</Link>
						<Link to="/com2">第三个路由</Link>
					</div>
					<Route exact path="/" component={Com1}></Route>
					<Route path="/com1" component={Com2}></Route>
					<Route path="/com2" component={Third_route}></Route>
				</div>
			</Router>
		);
	}
}

Index.defaultProps = {

};

Index.propTypes = {

};

export default Index;
