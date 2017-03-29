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
		if( this.input.value !== "" ){
			this.setState({
				todolist:this.state.todolist.concat(this.input.value)
			},function() {
				this.input.value = "";
				console.log(this.state.todolist);
			});
		}
	}
	
	prod_el( data ){
		let result = [];
		data.forEach( ( el, i ) => {
			result.push(<div   className={css.list} key={i}>{el}</div>);
		});
		return result;
	}

	render() {
		return (
			<div className={css.wrap}>{/*这里怎么格式化？*/}
				<input ref={el => this.input = el }  className={css.input} type="text"/>
				<button  className={css.btn} onClick={e=>this.push(e)}>点击</button>
				<div>{this.prod_el(this.state.todolist)}</div>
			</div>
			);
	}
}
