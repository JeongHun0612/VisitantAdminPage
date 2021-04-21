import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import vuetify from './plugins/vuetify';

Vue.use(Chartkick.use(Chart))

Vue.prototype.$Axios = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    beforeCreate() {
        this.$store.dispatch("getUserInfo")
    },
    vuetify,
    render: h => h(App)
}).$mount('#app')