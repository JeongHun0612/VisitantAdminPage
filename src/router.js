import Vue from 'vue'
import Router from 'vue-router'
import AdminPageLayout from './views/AdminPageLayout.vue'

Vue.use(Router)

// login true 상태일때 login page로 넘어가려하는 경우
const alreayLogin = (to, from, next) => {
    let token = localStorage.getItem("access_token")

    if (token !== null) {
        alert("이미 로그인을 하였습니다.")
        next("/dashboard")
    } else {
        next()
    }
}

// login이 true일 경우만
const onlyLoginUser = (to, from, next) => {
    let token = localStorage.getItem("access_token")

    if (token === null) {
        alert("로그인이 필요한 기능입니다.")
        next("/login")
    } else next()
}

// role(권한)이 null이 아닐 경우
const onlyAuthUser = (to, from, next) => {
    let token = localStorage.getItem("access_token")
    let role = localStorage.getItem("user_role")

    if (token === null) {
        alert("로그인이 필요한 기능입니다.")
        next("/login")
    } else {
        if (role === "null" || role === "") {
            alert("권한이 없습니다.")
            next(from)
        } else next()
    }
}

// role(권한)이 super 관리자일 경우
const onlySuperUser = (to, from, next) => {
    let token = localStorage.getItem("access_token")
    let role = localStorage.getItem("user_role")

    if (token === null) {
        alert("로그인이 필요한 기능입니다.")
        next("/login")
    } else {
        if (role === "super") next()
        else {
            alert("권한이 없습니다.")
            next(from)
        }
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
const UserList = () =>
    import ("./components/user_list/UserList");
const Account = () =>
    import ("./components/Account");

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: AdminPageLayout,
        children: [{
                path: '/login',
                name: 'Login',
                beforeEnter: alreayLogin,
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
            {
                path: '/dashBoard',
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
                path: '/userList',
                name: 'UserList',
                beforeEnter: onlySuperUser,
                component: UserList
            },
            {
                path: '/account',
                name: 'Account',
                beforeEnter: onlyLoginUser,
                component: Account
            },
        ]
    }, ]
})