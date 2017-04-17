import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ShowPage extends Component {
    render() {
        return (
            <div>
                展示页
                <Link to="/">回到首页</Link>
            </div>
        );
    }
}

export default ShowPage;