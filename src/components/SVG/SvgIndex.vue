<template>
    <div class="com-min-box" >
        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back()" @home="home"></nav-head>

        <div class="write-list-box">
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">SVG入门</div>
                    <div class="write-date">
                        <span>日期:2018/9/13</span>
                    </div>
                </div>
                <div class="write-list-content">
                    SVG全称为“可缩放矢量图形”，它的名字暗示着它本身的特点。SVG让我们可以将一个图形从100%放大到1000%并且完全不失真。SVG是一个基于XML并可以在SVG对象中描述不同形状和路径的文件。每一个形状和路径都由一系列的点、位置、长度、半径，等等的来组成。如果你曾经使用过任何的矢量图软件 (像 Adobe Illustrator 或 Corel Draw)，你能将你创建的矢量图轻松地输出为SVG文件。著作权归作者所有。
                    商业转载请联系作者获得授权,非商业转载请注明出处。
                </div>
                <el-button type="primary" round class="write-read-all">阅读全文</el-button>
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
