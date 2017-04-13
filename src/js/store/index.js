import { createStore } from 'redux'
import reducer from "./reducer.js";
import { increaseAction } from "./actions.js";//引入actions

const store = createStore(reducer);//初始化


function mapStateToProps(state) {//遍历state到组件的props
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {//遍历dispatch到组件的props，以让组件调用
    return {
        add: () => dispatch(increaseAction)
    }
}

export default {
    store,mapStateToProps,mapDispatchToProps
}