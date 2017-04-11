import React from 'react';
import { render } from 'react-dom'



import { createStore, applyMiddleware } from "redux";

//中间处理者
const reducer = (state = 0, action) => {
	let result = state
	switch (action.type) {
		case "TO_LOW":
			result = state - 1;
			break;
		case "TO_UP":
			result = state + 1;
			break;
	}
	return result
}


//初始化redux的store中的数据
const store = createStore(reducer)


//监听创建好的store，每次事件触发，进行回调
store.subscribe(() => {
	console.log(store.getState())
})

//分发动作，触发中间处理者，然后触发订阅
store.dispatch({ type: 'TO_LOW'})
store.dispatch({ type: 'TO_LOW'})
store.dispatch({ type: 'TO_LOW'})
store.dispatch({ type: 'TO_UP'})





render(
	<div>你好</div>,
	document.getElementById('app')
)



