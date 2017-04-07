import React, { PropTypes } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom";

const Home = () => (
	<p>
		<code> &lt;Switch> </code>会渲染它里面的第一个可以匹配的
    <code> &lt;Route> </code>，而且一个没有<code> path </code>的
    <code> &lt;Route> </code> 会满足任何匹配。
	</p>
)

const WillMatch = () => <h3>匹配到了！</h3>

export class Index extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Router>
				<div>
					<div className="links">
						<div>
							<Link to="/">主页</Link>
						</div>
						<div>
							<Link to="/old-match">可以啊</Link>
						</div>
						<div>
							<Link to="/will-match">可以啊</Link>
						</div>
						<div>
							<Link to="/will-not-match">不可以</Link>
						</div>
						<div>
							<Link to="/also/will/not/match">不可以</Link>
						</div>
					</div>
					<Switch>
						<Route path="/" exact component={() => <h1>主页</h1>} />
						<Redirect from="/old-match" to="/will-match" />
						<Route path="/will-match" component={WillMatch} />
						<Route render={ () => <h3>我是备胎</h3>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

Index.defaultProps = {

};

Index.propTypes = {

};

export default Index;
