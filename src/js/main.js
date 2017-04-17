import React from 'react';
import { render } from 'react-dom'




//引入组件
import Index from "./index_page/index_page.jsx";

import main_store from "../js/store";//引入
const { store, mapStateToProps, mapDispatchToProps } = main_store
import { Provider, connect } from 'react-redux'

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Index)


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)


