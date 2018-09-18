<template>
    <div class="com-min-box" >
        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back()" @home="home"></nav-head>

        <div class="write-list-box">
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-router 跳转时加动画</div>
                    <div class="write-date">
                        <span>日期:2018/9/18</span>
                    </div>
                </div>
                <div class="write-list-content">
                    在开发过程中,想给页面切换路由的时候做一些效果，提高用户的体验。有两种效果:
                    <br/>
                    <span class="two-font">1、路由前进和后退的效果都是一样.</span>
                    <br/>
                    <span class="two-font">2、路由前进后退的效果不一样.</span>
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPageone()">阅读全文</el-button>
            </div>
            <div class="every-write-list"></div>
            <div class="every-write-list"></div>
            <div class="every-write-list"></div>
            <div class="every-write-list"></div>
            <div class="every-write-list"></div>
            <div class="every-write-list"></div>
            <div class="every-write-list"></div>
            <div class="every-write-list"></div>
        </div>
        <el-pagination
                class="com-page"
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    import goTop from "./../common/GoTop.vue";
    import navHead from './../common/nav-head.vue'
    export default {
        name: 'svg-index',
        data () {
            return {
                navHeadText:"svg相关文章"

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
            goTop
        },
        methods:{
            back(){
                this.$router.push("/WriteList")
            },
            goPageone(){
                this.$router.push("/VuePageOne")
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
