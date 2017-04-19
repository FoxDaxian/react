import React, { Component } from 'react';
import { Route } from "react-router-dom";

//为了可以写路由配置对象的循环自调用写法，(像递归)
class RouteLoop extends Component {
    render() {
        const { path, exact, routes, component: Component,...rest } = this.props;
        return (
            <Route path={path} exact={exact}   render={(props) => {
                return (<Component {...props} {...rest} routes={routes/*传入下一个路由配置对象*/} />)
            }} />
        );
    }
}

export default RouteLoop;