import React from 'react';
import css from './index.scss';

export default class Index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css.wrap}>正式开始</div>
			);
	}
}
