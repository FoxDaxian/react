import React from 'react';
import css from './component1.scss'


export default class Component extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	static defaultProps = {
		time:new Date()
	}

	constructor(props) {
		super(props);
		this.state = {
			index:0
		};
	}

	componentWillUnmount() {
		console.log("取消绑定，并在这个时候取消一切事件绑定和定时器等等");
	}
	componentDidMount() {
		this.setState({
			max:this.imgs.children.length
		});
	}

	l_fn(){
		this.state.index--;
		if( this.state.index <= 0){
			this.state.index = 0;
		}
		this.setState({
			index:this.state.index
		});
	}


	r_fn(){
		this.state.index++;
		if( this.state.index >= this.state.max - 1){
			this.state.index = this.state.max - 1;
		}
		this.setState({
			index:this.state.index
		});
	}

	render() {
		let left = this.state.index * -300;
		return (
			<div className={css.wrap}>
			{this.props.time.getTime()}
			{this.props.children}
			<div className="wrap_wrap">
			<div className="l_btn" onClick={ e => this.l_fn(e) }>上一张</div>
			<div className="r_btn" onClick={ e => this.r_fn(e) }>下一张</div>
			<div className="play_wrap">
			<div className="long_width" style={{"left":left + "px" }} ref={el => this.imgs = el}>
			<div className="img">
			<img src={require("../../static/img14.jpg")} alt=""/>
			</div>
			<div className="img">
			<img src={require("../../static/img18.jpeg")} alt=""/>
			</div>
			<div className="img">
			<img src={require("../../static/img19.jpeg")} alt=""/>
			</div>
			</div>
			</div>
			</div>
			</div>
			);
	}
}