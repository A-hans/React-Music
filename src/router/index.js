import Home from '@/pages/home';
import Mine from '@/pages/mine';
import Friend from '@/pages/friend';

const routes = [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/mine',
    component: Mine
}, {
    path: '/friend',
    component: Friend
}]

export default routes;