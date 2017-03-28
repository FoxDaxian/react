import React from 'react';
import css from './index.scss';


export default class Index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			index:0,
			condition:1
		};
		this.click_fn = this.click_fn.bind(this);
		this.prod_el = this.prod_el.bind(this);
	}

	click_fn(){
		let index = this.state.index,
		condition = this.state.condition;
		this.setState({
			index:index + condition
		},function() {
			if( this.state.index === 5 ){
				this.setState({
					condition:-1
				});
			}
			if( this.state.index === 0 ){
				this.setState({
					condition:1
				});
			}
			
		});
	}

	prod_el(){
		return <div>你好</div>
	}

	render() {
		return (
			<div className={css.wrap} onClick={this.click_fn}>
			{this.state.index}
			{this.prod_el()}		
			</div>
			);
	}
}
