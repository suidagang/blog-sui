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
//文章列表页样式
import "./less/writeList.less";

Vue.config.productionTip = false;

// highlight.js代码高亮指令
import Highlight from './assets/utils/hignlight';

Vue.use(Highlight);



router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {isLoading: true})
  NProgress.start(); // 开始进度条
  next();
  NProgress.done();

});

router.afterEach(function (to) {
  setTimeout(function(){
    store.commit('updateLoadingStatus', {isLoading: false})
  },300)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
