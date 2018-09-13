import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


//引入页头进度条
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
NProgress.configure({ showSpinner: false })// NProgress Configuration

//去除覆盖浏览器默认样式
import "./less/framework.less";
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  NProgress.start(); // 开始进度条
  next();
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
