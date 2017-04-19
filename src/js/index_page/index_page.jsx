import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import routes from "../router_config";
import RouteLoop from "../router_config/loop.jsx";


import Home from "../components/home/index.jsx";

import Bundle from "../for_codeSplit.jsx";

import Show from 'bundle-loader?lazy!../components/show_page/show_page.jsx'

const AsynShow = () => (
  <Bundle load={Show}>
    {(AsynShow) => <AsynShow />}
  </Bundle>
)




class IndexPage extends Component {
  componentDidMount() {
    AsynShow()
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/show" component={AsynShow}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default IndexPage;