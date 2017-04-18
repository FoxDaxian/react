import { addToDo, changeToDo } from "./actions.js";//引入actions
function mapDispatchToProps(dispatch) {//遍历dispatch到组件的props，以让组件调用
    return {
        add: () => dispatch(addToDo),
        changetodo: (index) => dispatch(changeToDo(index))//穿参数进来
    }
}
export default mapDispatchToProps;