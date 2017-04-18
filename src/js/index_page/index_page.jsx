import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";

import routes from "../router_config";
import RouteLoop from "../router_config/loop.jsx";


class IndexPage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {
                            routes.map((router_config, index) => {
                                return <RouteLoop key={index} {...router_config}></RouteLoop>
                            })
                        }
                    </div>
                </Router>
            </div>
        );
    }
}

export default IndexPage;