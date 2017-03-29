import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames'//扩展css
import css from  './index.scss';


export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todolist: []
		};
		this.prod_el = this.prod_el.bind(this);
	}

	static propTypes = {
		name: React.PropTypes.string,
	};

	push(){
		this.state.todolist.unshift(this.input.value);
		if( this.input.value !== "" ){
			this.setState({
				todolist:this.state.todolist
			},function() {
				this.input.value = "";
				this.input.focus();
				console.log(this.state.todolist);
			});
		}else{
			console.log("空了");
		}
	}
	
	prod_el( data ){
		console.log("被render了");
		let result = [];
		data.forEach( ( el, i ) => {
			result.push(<div className="list" key={i}>{el}</div>);
		});
		return result;
	}



	render() {
		return (
			<div className={css.wrap}>
			<input ref={el => this.input = el }  className="input" type="text"/>
			<button  className="btn" onClick={e=>this.push(e)}>点击</button>
			<div className="todolist_wrap">{this.prod_el(this.state.todolist)}</div>
			</div>
			);
	}
}
