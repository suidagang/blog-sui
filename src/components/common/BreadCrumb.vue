<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/WriteList' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: twoRouter}">{{twoTitle}}</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: 'vue',
        data () {
            return {


            }
        },
        props:{
            twoTitle:{
                type:String,
                default:'',
            },
            twoRouter:{
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

</style>
