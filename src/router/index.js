import Home from '@/pages/home';
import Mine from '@/pages/mine';
import Friend from '@/pages/friend';
import Download from '@/pages//download';

const routes = [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/my',
    component: Mine
}, {
    path: '/friend',
    component: Friend
},{
    path:'/download',
    component: Download
}]

export default routes;