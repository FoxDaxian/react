import React from 'react';
import css from './component1.scss'

export default class Component extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	componentDidMount() {
		this.btn.addEventListener('click', function(e) {
			console.log(1);
		});
	}


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css.wrap}>
			<p>组件1</p>
			<button ref={e => this.btn = e}>点击</button>
			</div>
			);
	}
}
