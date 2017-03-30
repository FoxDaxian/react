import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames'//扩展css
import css from  './index.scss';

import Component from '../component1/component1.jsx'


export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			com_onoff:true,
			son_text:"一段测试文字",
			todolist: [],
			css_ani:false,
			text:"关闭",
			ani_class:classnames({
				[css.ani]:this.css_ani,
				ani_div:true
			})
		};
		this.prod_el = this.prod_el.bind(this);
	}

	static propTypes = {
		name: React.PropTypes.string,
	};

	componentDidMount() {
		this.input.focus();
	}

	push(){
		if( this.input.value !== "" ){
			this.state.todolist.unshift(this.input.value);
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

	keyup(e){
		let ev = e || window.event;
		if( ev.keyCode === 13 ){
			this.push();
		}
	}


	prod_el( data ){
		let result = [];
		data.forEach( ( el, i ) => {
			result.push(<div className="list" key={i}>{el}</div>);
		});
		return result;
	}

	ani_start(){
		this.setState({
			son_text:Math.random()
		});
		this.setState({
			son_text:Math.random()
		});
		this.state.css_ani = !this.state.css_ani;
		this.state.text = !!this.state.css_ani ? "开启" : "关闭";
		this.setState({
			css_ani:this.state.css_ani,
			ani_class:classnames({
				[css.ani]:this.state.css_ani,
				ani_div:true
			})
		});
	}

	show_com(){
		this.setState({
			com_onoff:!this.state.com_onoff
		});
	}

	add_component(){
		if( this.state.com_onoff ){
			return <Component>{this.state.son_text}</Component>
		}else{
			return null
		}
	}



	render() {
		return (
			<div className={css.wrap}>
			<input ref={el => this.input = el }  className="input" onKeyUp={e => this.keyup(e)} type="text"/>
			<button  className="btn" onClick={e=>this.push(e)}>点击</button>
			<div className="todolist_wrap">{this.prod_el(this.state.todolist)}</div>
			<div className={this.state.ani_class}>动画</div>
			<button onClick={e => this.ani_start(e)}>{this.state.text}</button>
			{this.add_component()}
			<button onClick={e => this.show_com(e)}>是否显示组件</button>
			</div>
			);
	}
}
