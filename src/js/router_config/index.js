import Home from "../components/home/index.jsx";
import ShowPage from "../components/show_page/show_page.jsx";
import show1 from "../components/show_page/components/show1/show1.jsx";
import show2 from "../components/show_page/components/show2/show2.jsx";




// const Home = require.ensure([], (require) => require("../components/home/index.jsx"));
// const ShowPage = require.ensure([], (require) => require("../components/show_page/show_page.jsx"));
// const show1 = require.ensure([], (require) => require("../components/show_page/components/show1/show1.jsx"));
// const show2 = require.ensure([], (require) => require("../components/show_page/components/show2/show2.jsx"));








//初始化props要在router配置对象里写，才能在mapStateToProps的第二个参数ounProps中获取到
const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/show',
        component: ShowPage,
        routes: [{
            path: '/show/show1',
            component: show1,
        }, {
            path: '/show/show2',
            component: show2,
        }]
    }
]
export default routes;