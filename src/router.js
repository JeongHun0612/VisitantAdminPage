import Vue from 'vue'
import Router from 'vue-router'
import AdminPageLayout from './views/AdminPageLayout.vue'

Vue.use(Router)

const Login = () =>
    import ("./components/Login");
const Dashboard = () =>
    import ("./components/Dashboard");
const Account = () =>
    import ("./components/Account");
const Admin = () =>
    import ("./components/Admin");

const routes = [{
        path: '/',
        component: AdminPageLayout,
        redirect: '/dashboard',
        children: [{
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/account',
                name: 'Account',
                component: Account
            },
            {
                path: '/admin',
                name: 'Admin',
                component: Admin
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },

]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})