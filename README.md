# react
测试

    增加的redux可视化
    使用prop-types包来进行类型检测
    cnpm install babel-plugin-transform-decorators-legacy --save-dev，并添加"plugins": ["transform-decorators-legacy"]，以支持es7的修饰器
    利用lazy-router和webpack2的system.import按需加载，根据该原理可以进行一切的按需
    要加上babel-ployfill，并且require到入口文件里，来加载新的es6/es7
    开启热替换，没用webpack-dev-server，用的 webpack-hot-middleware，在入口文件处的render上做处理就OK了（还需要HotModuleReplacementPlugin
    集成fetch，挂载到window上，拦截器啥的还没做，能用了



#目前状态
    [x]react-router4
    [x]redux
    [x]fetch
    [x]css-module（处理css局部化
    [x]prop-types来进行类型属性类型检测
    [x]路由动画（类似于vue-transittion
    [x]npm run dev | npm run build
    [x]热替换，热刷新，路由按需加载
    [x]使用最新的api兼容就浏览器需要ployfill
