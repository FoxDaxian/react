import React, { PropTypes } from 'react';
import { Prompt } from "react-router-dom";


export class Com1 extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isBlock: false
		};
	}

	componentWillUnmount() {
		console.log("被解除绑定了");
	}

	submit = (e) => {
		e.target.reset()
		this.setState({
			isBlock: false
		})
		e.preventDefault()
	}

	render() {
		const { isBlock } = this.state
		return (
			<form onSubmit={this.submit}>
				<Prompt
					when={isBlock}
					message={location => (
						`你真的要跳转到 ${location.pathname}么？`
					)}
				/>

				<p>
					是否无法跳转? {isBlock ? '好，现在试试再试试点击那些链接' : '可以正常跳转'}
				</p>

				<p>
					<input
						size="50"
						placeholder="你这里面输入了以后就不能正常跳转了"
						onChange={event => {
							this.setState({
								isBlock: event.target.value.length > 0
							})
						}}
					/>
				</p>

				<p>
					<button>提交表单以后就可以正常跳转了</button>
				</p>
			</form>
		);
	}
}

Com1.defaultProps = {

};

Com1.propTypes = {

};

export default Com1;
