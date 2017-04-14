import React, { Component, PropTypes } from 'react';

class View extends Component {
    render() {
        const { value, add, name, cn } = this.props;
        return (
            <div>
                <p>{value}</p>
                <button onClick={add}>增加</button>
                <p>{name}</p>
                <button onClick={cn}>改变名字</button>
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