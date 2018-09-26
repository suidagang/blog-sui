<template>
    <div class="com-min-box" >
        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <p class="page-p-two-index">
                    vue单页面项目开发过程中,首次加载慢,会出现短暂性白屏的问题,这样的问题是需要解决和优化的,不然会影响用户的体验,
                    下面我们就来分析vue首次加载慢的原因,以及解决此问题的一些办法。
                </p>
                <h2 class="h2-title">影响vue首次加载慢的原因分析</h2>
                <p class="page-p-two-index">
                    先通过chrome浏览器 Network + ALL 查看那些文件加载的时间耗时久,从而对这些耗时久的文件做处理,你会发现vender.js或者
                    chunk-vendors.js以及app.js等文件太大,导致首次加载慢。
                </p>
                <h2 class="h3-title">路由懒加载来解决app.js太大的问题</h2>
                <p>
                    可以参考vue-router文档:
                    <a class="a-url" href="https://router.vuejs.org/zh/guide/advanced/lazy-loading.html" target="_blank">vue-router懒加载,</a>
                    修改方案,首先在rouetr.js的文件做如下修改：
                </p>
                <pre v-highlightA>
    <code >
        //路由懒加载方式
        const Home = () => import(/* webpackChunkName: "group-home" */ './views/Home.vue')
        //不用路由懒加载方式
        import Home  from './views/Home.vue'
    </code>
                </pre>
                <p class="page-p-two-index">
                    使用了路由懒加载的方式打包后,路由懒加载能把不同路由对应的组件分割成不同的代码块,
                    然后当路由被访问的时候才加载对应组件,这样就更加高效了.
                </p>
                <h2 class="h3-title">给vue首屏加一个等待动画</h2>
                <p class="page-p-two-index">
                    vue单页面项目首次加载白屏,还可以给首页加载一个过渡动画,让用户知道网页还在加载,避免首次加载白屏的不好体验,
                    从而提高使用的体验。修改方案如下:在index.html文件中做如下修改:
                </p>
                             <pre v-highlightA>
    <code >
        &lt;div id="app"&gt;
            &lt;div id="loader-wrapper"&gt;
                &lt;div id="loader"&gt;&lt;/div&gt;
                &lt;div class="loader-section section-left"&gt;&lt;/div&gt;
                &lt;div class="loader-section section-right"&gt;&lt;/div&gt;
                &lt;div class="load_title"&gt;
                    首页加载中,请耐心等待
                    &lt;br/&gt;
                    &lt;span&gt;V1.3&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    </code>
    <code >
        //样式
        html,
        body,
        #app {
            height: 100%;
            margin: 0px;
            padding: 0px;
        }
        .chromeframe {
            margin: 0.2em 0;
            background: #ccc;
            color: #000;
            padding: 0.2em 0;
        }
        #loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999999;
        }
        #loader {
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            width: 150px;
            height: 150px;
            margin: -75px 0 0 -75px;
            border-radius: 50%;
            border: 3px solid transparent;
            /* COLOR 1 */
            border-top-color: #FFF;
            -webkit-animation: spin 2s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -ms-animation: spin 2s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -moz-animation: spin 2s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -o-animation: spin 2s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 2s linear infinite;
            /* Chrome, Firefox 16+, IE 10+, Opera */
            z-index: 1001;
        }
        #loader:before {
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            border: 3px solid transparent;
            /* COLOR 2 */
            border-top-color: #FFF;
            -webkit-animation: spin 3s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -moz-animation: spin 3s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -o-animation: spin 3s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -ms-animation: spin 3s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 3s linear infinite;
            /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        #loader:after {
            content: "";
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #FFF;
            /* COLOR 3 */
            -moz-animation: spin 1.5s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -o-animation: spin 1.5s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -ms-animation: spin 1.5s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            -webkit-animation: spin 1.5s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 1.5s linear infinite;
            /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg);
                /* IE 9 */
                transform: rotate(0deg);
                /* Firefox 16+, IE 10+, Opera */
                }
                100% {
                -webkit-transform: rotate(360deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(360deg);
                /* IE 9 */
                transform: rotate(360deg);
                /* Firefox 16+, IE 10+, Opera */
            }
        }
        @keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg);
                /* IE 9 */
                transform: rotate(0deg);
                /* Firefox 16+, IE 10+, Opera */
                }
                100% {
                -webkit-transform: rotate(360deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(360deg);
                /* IE 9 */
                transform: rotate(360deg);
                /* Firefox 16+, IE 10+, Opera */
            }
        }
        #loader-wrapper .loader-section {
            position: fixed;
            top: 0;
            width: 51%;
            height: 100%;
            background: #7171C6;
            /* Old browsers */
            z-index: 1000;
            -webkit-transform: translateX(0);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateX(0);
            /* IE 9 */
            transform: translateX(0);
            /* Firefox 16+, IE 10+, Opera */
        }
        #loader-wrapper .loader-section.section-left {
            left: 0;
        }
        #loader-wrapper .loader-section.section-right {
            right: 0;
        }
        /* Loaded */
        .loaded #loader-wrapper .loader-section.section-left {
            -webkit-transform: translateX(-100%);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateX(-100%);
            /* IE 9 */
            transform: translateX(-100%);
            /* Firefox 16+, IE 10+, Opera */
            -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
            transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
        }
        .loaded #loader-wrapper .loader-section.section-right {
            -webkit-transform: translateX(100%);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateX(100%);
            /* IE 9 */
            transform: translateX(100%);
            /* Firefox 16+, IE 10+, Opera */
            -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
            transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
        }
        .loaded #loader {
            opacity: 0;
            -webkit-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
        }
        .loaded #loader-wrapper {
            visibility: hidden;
            -webkit-transform: translateY(-100%);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateY(-100%);
            /* IE 9 */
            transform: translateY(-100%);
            /* Firefox 16+, IE 10+, Opera */
            -webkit-transition: all 0.3s 1s ease-out;
            transition: all 0.3s 1s ease-out;
        }
        /* JavaScript Turned Off */
        .no-js #loader-wrapper {
            display: none;
        }
        .no-js h1 {
            color: #222222;
        }
        #loader-wrapper .load_title {
            font-family: 'Open Sans';
            color: #FFF;
            font-size: 19px;
            width: 100%;
            text-align: center;
            z-index: 9999999999999;
            position: absolute;
            top: 60%;
            opacity: 1;
            line-height: 30px;
        }
        #loader-wrapper .load_title span {
            font-weight: normal;
            font-style: italic;
            font-size: 13px;
            color: #FFF;
            opacity: 0.5;
        }
    </code>
                </pre>
                <h2 class="h2-title">nginx配置解决vue单页面打包文件大,首次加载慢的问题</h2>
                <p class="page-p-two-index">
                    这个博客项目是使用vue-cli 3.0 构建的项目,是放在阿里云ECS服务器的,运用nginx服务器启动的项目,这里就介绍一下nginx如何配置,
                    原因分析,npm run build 文件过大,其中主要是chunk-vender.js文件过大,代码部署到服务器,首次访问加载页面时比较慢
                    ,耗时较久,所以需要优化.首次配置nginx.config文件:
                                 <pre v-highlightA>
    <code >
        http {
            gzip on; #开启或关闭gzip on off
            gzip_disable "msie6"; #不使用gzip IE6
            gzip_min_length 100k; #gzip压缩最小文件大小，超出进行压缩（自行调节）
            gzip_buffers 4 16k; #buffer 不用修改
            gzip_comp_level 3; #压缩级别:1-10，数字越大压缩的越好，时间也越长
            gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png; #  压缩文件类型
            gzip_vary off;  #跟Squid等缓存服务有关，on的话会在Header里增加 "Vary: Accept-Encoding"
        }
    </code>
                </pre>
                    配置完重启Nginx,然后vue配置(vue-cli 3.0),第一步:npm i --save compression-webpack-plugin,
                    然后修改vue-config.js文件,如下:
                <pre v-highlightA>
    <code >
        const path = require('path')
        const CompressionWebpackPlugin = require('compression-webpack-plugin')
        const productionGzipExtensions = ['js', 'css']
        const isProduction = process.env.NODE_ENV === 'production'

        module.exports = {
            outputDir:process.env.outputDir,
            // 基本路径
            baseUrl:process.env.NODE_ENV == "development"?'/':'/blog/',
            configureWebpack: config => {
                if (isProduction) {
                    config.plugins.push(new CompressionWebpackPlugin({
                            algorithm: 'gzip',
                            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                            threshold: 10240,
                            minRatio: 0.8
                        })
                    )
                }
            },
            // 第三方插件配置
            pluginOptions: {

            }
        }
    </code>
                </pre>
                然后就完成了压缩功能。
                </p>
                <h2 class="h2-title">提取css到外部,减小app.css体积</h2>
                <p class="page-p-two-index">
                    在/src/main.js中，前端框架的CSS引用，都可去除，并改为在/index.html中引用其CDN版本。
                    <br>
                    <span style="margin-left: 42px">
                        1. 去除/src/main.js中的CSS文件import，改为在开发环境下require
                    </span>
                <pre v-highlightA>
    <code >
        // import 'iview/dist/styles/iview.css
        if (process.env.NODE_ENV === 'development') {
            require('mint-ui/lib/style.css')
        }
    </code>
                </pre>
                <span style="margin-left: 42px">2. 在/index.html中，引入cdn文件</span>
                <pre v-highlightA>
    <code >
        &lt;head&gt;
            &lt;link href="https://cdn.bootcss.com/iview/2.6.0/styles/iview.css" rel="stylesheet"&gt;
            &lt;title&gt;app&lt;/title&gt;
        &lt;/head&gt;
    </code>
                </pre>
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
                navHeadText:"解决vue单页面首次加载慢",
                twoTitle:"vue2.0",
                twoRouter:"/vue/VueIndex",
                pageTitle:"解决vue单页面首次加载慢",
                pageDate:"2018/9/25",
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
