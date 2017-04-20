import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import LazyBundle from "../../util/lazybundle.jsx";
class ShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null
        };
    }
    componentDidMount() {
        this.props.img.then((img) => {
            this.setState((prevState, props) => {
                prevState.img = img
            });
        });
    }

    render() {
        return (
            <div>
                <h1>showpage页面</h1>
                <Link to="/"><h2>主页</h2></Link>
                <Link to="/show/show1"><h2>show1</h2></Link>
                <Link to="/show/show2"><h2>show2</h2></Link>
                <img width="50" src={this.state.img} alt="" />


                <Route path="/show/show1" render={(props) => (
                    <LazyBundle {...props} component={System.import("../show_page/components/show1/show1.jsx")}></LazyBundle>
                )}></Route>

                <Route path="/show/show2" render={(props) => (
                    <LazyBundle {...props} component={System.import("../show_page/components/show2/show2.jsx")}></LazyBundle>
                )}></Route>

            </div>
        );
    }
}

export default ShowPage;