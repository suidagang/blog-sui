<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <h2 class="h2-title">第一种垂直居中办法</h2>
                <div class="box1">
                    <div class="box1-1"></div>
                </div>
                <pre v-highlightA>
    <code >
        //css开始
        .box1{
            position: relative;
            height: 200px;
            width:100%;
            border: 1px solid #ccc;
        }
        .box1-1{
            position: absolute;
            top:50%;
            left:50%;
            width:100px;
            height:100px;
            background: red;
            margin: -50px 0 0 -50px;
        }
        //css结束
        //html

        &lt;div class="box1"&gt;
            &lt;div class="box1-1"&gt;&lt;/div&gt;
        &lt;/div&gt;
    </code>
                </pre>
                <h2 class="h2-title">第二种垂直居中办法</h2>
                <div class="box2">
                    <div class="box2-2"></div>
                </div>
                <pre v-highlightA>
    <code >
        .box2{
            position: relative;
            height: 200px;
            width:100%;
            border: 1px solid #ccc;
        }
        .box2-2{
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom: 0;
            width:100px;
            height:100px;
            background: red;
            margin:auto;
        }

        &lt;div class="box2"&gt;
            &lt;div class="box2-2"&gt;&lt;/div&gt;
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
                navHeadText:"css 竖直居中",
                twoTitle:"Css",
                twoRouter:"/Css/CssIndex",
                pageTitle:"css 竖直居中",
                pageDate:"2018/11/12",
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
   .box1{
       position: relative;
       height: 200px;
       width:100%;
       border: 1px solid #ccc;
       .box1-1{
           position: absolute;
           top:50%;
           left:50%;
           width:100px;
           height:100px;
           background: red;
           margin: -50px 0 0 -50px;
       }
   }
    /*第一种结束*/
    /*第二种开始*/
    .box2{
        position: relative;
        height: 200px;
        width:100%;
        border: 1px solid #ccc;
        .box2-2{
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom: 0;
            width:100px;
            height:100px;
            background: red;
            margin:auto;
        }
    }
    /*第二种结束*/
</style>
