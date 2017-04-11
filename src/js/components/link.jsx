import React, { Component, PropTypes } from 'react';

class Link extends Component {
    render() {
        const { active, children, onClick } = this.prop;
        if (active) {
            return <span>{children}</span>
        }
        return (
            <a
                href="#"
                onClick={e => {
                    e.preventDefault();
                    onClick();
                }}
            >
                {children}
            </a>
        );
    }
}
Link.propTypes = {
    active:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Link;