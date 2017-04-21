import React from 'react';
import { render } from 'react-dom'

//引入组件,为了路由
import Index from "./index_page/index_page.jsx";

import store from "../js/store";//引入
import { Provider } from 'react-redux'
import 'whatwg-fetch'
window.fetch = fetch;//挂载全局fetch


//这里只是简单的利用react-redux的provider，给所有的组件传递store
render(
	<Provider store={store}>
		<Index />{/*Index组件是用来匹配路由的入口组件*/}
	</Provider>,
	document.getElementById('app')
)
//开发环境下开启热替换
if (module.hot) {
	module.hot.accept(Index, () => {
		render(<Provider store={store}><Index /></Provider>, document.getElementById('app'));
	});
}