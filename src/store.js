import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        isLogin: false,
        isLoginError: false,
        isLoginErrorMessage: '',

        visitorTable: [],
    },

    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },

        loginError(state, payload) {
            state.isLogin = false
            state.isLoginError = true
            state.isLoginErrorMessage = payload
        },

        logout(state) {
            state.isLogin = false
            state.isLoginError = false
            state.userInfo = null
        },
        setVisitorTable(state, payload) {
            state.visitorTable = payload
        }
    },
    actions: {
        login({ commit, dispatch }, loginObj) {
            axios.post("api/login", loginObj)
                .then(res => {
                    if (res.data.status == 400) {
                        commit("loginError", res.data.message)
                    } else {
                        // 성공 시 token 생성
                        let token = res.data.token
                        localStorage.setItem("access_token", token)

                        dispatch('getUserInfo')
                        router.push({ name: "DashBoard" })
                    }
                }).catch((err) => {
                    console.log(err)
                })
        },

        logout({ commit }) {
            localStorage.clear()
            commit("logout")
            router.push({ name: "Login" })
        },

        getUserInfo({ commit }) {
            // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
            let token = localStorage.getItem("access_token")
            let config = {
                headers: {
                    "access-token": token
                }
            }
            if (token != null) {
                axios.get("api/login", config)
                    .then(res => {
                        let userInfo = {
                            id: res.data.id,
                            name: res.data.name,
                            email: res.data.email
                        }
                        commit('loginSuccess', userInfo)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },

        getVisitorTable({ commit }, tableData) {
            if (!tableData) {
                axios.get("api/visitor")
                    .then((res) => {
                        commit('setVisitorTable', res.data)
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                let idArray = []
                idArray.push(tableData[0].id, tableData[tableData.length - 1].id)

                axios.get(`api/visitor?idx=${idArray}`)
                    .then((res) => {
                        commit('setVisitorTable', res.data)
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    }
})