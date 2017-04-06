import React, { PropTypes } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom'



const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100);
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100);
	}
}

const AuthButton = withRouter(({ history }) => (
	fakeAuth.isAuthenticated ? (
		<p>
			欢迎! <button onClick={() => {
				fakeAuth.signout(() => history.push('/'))
			}}>登出</button>
		</p>
	) : (
			<p>请先登录</p>
		)
))

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		fakeAuth.isAuthenticated ? (
			<Component {...props} />
		) : (
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
			)
	)} />
)

const Public = () => <h3>公开的页面</h3>
const Protected = () => <h3>非公开的页面</h3>

class Login extends React.Component {
	state = {
		redirectToReferrer: false
	}

	login = () => {
		fakeAuth.authenticate(() => {
			this.setState({ redirectToReferrer: true })
		})
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } }
		const { redirectToReferrer } = this.state

		if (redirectToReferrer) {
			return (
				<Redirect to={from} />
			)
		}

		return (
			<div>
				<p>若想访问 {from.pathname} ，你需要先登录</p>
				<button onClick={this.login}>登录</button>
			</div>
		)
	}
}




class Index extends React.Component {
	constructor(props, context) {
		super(props, context);


	}

	render() {
		return (
			<Router>
				<div>
					<AuthButton />
					<ul>
						<li><Link to="/public">公开页面</Link></li>
						<li><Link to="/protected">非公开页面</Link></li>
					</ul>
					<Route path="/public" component={Public} />
					<Route path="/login" component={Login} />
					<PrivateRoute path="/protected" component={Protected} />
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
