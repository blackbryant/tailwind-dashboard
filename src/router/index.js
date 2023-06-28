import {createRouter,createWebHistory} from 'vue-router'
import dashboard from '../page/master/main'
import home from '../page/home'
import profile from '../page/master/profile'

const routes =[
    {
        name:'index',
        path:'/',
        component:dashboard
    },
    {
        name:'home',
        path:'/home',
        component:home
    },
    {
        name:'dashboard',
        path:'/profile',
        component:profile
    }
    
]

function Router(){
    const router = new createRouter({
        mode:'hash',
        history: createWebHistory(),
        routes

    });
    return router ;
}
//router.replace({ path: '*', redirect: '/' })
const router = Router();
export default router;

