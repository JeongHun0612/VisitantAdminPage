import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            { title: "Dashboard", icon: "mdi-view-dashboard", link: "/dashboard" },
            { title: "Account", icon: "mdi-account-box", link: "/account" },
            { title: "Admin", icon: "mdi-gavel", link: "/admin" },
        ],
        selectedItem: "",
    },

    mutations: {
        addSelectedItem(state, payload) {
            state.selectedItem = payload;
        }
    },
    actions: {

    }
})