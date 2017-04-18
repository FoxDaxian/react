import Home from "../components/home/index.jsx";
import ShowPage from "../components/show_page/show_page.jsx";
import show1 from "../components/show_page/components/show1/show1.jsx";
import show2 from "../components/show_page/components/show2/show2.jsx";
const routes = [
    {
        path: '/',
        component: Home,
        exact: true
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