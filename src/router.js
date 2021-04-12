import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import AdminPageLayout from './views/AdminPageLayout.vue'

Vue.use(Router)

const requireAuth = () => (to, from, next) => {
    let act = sessionStorage.getItem('act');
    let usrif = sessionStorage.getItem('usrif');

    if (act && usrif) {
        return next();
    } else {
        sessionStorage.clear();
        return next('/');
    }
};

const rejectAuthUser = (to, from, next) => {
    let token = localStorage.getItem("access_token")

    if (token !== null) {
        alert("이미 로그인을 하였습니다.")
        next("/dashboard")
    } else {
        next()
    }
}

const onlyAuthUser = (to, from, next) => {
    let token = localStorage.getItem("access_token")

    if (store.state.isLogin === false && token === null) {
        alert("로그인이 필요한 기능입니다.")
        next("/login")
    } else {
        next()
    }
}

const Login = () =>
    import ("./components/Login");
const DashBoard = () =>
    import ("./components/DashBoard");
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
            name: 'DashBoard',
            beforeEnter: onlyAuthUser,
            component: DashBoard
        },
        {
            path: '/account',
            name: 'Account',
            beforeEnter: onlyAuthUser,
            component: Account
        },
        {
            path: '/admin',
            name: 'Admin',
            beforeEnter: onlyAuthUser,
            component: Admin
        },
        {
            path: '/login',
            name: 'Login',
            beforeEnter: rejectAuthUser,
            component: Login
        },
    ]
}, ]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})