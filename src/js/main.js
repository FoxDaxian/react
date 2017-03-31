// import css from "../static/reset.css";

import Index from './index/index.jsx'
import Com1 from './component1/component1.jsx'

import React from 'react';
import { render } from 'react-dom'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

render((<Router>
		<div>
			<ul>
				<li><Link to={{
					pathname: '/login',
				    state: { from:"测试" },
				    props:{sex:"男人"}
				}}>Index</Link></li>
				<li><Link to="/aa">Com1</Link></li>
			</ul>

			<hr/>

			<Route path="/:id" component={Index} />
		</div>
	</Router>),document.getElementById('app'));


