import React, { Component } from 'react';
import css from "./view.scss";

class View extends Component {
  constructor(props) {
    super(props);
    this.changetodo = this.props.changetodo;
  }

  changeComplete(e, i) {
    this.changetodo(i);
  }
  
  render() {
    const { date, add } = this.props;
    return (
      <div className={css.wrap}>
        <div className="todolist">
          {
            date.map((el, i) => {
              return (
                <div key={i} className="todolist_wrap">
                  <div className="name">{el.name}</div>
                  <div className="isComplete" onClick={(e) => this.changeComplete(e, i)}>{el.isComplete ? "已完成" : "未完成"}</div>
                </div>
              )
            })
          }
        </div>
        <button onClick={add}>新增</button>
      </div>
    );
  }
}

export default View;