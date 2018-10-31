import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "group-home" */ './views/Home.vue')
const WriteList = () => import(/* webpackChunkName: "group-list" */ './views/WriteList.vue')

//VUE2.0相关文章
const VueIndex = () => import(/* webpackChunkName: "group-vue" */ './components/VUE2.0/VueIndex.vue')
const VuePageOne = () => import(/* webpackChunkName: "group-vue" */ './components/VUE2.0/SUBPAGE/VuePageOne.vue')
const VuePageTwo = () => import(/* webpackChunkName: "group-vue" */ './components/VUE2.0/SUBPAGE/VuePageTwo.vue')
const vue = () => import(/* webpackChunkName: "group-vue" */ './components/VUE2.0/VueCom.vue')
//SVG相关文章
const Svg = () => import(/* webpackChunkName: "group-svg" */ './components/SVG/Svg.vue')
const SvgIndex = () => import(/* webpackChunkName: "group-svg" */ './components/SVG/SvgIndex.vue')
//greensock相关文章
const GreenSock = () => import(/* webpackChunkName: "group-greensock" */ './components/GREENSOCK/GreenSock.vue')
const GreenSockIndex = () => import(/* webpackChunkName: "group-greensock" */ './components/GREENSOCK/GreenSockIndex.vue')
//html相关文章
const Html = () => import(/* webpackChunkName: "group-html" */ './components/HTML/Html.vue')
const HtmlIndex = () => import(/* webpackChunkName: "group-html" */ './components/HTML/HtmlIndex.vue')
//js相关文章
const Js = () => import(/* webpackChunkName: "group-js" */ './components/JS/Js.vue')
const JsIndex = () => import(/* webpackChunkName: "group-js" */ './components/JS/JsIndex.vue')
const JsOne = () => import(/* webpackChunkName: "group-js" */ './components/JS/SUBPAGE/JsOne.vue')
const JsTwo = () => import(/* webpackChunkName: "group-js" */ './components/JS/SUBPAGE/JsTwo.vue')
const JsThree = () => import(/* webpackChunkName: "group-js" */ './components/JS/SUBPAGE/JsThree.vue')

//css相关文章
const Css = () => import(/* webpackChunkName: "group-css" */ './components/CSS/Css.vue')
const CssIndex = () => import(/* webpackChunkName: "group-css" */ './components/CSS/CssIndex.vue')
//node相关文章
const Node = () => import(/* webpackChunkName: "group-node" */ './components/NODE/Node.vue')
const NodeIndex = () => import(/* webpackChunkName: "group-node" */ './components/NODE/NodeIndex.vue')
//express相关文章
const Express = () => import(/* webpackChunkName: "group-express" */ './components/EXPRESS/Express.vue')
const ExpressIndex = () => import(/* webpackChunkName: "group-express" */ './components/EXPRESS/ExpressIndex.vue')
//mongodb相关文章
const Mongodb = () => import(/* webpackChunkName: "group-mongodb" */ './components/MONGODB/Mongodb.vue')
const MongodbIndex = () => import(/* webpackChunkName: "group-mongodb" */ './components/MONGODB/MongodbIndex.vue')
//vue插件相关文章
const VuePlugin = () => import(/* webpackChunkName: "group-vueplugin" */ './components/VUEPLUGIN/VuePlugin.vue')
const VuePluginIndex = () => import(/* webpackChunkName: "group-vueplugin" */ './components/VUEPLUGIN/VuePluginIndex.vue')
//gulp webpack相关
const Gulp = () => import(/* webpackChunkName: "group-gulp" */ './components/GULP/Gulp.vue')
const GulpIndex = () => import(/* webpackChunkName: "group-gulp" */ './components/GULP/GulpIndex.vue')
const GulpOne = () => import(/* webpackChunkName: "group-gulp" */ './components/GULP/SUBPAGE/GulpOne.vue')
const GulpTwo = () => import(/* webpackChunkName: "group-gulp" */ './components/GULP/SUBPAGE/GulpTwo.vue')


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
      path: '/Mongodb',
      name: 'Mongodb专栏公共页',
      component: Mongodb,
      children: [
        {
          path: 'MongodbIndex',
          name: 'mongodb文章首页',
          component: MongodbIndex
        },
      ]
    },
    {
      path: '/VuePlugin',
      name: 'VuePlugin专栏公共页',
      component: VuePlugin,
      children: [
        {
          path: 'VuePluginIndex',
          name: 'vue插件文章首页',
          component: VuePluginIndex
        },
      ]
    },
    {
      path: '/Gulp',
      name: 'gulp webpack 项目构建相关',
      component: Gulp,
      children: [
        {
          path: 'GulpIndex',
          name: 'ulp webpack 项目构建首页',
          component: GulpIndex
        },
        {
          path:"GulpOne",
          name:"gulp 构建多页面项目",
          component:GulpOne
        },
        {
          path:"GulpTwo",
          name:"webpack 构建多页面项目",
          component:GulpTwo
        }
      ]
    },
    {
      path: '/Express',
      name: 'express专栏公共页',
      component: Express,
      children: [
        {
          path: 'ExpressIndex',
          name: 'express文章首页',
          component: ExpressIndex
        },
      ]
    },
    {
      path: '/Node',
      name: 'node专栏公共页',
      component: Node,
      children: [
        {
          path: 'NodeIndex',
          name: 'node文章首页',
          component: NodeIndex
        },
      ]
    },
    {
      path: '/Html',
      name: 'html专栏公共页',
      component: Html,
      children: [
        {
          path: 'HtmlIndex',
          name: 'html文章首页',
          component: HtmlIndex
        },
      ]
    },
    {
      path: '/Js',
      name: 'js专栏公共页',
      component: Js,
      children: [
        {
          path: 'JsIndex',
          name: 'js文章首页',
          component: JsIndex
        },
        {
          path:"JsOne",
          name:"call,aplly,bind",
          component:JsOne
        },
        {
          path:"JsTwo",
          name:"dom 捕获和冒泡事件",
          component:JsTwo
        },
        {
          path:"JsThree",
          name:"类数组",
          component:JsThree
        }
      ]
    },
    {
      path: '/Css',
      name: 'css专栏公共页',
      component: Css,
      children: [
        {
          path: 'CssIndex',
          name: 'CSS文章首页',
          component: CssIndex
        },
      ]
    },
    {
      path: '/Svg',
      name: 'SVG专栏公共页',
      component: Svg,
      children: [
        {
          path: 'SvgIndex',
          name: 'svg文章首页',
          component: SvgIndex
        },
      ]
    },
    {
      path: '/GreenSock',
      name: 'GreenSock专栏公共页',
      component: GreenSock,
      children: [
        {
          path: 'GreenSockIndex',
          name: 'GreenSock文章首页',
          component: GreenSockIndex
        },
      ]
    },
    {
      path: '/vue',
      name: 'vue专栏公共页',
      component: vue,
      children: [
        {
          path: 'VueIndex',
          name: 'vue文章首页',
          component: VueIndex
        },
        {
          path: 'VuePageOne',
          name: 'vue-router效果',
          component: VuePageOne
        },{
          path: 'VuePageTwo',
          name: 'vue单页面首次加载慢',
          component: VuePageTwo
        }
      ]
    }
  ]
})
