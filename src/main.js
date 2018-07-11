import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import router from './controller/router'
import directive from './controller/directive'
import filter from './controller/filter'
import axios from 'axios'

/*全局配置axios*/
axios.defaults.baseURL = 'https://pizza-app-65e84.firebaseio.com';

// Vue.use(VueRouter);
Vue.use(ElementUi);
// Vue.use(VueResource);

new Vue({
  router,
  directive,
  filter,
  el: '#app',
  render: h => h(App)
});
