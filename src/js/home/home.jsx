import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.change_todo = this.props.changetodo;
    }
    change(e, index) {
        this.change_todo(index);
    }
    render() {
        const { ToDoDate, add } = this.props;
        return (
            <div>
                {
                    ToDoDate.map((el, i) => {
                        return (
                            <div key={i}>
                                <div>{el.name}</div>
                                <div onClick={(e) => this.change(e,i)}>{el.isComplete ? "完成了" : "没完成"}</div>
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