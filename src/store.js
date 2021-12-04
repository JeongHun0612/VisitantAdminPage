import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        faceInfoTable: [],
        visitorListTable: [],
        userListTable: [],

        isRegisterError: false,
        isRegisterErrorMessage: "",

        userInfo: null,
        userFirstName: null,
        isLogin: false,
        isLoginError: false,
        isLoginErrorMessage: "",
    },

    mutations: {
        registerSuccess(state) {
            state.isRegisterError = false;
        },

        registerError(state, payload) {
            state.isRegisterError = true;
            state.isRegisterErrorMessage = payload;
        },

        loginSuccess(state, payload) {
            state.isLogin = true;
            state.isLoginError = false;
            state.userInfo = payload;
            state.userFirstName = state.userInfo.name.slice(0, 1)
        },

        loginError(state, payload) {
            state.isLogin = false;
            state.isLoginError = true;
            state.isLoginErrorMessage = payload;
        },

        logout(state) {
            state.isLogin = false;
            state.isLoginError = false;
            state.userInfo = null;
            state.userFirstName = null;
        },

        setFaceInfoTable(state, payload) {
            state.faceInfoTable = payload;
        },

        setVisitorListTable(state, payload) {
            state.visitorListTable = payload;
        },

        setUserListTable(state, payload) {
            state.userListTable = payload;
        }
    },
    actions: {
        register({ commit }, registerObj) {
            axios.post("api/register", registerObj)
                .then((res) => {
                    if (res.data.status == 400) {
                        commit("registerError", res.data.message)
                    } else {
                        commit("registerSuccess")
                        alert(res.data.message)
                        router.push({ name: "Login" });
                    }
                }).catch((err) => {
                    console.log(err)
                })
        },

        login({ commit }, loginObj) {
            axios
                .post("api/login", loginObj)
                .then((res) => {
                    if (res.data.status == 400) {
                        commit("loginError", res.data.message);
                    } else {
                        // 성공 시 token 생성
                        let token = res.data.token;
                        localStorage.setItem("access_token", token);
                        localStorage.setItem("user_role", res.data.userInfo.role);

                        commit("loginSuccess", res.data.userInfo);
                        router.push({ name: "Account" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        logout({ commit }) {
            localStorage.clear();
            commit("logout");
            router.push({ name: "Login" });
        },

        getUserInfo({ commit }) {
            // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    "access-token": token,
                },
            };
            if (token != null) {
                axios
                    .get("api/login", config)
                    .then((res) => {
                        let userInfo = {
                            id: res.data.id,
                            name: res.data.name,
                            email: res.data.email,
                            role: res.data.role
                        };
                        commit("loginSuccess", userInfo);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                router.push({ name: "Login" });
            }
        },

        getFaceInfoTable({ commit }, tableData) {
            // 전체 FaceInfoTable 요청
            if (!tableData) {
                axios
                    .get("api/faceInfo")
                    .then((res) => {
                        commit("setFaceInfoTable", res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            // 현재 검색한(DatePicker) FaceInfoTable만 요청
            else {
                let idArray = [];
                idArray.push(tableData[0].id, tableData[tableData.length - 1].id);

                axios
                    .get(`api/faceInfo?idx=${idArray}`)
                    .then((res) => {
                        commit("setFaceInfoTable", res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },

        getVisitorListTable({ commit }, tableData) {
            // 전체 VisitorListTable 요청
            if (!tableData) {
                axios
                    .get("api/visitorList")
                    .then((res) => {
                        commit("setVisitorListTable", res.data);
                        console.log(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            // 현재 검색한(DatePicker) VisitorListTable만 요청
            else {
                let idArray = [];
                idArray.push(tableData[0].id, tableData[tableData.length - 1].id);

                axios
                    .get(`api/visitorList?idx=${idArray}`)
                    .then((res) => {
                        commit("setVisitorListTable", res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },

        getUserListTable({ commit }) {
            axios
                .get("api/userList")
                .then((res) => {
                    commit("setUserListTable", res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
});