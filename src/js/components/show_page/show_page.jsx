import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import RouteLoop from "../../router_config/loop.jsx";

import Bundle from "../../for_codeSplit.jsx";

import MyShow from 'bundle-loader?lazy!./components/show1/show1.jsx'

const BookList = () => (
    <Bundle load={MyShow}>
        {(BookList) => <BookList />}
    </Bundle>
)



class ShowPage extends Component {
    componentDidMount() {
        BookList()
    }

    render() {
        const { routes } = this.props;
        return (
            <div>
                展示页<br />
                <Link to="/">回到首页</Link>

                <Route path="/show/show1" component={BookList}></Route>

                <div>
                    <Link to="/show/show1">show1</Link>
                </div>
            </div>
        );
    }
}

export default ShowPage;