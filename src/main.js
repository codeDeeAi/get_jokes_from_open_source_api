import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Import common JS for Apis like notification,callApi etc
import common from './common'

// Use Common Js
Vue.mixin(common)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')