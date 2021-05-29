import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import AdminPageLayout from './views/AdminPageLayout.vue'

Vue.use(Router)

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
const Register = () =>
    import ("./components/Register")
const DashBoard = () =>
    import ("./components/dashboard/DashBoard");
const FaceInfo = () =>
    import ("./components/face_info/FaceInfo");
const VisitorList = () =>
    import ("./components/visitor_list/VisitorList");
const Account = () =>
    import ("./components/Account");

const routes = [{
    path: '/',
    component: AdminPageLayout,
    redirect: '/login',
    children: [{
            path: '/login',
            name: 'Login',
            beforeEnter: rejectAuthUser,
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'DashBoard',
            beforeEnter: onlyAuthUser,
            component: DashBoard
        },
        {
            path: '/faceInfo',
            name: 'FaceInfo',
            beforeEnter: onlyAuthUser,
            component: FaceInfo
        },
        {
            path: '/visitorList',
            name: 'VisitorList',
            beforeEnter: onlyAuthUser,
            component: VisitorList
        },
        {
            path: '/account',
            name: 'Account',
            beforeEnter: onlyAuthUser,
            component: Account
        }
    ]
}, ]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})