import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import Home from "../components/home/index.jsx";

import LazyBundle from "../util/lazybundle.jsx";//按需加载中间件

require("babel-polyfill");//如果使用了es6/es7的最新的API则加上这句话，以兼容老版本浏览器





class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }
  componentDidMount() {
    fetch("http://fengshiyu.com/mock.php").then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return {}
      }

    }).then((data) => {
      this.setState((prevState, props) => {
        prevState.name = data.name;
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
          {this.state.name}
            <Route path="/" exact component={Home}></Route>

            <Route path="/show" render={(props) => (
              <LazyBundle {...props} img={System.import("../../static/img14.jpg")} component={System.import("../components/show_page/show_page.jsx")}></LazyBundle>
            )}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default IndexPage;