import { initState } from "./initState.js";
function reducer(state = initState, action) {
    switch (action.type) {
        case "addtodo":
            const tempDate = prompt("请输入代办事项");
            if (tempDate === null) {
                return state;
            }
            return {
                todo: [
                    ...state.todo,
                    {
                        name: tempDate,
                        isComplete: false
                    }
                ]
            }
            break;
        case "changetodo":
            return {
                todo:state.todo.map((el, i) => {
                    if (i === action.index) {
                        return Object.assign({}, el, { isComplete: !el.isComplete });
                    }
                    return el;
                })
            }
            break;
        default:
            return state;
    }
}
export default reducer;