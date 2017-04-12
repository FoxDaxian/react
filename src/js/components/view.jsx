import React, { Component, PropTypes } from 'react';

class View extends Component {
    render() {
        return (
            <div>
                <p>{1}</p>
                <button>增加</button>
            </div>
        );
    }
}
View.PropTypes = {
    value: PropTypes.number.isRequired,
    add_click: PropTypes.func.isRequired
}

export default View;