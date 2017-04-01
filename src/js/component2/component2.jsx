import React from 'react';
import css from "./component2.scss";

export default class Component2 extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css.wrap}>
				组件2
			</div>
			);
	}
}
