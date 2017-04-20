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
                <img src={this.state.img} alt="" />

            </div>
        );
    }
}

export default ShowPage;