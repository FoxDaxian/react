//相当于配置对象
export const addToDo = { type: "addtodo" };
//需要传参的时候要吧action对象写成函数
export const changeToDo = function (arg) {
    return {
        type: "changetodo",
        index:arg
    }
};
