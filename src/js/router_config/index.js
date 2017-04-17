import Home from "../home/home.jsx";
import ShowPage from "../show_page/show_page.jsx";
const routes = [
    {
        path: '/',
        component: Home,
        exact:true
    },
    {
        path: '/show',
        component: ShowPage
    }
]
export default routes;