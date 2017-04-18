import { createStore } from 'redux'
import reducer from "./reducer.js";

let store = null;
if (process.env.NODE_ENV === "development") {
    //这句话是用来开启谷歌浏览器查看store的
    store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//初始化
} else {
    store = createStore(reducer);//初始化
}

export default store;