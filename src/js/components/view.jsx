import React, { Component, PropTypes } from 'react';

class View extends Component {
    render() {
        
        return (
            <div>
               
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