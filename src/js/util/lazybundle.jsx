//懒加载激活器
import React, { Component } from 'react';

class LazyBundle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false//刚开始未加载,或者直接把组件放在state上也行，就省去这一步判断了
        };
    }
    componentDidMount() {
        this.props.component.then((module) => {
            this.lazyComponent = module.default;
            this.setState((prevState, props) => {
                prevState.loaded = true;//加载了设置为true
            });
        }).catch(err => console.log(`加载失败${err}`));
    }

    render() {
        const { loaded } = this.state;
        //这里判断，实际上改激活器一被引入就已经出发了，不过需要的那个加载完毕才会显示
        //而且，被System.import的包已经被打包成JS了
        if (loaded) {
            return <this.lazyComponent {...this.props/*加载路由三个重要信息参数*/} />
        } else {
            return null;
        }
    }
}

export default LazyBundle;