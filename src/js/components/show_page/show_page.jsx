import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RouteLoop from "../../router_config/loop.jsx";

class ShowPage extends Component {
    render() {
        const { routes } = this.props;
        return (
            <div>
                展示页<br />
                <Link to="/">回到首页</Link>
                <div>
                    {
                        routes.map((routes_config, index) => {
                            return <RouteLoop key={index} {...routes_config}></RouteLoop>
                        })
                    }
                </div>
                <div>
                    <Link to="/show/show1">show1</Link>
                    <br/>
                    <Link to="/show/show2">show2</Link>
                </div>
            </div>
        );
    }
}

export default ShowPage;