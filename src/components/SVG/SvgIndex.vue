<template>
    <div class="com-min-box" >
        <nav-head :head-title="navHeadText"></nav-head>
        <div class="every-one">
            <div class="sui-head">
                <div class="sui-list-head">SVG入门</div>
                <div class="sui-date">
                    <span>日期:2018/9/13</span>
                </div>
            </div>
            <div class="sui-list-content">
                SVG全称为“可缩放矢量图形”，它的名字暗示着它本身的特点。SVG让我们可以将一个图形从100%放大到1000%并且完全不失真。SVG是一个基于XML并可以在SVG对象中描述不同形状和路径的文件。每一个形状和路径都由一系列的点、位置、长度、半径，等等的来组成。如果你曾经使用过任何的矢量图软件 (像 Adobe Illustrator 或 Corel Draw)，你能将你创建的矢量图轻松地输出为SVG文件。著作权归作者所有。
                商业转载请联系作者获得授权,非商业转载请注明出处。
            </div>

        </div>
        <div class="every-one"></div>
        <div class="every-one"></div>
        <div class="every-one"></div>
        <div class="every-one"></div>
        <div class="every-one"></div>
        <div class="every-one"></div>
        <div class="every-one"></div>
        <div class="every-one"></div>
        <el-pagination
                class="com-page"
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
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
            navHead
        },
        methods:{
            goWriteList(){
                this.$router.push("/WriteList")
            },
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>
    .every-one{
        position: relative;
        min-height: 100px;
        border-bottom: 1px solid #ccc;
        border-top:1px solid #ccc;
        margin: 0 auto 20px;
        background: #fff;
        max-width: 1000px;
    }
    .every-one:hover{
        border-left: 10px solid #29B4F0;
    }
    .sui-head{
        border-bottom: 1px dashed #ddd;
        padding-bottom: 10px;
    }
    .sui-list-head{
        text-align: left;
        color: #29B4F0;
        font-size: 24px;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 10px;
        height:24px;
        line-height: 24px;
    }
    .sui-date{
        position: absolute;
        right:20px;
        top:10px;
        text-align: left;
        font-size: 12px;
        color: #ccc;
        height:24px;
        line-height: 24px;
    }
    .sui-list-content{
        padding: 10px;
        font-size: 14px;
        color: rgb(64, 64, 64);
        text-align:justify;
        text-align: left;
    }
</style>
