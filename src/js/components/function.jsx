import React, { Component } from 'react';
import PropTypes from "prop-types";

import ToDoView from "./view.jsx";

class Funs extends Component {
    render() {
        const { ToDoDate, add, changetodo } = this.props;
        return (
            <div>
                <ToDoView date={ToDoDate} add={add} changetodo={changetodo}></ToDoView>
            </div>
        );
    }
}
//严谨
Funs.PropTypes = {
    ToDoDate: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired
}

export default Funs;