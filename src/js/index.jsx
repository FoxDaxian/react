import React from 'react';
import ReactDOM from 'react-dom';

export default class Component extends React.Component {//类名必须大写，babelrc文件添加插件babel-plugin-transform-class-properties
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrap">
					<p>这是标题</p>
					<p>你好啊</p>
			</div>
			);
	}
}
ReactDOM.render(
	<Component />,
	document.getElementById('app')
	);
