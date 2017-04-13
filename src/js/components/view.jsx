import React, { Component, PropTypes } from 'react';

class View extends Component {
    render() {
        const {value,add} = this.props;
        return (
            <div>
                <p>{value}</p>
                <button onClick={add}>增加</button>
            </div>
        );
    }
}
//严谨
View.PropTypes = {
    value: PropTypes.number.isRequired,
    add_click: PropTypes.func.isRequired
}

export default View;