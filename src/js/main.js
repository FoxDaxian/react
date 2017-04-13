import React from 'react';
import { render } from 'react-dom'

//引入组件
import View from "./components/view.jsx";

import store from "../js/store";//引入
import { createStore } from "redux";
import { Provider, connect } from 'react-redux'

const App = connect(
	store.mapStateToProps,
	store.mapDispatchToProps
)(View)



render(
	<Provider store={store.store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
