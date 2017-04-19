import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { todo, add, changetodo } = this.props;
        return (
            <div>
                {
                    todo.map((el, i) => {
                        return (
                            <div key={i}>
                                <div>{el.name}</div>
                                <div onClick={changetodo.bind(null, i)}>{el.isComplete ? "完成了" : "没完成"}</div>
                            </div>
                        )
                    })
                }
                <button onClick={add}>新增</button>
                <Link to="show">到show</Link>
            </div>
        );
    }
}

export default Home;