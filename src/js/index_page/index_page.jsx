import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";



import Home from "../components/home/index.jsx";

import LazyBundle from "../util/lazybundle.jsx";








class IndexPage extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={Home}></Route>

            <Route path="/show" render={(props) => (
              <LazyBundle {...props} img={System.import("../../static/img14.jpg")} component={System.import("../components/show_page/show_page.jsx")}></LazyBundle>
            )}></Route>
            <Route path="*" render={(props) => (<div>404  not found</div>)}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default IndexPage;