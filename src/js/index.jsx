import React from 'react';
import ReactDOM from 'react-dom';

export default class Index extends React.Component {//类名必须大写，babelrc文件添加插件babel-plugin-transform-class-properties
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div>
		<h1>测试</h1>
		</div>
		);
	}
}
ReactDOM.render(
<Index />,
document.getElementById('app')
);
