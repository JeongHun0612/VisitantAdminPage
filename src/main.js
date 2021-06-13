import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import moment from "moment";
import vueMoment from "vue-moment";

import 'chart.js'
import 'hchs-vue-charts'
import vuetify from "./plugins/vuetify";

Vue.use(vueMoment, moment);

Vue.use(window.VueCharts)

Vue.prototype.$Axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    beforeCreate() {
        // 세로고침 리셋 방지
        this.$store.dispatch("getUserInfo");
    },
    vuetify,
    render: (h) => h(App),
}).$mount("#app");