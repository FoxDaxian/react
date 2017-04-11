import React, { Component, PropTypes } from 'react';

class ToDo extends Component {
    render() {
        const { onClick, completed, text } = this.props;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? "line-through" : "none"
                }}
            >
                {text}
            </li>
        );
    }
}
ToDo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
}

export default ToDo;