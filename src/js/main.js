import React from 'react';
import { render } from 'react-dom'

//引入组件
import ToDoList from "./components/function.jsx";

import main_store from "../js/store";//引入
const {store,mapStateToProps,mapDispatchToProps} = main_store
import { Provider, connect } from 'react-redux'

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoList)


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
