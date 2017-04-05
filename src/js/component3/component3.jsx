import React from 'react';
import css from "./component3.scss";

export default class Component3 extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css.wrap}>
				<h1>我是组件3</h1>
			</div>
			);
	}
}
