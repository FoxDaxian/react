import React, { Component } from 'react';
import css from "./component1.scss";
class Com1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={css.wrap}>
                <h3>组件1</h3>
            </div>
        );
    }
}

export default Com1;
