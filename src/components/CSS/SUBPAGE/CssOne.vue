<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <h2 class="h2-title">第一种loading效果</h2>
                <div class="loading-box">
                    <div class="loading">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <pre v-highlightA>
    <code >
        //css开始
        .loading-box{
            width: 300px;
            height: 200px;
            border: 1px solid #ccc;
            margin: 200px auto;
        }
        .loading{
            position: relative;
            top: 80px;
            left: 120px;
            width: 100px;
            height: 100px;
        }
        .loading i{
            display: inline-block;
            width: 4px;
            height: 35px;
            border-radius: 2px;
            margin: 0 2px;
            background: #0bac84;
        }
        @-webkit-keyframes jump{
            0%{
                -webkit-transform: scale(1);
            }
            50%{
                -webkit-transform: scaleY(0.4);
            }
            100%{
                -webkit-transform: scaleY(1);
            }
        }
        .loading i:nth-child(1){
            -webkit-animation: jump .8s ease-in .1s infinite;
        }
        .loading i:nth-child(2){
            -webkit-animation: jump .8s ease-in .2s infinite;
        }
        .loading i:nth-child(3){
            -webkit-animation: jump .8s ease-in .3s infinite;
        }
        .loading i:nth-child(4){
            -webkit-animation: jump .8s ease-in .4s infinite;
        }
        .loading i:nth-child(5){
            -webkit-animation: jump .8s ease-in .5s infinite;
        }
        //css结束
        //html

        &lt;div class="loading-box"&gt;
            &lt;div class="loading"&gt;
                &lt;i&gt;&lt;/i&gt;
                &lt;i&gt;&lt;/i&gt;
                &lt;i&gt;&lt;/i&gt;
                &lt;i&gt;&lt;/i&gt;
                &lt;i&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    </code>
                </pre>
                <h2 class="h2-title">第二种 loading方式</h2>
                <div class="wrap">
                    <span class="load">Loading</span>
                    <span class="l-1"></span>
                    <span class="l-2"></span>
                    <span class="l-3"></span>
                    <span class="l-4"></span>
                    <span class="l-5"></span>
                    <span class="l-6"></span>
                </div>
                <pre v-highlightA>
    <code >
        .wrap{
            margin: 0 auto;
            width: 300px;
        }
        span{
            display: block;
            margin: 0 auto;
        }

        span[class*='l-']{
            width: 6px;
            height: 6px;
            background: red;
            display: inline-block;
            margin: 50px 2px;
            border-radius: 50%;
            animation: load 4s infinite;
            animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
            -webkit-animation: load 4s infinite;
            -webkit-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
            animation-fill-mode: both;
            -webkit-animation-fill-mode: both;
        }

        @-webkit-keyframes load {
            0%{
                transform: translateX(-30px);
                opacity: 0;
            }
            25%{
                opacity: 1;
            }
            50%{
                transform: translateX(30px);
                opacity: 0;
            }
            100%{
                opacity: 0;
            }
        }
        @keyframes load {
            0%{
                transform: translateX(-30px);
                opacity: 0;
            }
            25%{
                opacity: 1;
            }
            50%{
                transform: translateX(30px);
                opacity: 0;
            }
            100%{
                opacity: 0;
            }
        }
        span.l-1{
            -webkit-animation-delay: 1s;
            animation-delay: 1s;
        }
        span.l-2{
            -webkit-animation-delay: 0.8s;
            animation-delay: 0.8s;
        }
        span.l-3{
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
        }
        span.l-4{
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
        }
        span.l-5{
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
        }
        span.l-6{
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
        }

        &lt;div class="wrap"&gt;
            &lt;span class="load"&gt;Loading &lt;/span&gt;
            &lt;span class="l-1"&gt; &lt;/span&gt;
            &lt;span class="l-2"&gt; &lt;/span&gt;
            &lt;span class="l-3"&gt; &lt;/span&gt;
            &lt;span class="l-4"&gt; &lt;/span&gt;
            &lt;span class="l-5"&gt; &lt;/span&gt;
            &lt;span class="l-6"&gt; &lt;/span&gt;
        &lt;/div&gt;
    </code>
                </pre>
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
                navHeadText:"css loading效果",
                twoTitle:"Css",
                twoRouter:"/Css/CssIndex",
                pageTitle:"css loading效果",
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
                this.$router.push("/Css/CssIndex")
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
    /*第一种开始*/
    .loading-box{
        width: 300px;
        height: 200px;
        margin: 0 auto;
    }
    .loading{
        position: relative;
        top: 80px;
        left: 120px;
        width: 100px;
        height: 100px;
    }
    .loading i{
        display: inline-block;
        width: 6px;
        height: 50px;
        border-radius: 2px;
        margin: 0 2px;
        background: #0bac84;
    }
    @-webkit-keyframes jump{
        0%{
            -webkit-transform: scale(1);
        }
        50%{
            -webkit-transform: scaleY(0.4);
        }
        100%{
            -webkit-transform: scaleY(1);
        }
    }
    .loading i:nth-child(1){
        -webkit-animation: jump 1s ease-in .1s infinite;
    }
    .loading i:nth-child(2){
        -webkit-animation: jump 1s ease-in .2s infinite;
    }
    .loading i:nth-child(3){
        -webkit-animation: jump 1s ease-in .3s infinite;
    }
    .loading i:nth-child(4){
        -webkit-animation: jump 1s ease-in .4s infinite;
    }
    .loading i:nth-child(5){
        -webkit-animation: jump 1s ease-in .5s infinite;
    }
    .loading i:nth-child(6){
        -webkit-animation: jump 1s ease-in .6s infinite;
    }
    .loading i:nth-child(7){
        -webkit-animation: jump 1s ease-in .7s infinite;
    }
    .loading i:nth-child(8){
        -webkit-animation: jump 1s ease-in .8s infinite;
    }
    /*第一种结束*/
    /*第二种开始*/
    .wrap{
        margin: 0 auto;
        width: 300px;
    }
    span{
        display: block;
        margin: 0 auto;
    }

    span[class*='l-']{
        width: 6px;
        height: 6px;
        background: red;
        display: inline-block;
        margin: 50px 2px;
        border-radius: 50%;
        animation: load 4s infinite;
        animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
        -webkit-animation: load 4s infinite;
        -webkit-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
    }

    @-webkit-keyframes load {
        0%{
            transform: translateX(-30px);
            opacity: 0;
        }
        25%{
            opacity: 1;
        }
        50%{
            transform: translateX(30px);
            opacity: 0;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes load {
        0%{
            transform: translateX(-30px);
            opacity: 0;
        }
        25%{
            opacity: 1;
        }
        50%{
            transform: translateX(30px);
            opacity: 0;
        }
        100%{
            opacity: 0;
        }
    }
    span.l-1{
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }
    span.l-2{
        -webkit-animation-delay: 0.8s;
        animation-delay: 0.8s;
    }
    span.l-3{
        -webkit-animation-delay: 0.6s;
        animation-delay: 0.6s;
    }
    span.l-4{
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
    }
    span.l-5{
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
    }
    span.l-6{
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }
    /*第二种结束*/
</style>
