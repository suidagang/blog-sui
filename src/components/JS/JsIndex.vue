<template>
    <div class="com-min-box" >
        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back()" @home="home"></nav-head>

        <div class="write-list-box" ref="write">
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">call、apply和bind的理解</div>
                    <div class="write-date">
                        <span>日期:2018/10/10</span>
                    </div>
                </div>
                <div class="write-list-content">
                    在JavaScript中，call、apply和bind都是Function对象自带的三个方法，都是为了改变函数体内部 this 的指向。
                    <br/>
                    <span class="two-font">1、apply 、 call 、bind 三者第一个参数都是 this 要指向的对象，也就是想指定的上下文.</span>
                    <br/>
                    <span class="two-font">2、apply 、 call 、bind 三者都可以利用后续参数传参.</span>
                    <br/>
                    <span class="two-font">3、bind 是返回对应 函数，便于稍后调用；apply 、call 则是立即调用 .</span>
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPageone()">阅读全文</el-button>
            </div>
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">DOM 事件捕获阶段和目标阶段和冒泡阶段</div>
                    <div class="write-date">
                        <span>日期:2018/10/29</span>
                    </div>
                </div>
                <div class="write-list-content">
                    W3C规范中定义了三个事件阶段,依次是捕获阶段、目标阶段和冒泡阶段。事件对象会依次完成这些阶段。
                    如果某个阶段不支持或事件对象的传播被终止，那么该阶段就会被跳过。这里先来了解这三个事件阶段的概念:
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPagetwo()">阅读全文</el-button>
            </div>
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">类数组的概念</div>
                    <div class="write-date">
                        <span>日期:2018/10/30</span>
                    </div>
                </div>
                <div class="write-list-content">
                    什么事类数组勒?有哪些是类数组?类数组怎么转成数组?
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPagethree()">阅读全文</el-button>
            </div>
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">数组所以的api</div>
                    <div class="write-date">
                        <span>日期:2018/11/2</span>
                    </div>
                </div>
                <div class="write-list-content">
                    javascript数组的全部api详解
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPagefour()">阅读全文</el-button>
            </div>
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">js闭包详解</div>
                    <div class="write-date">
                        <span>日期:2018/11/6</span>
                    </div>
                </div>
                <div class="write-list-content">
                    js闭包的优缺点，以及闭包使用的场景及注意事项。
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPagefive()">阅读全文</el-button>
            </div>
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">js中this关键字详解</div>
                    <div class="write-date">
                        <span>日期:2018/11/6</span>
                    </div>
                </div>
                <div class="write-list-content">
                    我们要记住：this永远指向函数运行时所在的对象！而不是函数被创建时所在的对象,把 this 出现的场景分为四类，简单的说就是：
                    <p>
                        1、有对象就指向调用对象。
                        2、没调用对象就指向全局对象。
                        3、用new构造就指向新对象
                        4、通过 apply 或 call 或 bind 来改变 this 的所指。
                    </p>

                </div>
                <el-button type="primary" round class="write-read-all" @click="goPagesix()">阅读全文</el-button>
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
    import navHead from './../common/nav-head.vue';
    import './../../less/pageStyle.less';
    export default {
        name: 'svg-index',
        data () {
            return {
                navHeadText:"JS相关文章",
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
            goPageone(){
                this.$router.push("/Js/JsOne")
            },
            goPagetwo(){
                this.$router.push("/Js/JsTwo")
            },
            goPagethree(){
                this.$router.push("/Js/JsThree")
            },
            goPagefour(){
                this.$router.push("/Js/JsFour")
            },
            goPagefive(){
                this.$router.push("/Js/JsFive")
            },
            goPagesix(){
                this.$router.push("/Js/JsSix")
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
            }
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>


</style>
