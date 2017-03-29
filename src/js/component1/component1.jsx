import React from 'react';
import css from './component1.scss';

export default class Component1 extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css.wrap}>
				{this.props.children}
			</div>
			);
	}
}
