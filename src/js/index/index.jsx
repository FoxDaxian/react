import React, { PropTypes } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Prompt
} from "react-router-dom";

const Com1 = () => {
	return (
		<div>组件1</div>
	)
}
const Com2 = () => {
	return (
		<div>组件2</div>
	)
}

const Com3 = () => {
	return (
		<div>组件3</div>
	)
}

const Like_link = ({ to, ...args_out }) => {
	console.log(args_out);
	return (
		<Route path={to} children={({ ...arg }) => {
			console.log(arg);
			return (
				<div>
					{arg.match ? "yes" : "no"}<Link to={to} {...args_out}>到主页</Link>
				</div>
			)
		}}></Route>
	)
}



export class index extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<Router>
				<div>
					<Like_link to="/" name="冯世雨啦啦啦" />
				</div>
			</Router>
		);
	}
}

index.defaultProps = {

};

index.propTypes = {

};

export default index;
