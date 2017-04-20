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

            <Route path="/show"  render={(props) => (
              <LazyBundle {...props} img={System.import("../../static/img14.jpg")} component={System.import("../components/show_page/show_page.jsx")}></LazyBundle>
            )}></Route>

            <Route path="/show/show1"  render={(props) => (
              <LazyBundle {...props} component={System.import("../components/show_page/components/show1/show1.jsx")}></LazyBundle>
            )}></Route>

            <Route path="/show/show2"  render={(props) => (
              <LazyBundle {...props} component={System.import("../components/show_page/components/show2/show2.jsx")}></LazyBundle>
            )}></Route>

          </div>
        </Router>
      </div>
    );
  }
}

export default IndexPage;