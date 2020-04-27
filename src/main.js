import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ` + token
}

//Interceptor for 401 errors (JWT Expired or failed)
Axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status == 401) {
        return new Promise((resolve, reject) => {
            reject(error);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.push({ name: 'Login' });
        });
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')