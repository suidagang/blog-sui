<template>
    <div class="page-head">
        <div class="page-title">{{pageTitle}}</div>
        <div class="page-date">
            <span>日期 : {{pageDate}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue',
        data () {
            return {


            }
        },
        props:{
            pageTitle:{
                type:String,
                default:'',
            },
            pageDate:{
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

        },
        methods:{

        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>
    .page-head{
        min-height: 60px;
        text-align: left;
        overflow: hidden;
        margin: 15px;
        border-bottom: 1px dashed #ddd;
    }
    .page-title{
        display: inline-block;
        color: #fff;
        font-size: 18px;
        margin-bottom: 5px;
        background: #3eb8ff;
        min-width:60px;
        height:30px;
        line-height: 30px;
        padding: 0 10px;
        border-radius: 15px;

    }
    .page-date{
        font-size: 12px;
        color: #ccc;
        height:24px;
        line-height: 24px;
    }
</style>
