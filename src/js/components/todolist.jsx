import React, { Component, PropTypes } from 'react';
import Todo from "./todo.jsx";

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todos, onTodoClick } = this.props;
        return (
            <ul>
                {
                    todos.map((el, i) => {
                        <Todo
                            key={el.id}
                            {...el}
                            onClick={() => onTodoClick(el.id)}
                        ></Todo>
                    });
                }
            </ul>
        );
    }
}
TodoList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default ToDoList;