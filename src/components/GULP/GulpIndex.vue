<template>
    <div class="com-min-box" >
        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>

        <div class="write-list-box" ref="write">
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">gulp 构建多页面项目</div>
                    <div class="write-date">
                        <span>日期:2018/10/25</span>
                    </div>
                </div>
                <div class="write-list-content">
                    解决不能用框架,纯HTML的简单gulp项目工程,实现js,css,image,html的压缩
                    以及本地起个服务器实现实时刷新等功能，以及less的编译。
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPageone()">阅读全文</el-button>
            </div>
        </div>
        <el-pagination
                class="com-page"
                background
                layout="prev, pager, next"
                :total="pageTotal"
                @current-change = currentChange>
        </el-pagination>
    </div>
</template>

<script>
    import goTop from "./../common/GoTop.vue";
    import navHead from './../common/nav-head.vue'
    export default {
        name: 'vue-plugin-index',
        data () {
            return {
                navHeadText:"gulp webpack 构建工具",
                pageTotal:null,
                currentPage:1

            }
        },
        created () {

        },
        mounted () {
            //获取列表的数量，计算分页的总数
            this.pageTotal = this.$refs.write.children.length;
            this.showDomPage()
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
            currentChange(val){
                this.currentPage = val;
                //让竖直滚动到顶部
                document.documentElement.scrollTop = 0;
                this.showDomPage();
            },
            //分页dom显示隐藏
            showDomPage(){
                let len = this.$refs.write.children.length;
                let startPage = (this.currentPage -1)*10+1;
                let totalPage = Math.ceil(this.pageTotal/10);
                let endPage;
                if(this.currentPage<totalPage){
                    endPage = this.currentPage*10;
                }else{
                    endPage = this.pageTotal;
                };
                for(let i = 0;i< len;i++){
                    if(i>startPage-2 && i<endPage){
                        this.$refs.write.children[i].style='display:block'
                    }else{
                        this.$refs.write.children[i].style='display:none'
                    }

                };
            },
            goPageone(){
                this.$router.push("/Gulp/GulpOne")
            },
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>
</style>
