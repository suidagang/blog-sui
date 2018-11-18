<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <p class="page-p-two-index">
                    在实际开发过程中(尤其是移动端项目),想给页面切换路由的时候做一些动画效果来提高用户的体验。一般来说有两种动画效果:
                    1、路由前进和后退的动画效果一样.2、路由前进后退的动画效果不一样。
                </p>
                <h2 class="h2-title">路由前进和后退的动画效果一样</h2>
                <p class="page-p-two-index">
                    可以参考vue官方文档:
                    <a class="a-url" href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank">vue过渡、动画。</a>

                </p>
                <h2 class="h3-title">elment UI 框架 实现路由前进和后退动画一样的效果</h2>
                <p>
                    可以参考element文档:
                    <a class="a-url" href="http://element-cn.eleme.io/#/zh-CN/component/loading" target="_blank">loading加载</a>
                    这里我想讲一下关于element loading 修改动画的方案,首先在app.vue的文件做如下修改：
                </p>
                <pre v-highlightA>
    <code >
        &lt;div id="app" v-loading="loading2"&gt;
            &lt;router-view&gt;&lt;/router-view&gt;
        &lt;/div&gt;
    </code>
                </pre>
                <p>
                    这里想用动态度gif来做为路由切换的动画,但是element 只可自定义加载文案、图标和背景色,也就是说可以做成动态的iconfont,但是没法配置
                    动态图(gif),这里就只能通过样式来修改。值得注意的是修改element样式需要在全局修改，不能在单个vue文件中(scoped)修改.具体修改如下:
                </p>
             <pre v-highlightA>
    <code >
        //原本element的动画做隐藏设置
        .el-loading-spinner .circular{
            width:42px;
            height:42px;
            animation: loading-rotate 2s linear infinite;
            display: none;
        }
        //修改背景,加gif背景
        .el-loading-spinner{
            background: url("../assets/img/mao.gif") no-repeat;
            background-size: 200px 190px;
            width: 200px;
            height:190px;
            position: relative;
            top:50%;
            left:50%;
            margin-left: -100px;
            margin-top: -95px;
        }
    </code>
                </pre>
                <h2 class="h3-title">vue过渡效果实现 路由前进和后退的动画效果一样</h2>
                <p class="page-p-two-index">可以参考:
                    <a class="a-url" href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank">官方文档的过渡效果。</a>
                    首先在app.vue文件中修改,可以参考:<a class="a-url" href="http://www.css88.com/book/css/properties/index.htm" target="_blank">css3的动画效果</a>
                </p>
                             <pre v-highlightA>
    <code >
        &lt;div id="app"&gt;
            &lt;transition name="fade"&gt;
                &lt;router-view&gt;&lt;/router-view&gt;
            &lt;/transition&gt;
        &lt;/div&gt;
    </code>
    <code >
        //样式
        .fade-enter-active, .fade-leave-active {
            transition: all .5s;
        }
        .fade-enter, .fade-leave-to  {
            opacity: 0;
            transform: translateX(50px);
        }
    </code>
                </pre>
                <h2 class="h2-title">路由前进和后退的动画效果不一样</h2>
                <p class="page-p-two-index">
                    移动端想实现路由前进和后退,动画不一样的效果。
                    主要思路,meta对象的index用来定义当前路由的层级,由小到大,由低到高,然后在app.vue文件中监控路由跳转,
                    判断切换页面之间的层级关系,并以此来判断路由前进或者后退.
                                 <pre v-highlightA>
    <code >
        //使用watch 监听$router的变化
        watch: {
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if(to.meta.index > from.meta.index){
                    //设置动画名称
                    this.transitionName = 'slide-left';
                }else{
                    this.transitionName = 'slide-right';
                }
            }
        }
    </code>
                </pre>
                    可以参考博客:<a class="a-url" href="https://blog.csdn.net/qq_33236453/article/details/79110485" target="_blank">前进、回退 不一样的效果。</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import goTop from "./../../common/GoTop.vue";
    import navHead from './../../common/nav-head.vue';
    import breadCrumb  from './../../common/BreadCrumb.vue';
    import pageHead  from './../../common/PageHead.vue';
    import './../../../less/pageStyle.less';
    export default {
        name: 'vue',
        data () {
            return {
                navHeadText:"vue-router 效果",
                twoTitle:"vue2.0",
                twoRouter:"/vue/VueIndex",
                pageTitle:"vue-router 效果",
                pageDate:"2018/9/18",
                input:''
            }
        },
        created () {

        },
        mounted () {

        },
        computed: {

        },
        components: {
            navHead,
            goTop,
            breadCrumb,
            pageHead
        },
        methods:{
            back () {
                this.$router.push("/vue/VueIndex")
            },
            home(){
                this.$router.push("/WriteList")
            },
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>

</style>
