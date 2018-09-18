import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "group-home" */ './views/Home.vue')
const WriteList = () => import(/* webpackChunkName: "group-list" */ './views/WriteList.vue')
const CssIndex = () => import(/* webpackChunkName: "group-css" */ './components/CSS/CssIndex.vue')
const ExpressIndex = () => import(/* webpackChunkName: "group-express" */ './components/EXPRESS/ExpressIndex.vue')
const GreenSockIndex = () => import(/* webpackChunkName: "group-greensock" */ './components/GREENSOCK/GreenSockIndex.vue')
const HtmlIndex = () => import(/* webpackChunkName: "group-html" */ './components/HTML/HtmlIndex.vue')
const JsIndex = () => import(/* webpackChunkName: "group-js" */ './components/JS/JsIndex.vue')
const MongodbIndex = () => import(/* webpackChunkName: "group-mongodb" */ './components/MONGODB/MongodbIndex.vue')
const NodeIndex = () => import(/* webpackChunkName: "group-node" */ './components/NODE/NodeIndex.vue')
const SvgIndex = () => import(/* webpackChunkName: "group-svg" */ './components/SVG/SvgIndex.vue')
const VueIndex = () => import(/* webpackChunkName: "group-vue" */ './components/VUE2.0/VueIndex.vue')
const VuePluginIndex = () => import(/* webpackChunkName: "group-vueplugin" */ './components/VUEPLUGIN/VuePluginIndex.vue')
const VuePageOne = () => import(/* webpackChunkName: "group-vue" */ './components/VUE2.0/SUBPAGE/VuePageOne.vue')
//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '博客首页',
      component: Home
    },
    {
      path: '/WriteList',
      name: '文章列表首页',
      component: WriteList
    },
    {
      path: '/CssIndex',
      name: 'CSS文章首页',
      component: CssIndex
    },
    {
      path: '/ExpressIndex',
      name: 'express文章首页',
      component: ExpressIndex
    },
    {
      path: '/GreenSockIndex',
      name: 'GreenSock文章首页',
      component: GreenSockIndex
    },
    {
      path: '/HtmlIndex',
      name: 'html文章首页',
      component: HtmlIndex
    },
    {
      path: '/JsIndex',
      name: 'js文章首页',
      component: JsIndex
    },
    {
      path: '/MongodbIndex',
      name: 'mongodb文章首页',
      component: MongodbIndex
    },
    {
      path: '/NodeIndex',
      name: 'node文章首页',
      component: NodeIndex
    },
    {
      path: '/SvgIndex',
      name: 'svg文章首页',
      component: SvgIndex
    },
    {
      path: '/VueIndex',
      name: 'vue文章首页',
      component: VueIndex
    },
    {
      path: '/VuePluginIndex',
      name: 'vue插件文章首页',
      component: VuePluginIndex
    },{
      path: '/VuePageOne',
      name: 'vue-router效果',
      component: VuePageOne
    },
  ]
})
