import React from 'react';
import css from "./component1.scss";

export default class Component1 extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { history:h, location:l, match:m } = this.props;
		return (
			<div className={css.wrap}>
				组件1
			</div>
			);
	}
}
