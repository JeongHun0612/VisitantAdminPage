import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [{ id: "1", name: "song", email: "sjh@gmail.com", password: "123456" }],
        isLogin: false,
        isLoginError: false,
    },

    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },

        loginError(state) {
            state.isLogin = false
            state.isLoginError = true;
        },
        logout(state) {
            state.isLogin = false
            state.isLoginError = false
            state.userInfo = null
        }
    },
    actions: {
        login({ dispatch }, loginObj) {
            axios.post("https://reqres.in/api/login", loginObj)
                .then(res => {
                    console.log(res)
                        // 성공 시 token 생성
                    let token = res.data.token

                    // 토근을 로컬스토리지에 저장
                    localStorage.setItem("access_token", token)
                    dispatch('getMemberInfo')
                }).catch((err) => {
                    console.log(err)
                    commit('loginError')
                })
        },

        logout({ commit }) {
            commit("logout")
            router.push({ name: "Login" })
        },

        getMemberInfo({ commit }) {
            // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
            let token = localStorage.getItem("access_token")

            let config = {
                headers: {
                    "access-token": token
                }
            }
            axios.get("https://reqres.in/api/users/2", config)
                .then(response => {
                    let userInfo = {
                        id: response.data.data.id,
                        first_name: response.data.data.first_name,
                        last_name: response.data.data.last_name
                    }
                    commit('loginSuccess', userInfo)
                    router.push({ name: "DashBoard" })
                })
                .catch(() => {
                    commit('loginError')
                })
        }
    }
})