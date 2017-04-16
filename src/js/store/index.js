import { createStore } from 'redux'
import reducer from "./reducer.js";
import { addToDo, changeToDo } from "./actions.js";//引入actions





//这句话是用来开启谷歌浏览器查看store的
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//初始化


function mapStateToProps(state) {//遍历state到组件的props
    return {
        ToDoDate: state.todo
    }
}

function mapDispatchToProps(dispatch) {//遍历dispatch到组件的props，以让组件调用
    return {
        add: () => dispatch(addToDo),
        changetodo: (index) => dispatch(changeToDo(index))//穿参数进来
    }
}

export default {
    store, mapStateToProps, mapDispatchToProps
}