<template>
    <div class="com-min-box" >
        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back()" @home="home"></nav-head>

        <div class="write-list-box" ref="write">
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue项目初始化动画</div>
                    <div class="write-date">
                        <span>日期:2018/9/25</span>
                    </div>
                </div>
                <div class="write-list-content">
                    vue单页面项目开发过程中,首次加载慢,会出现短暂性白屏的问题,这样的问题是需要解决和优化的,不然会影响用户的体验,
                    下面我们就来分析vue首次加载慢的原因,以及解决此问题的一些办法。
                </div>
                <el-button type="primary" round class="write-read-all" @click="goPagetwo()">阅读全文</el-button>
            </div>
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-3</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-4</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-5</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-6</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-7</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-8</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-9</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-1-10</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-2-1</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-2-2</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-2-3</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-2-4</div>
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
            <div class="every-write-list">
                <div class="write-cover-box"></div>
                <div class="write-head-box">
                    <div class="write-list-head">vue-2-5</div>
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
        name: 'svg-index',
        data () {
            return {
                navHeadText:"svg相关文章",
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
                this.$router.push("/vue/VuePageOne")
            },
            goPagetwo(){
                this.$router.push("/vue/VuePageTwo")
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
