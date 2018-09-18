<template>
    <div class="nav-head">
        <el-button class="back-btn" @click="back()">返回</el-button>
        <el-button class="home-btn" @click="list()">列表主页</el-button>
        <vue-typer class="head" :repeat='1' erase-style='backspace'   :text=headTitle></vue-typer>
    </div>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    export default {
        name: 'vue-head',
        data () {
            return {


            }
        },
        props:{
            headTitle:{
                type:String,
                default:'',
            }
        },
        created () {

        },
        mounted () {

        },
        computed: {

        },
        components: {
            VueTyper
        },
        methods:{
            back () {
                this.$emit('back');
            },
            list () {
                this.$emit('home');
            }
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>
    .back-btn{
        position: absolute;
        top:10px;
        left:30px;
        z-index: 99;
    }
    .home-btn{
        position: absolute;
        top:10px;
        left:110px;
        z-index: 99;
    }

    .head{
        font-family: '微软雅黑', 'Helvetica Neue', "STXiHei", 'Source Sans Pro', Helvetica, Arial, sans-serif;
        position: absolute;
        top:0;
        left:0;
        height:60px;
        line-height: 60px;
        text-align: center;
        width:100%;
        font-size: 30px;
        font-weight: bold;
    }
    .nav-head{
        position: relative;
        height:60px;
        width:100%;
        line-height: 60px;
        margin-bottom: 30px;
    }
</style>
