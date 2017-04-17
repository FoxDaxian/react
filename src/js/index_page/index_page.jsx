import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";

import route_config from "../router_config";
import RouteLoop from "../router_config/loop.jsx";


class IndexPage extends Component {
    render() {
        const store = this.props;
        return (
            <Router>
                <div>
                    {
                        route_config.map((config, index) => {
                            return <RouteLoop {...this.props} key={index} {...config}></RouteLoop>
                        })
                    }
                </div>
            </Router>
        );
    }
}

export default IndexPage;