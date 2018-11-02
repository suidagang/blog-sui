<template>
    <div class="com-box" >
        <rain></rain>
        <div class="home-box">
            <div class="blog-head">
                <vue-typer class="nav-text" :repeat='1' erase-style='backspace'   text='眭刚的博客'></vue-typer>
            </div>
            <div class="svg-container" id="boxContainer">
                <svg id="boxLoader" width="70px" height="70px"  preserveAspectRatio="none">
                    <rect x="0" fill="#00EE00" width="70px" height="70px" />
                </svg>
                <svg id="base" width="210px" height="210px" viewBox="0 0 105 105" preserveAspectRatio="none">
                    <line stroke-width="1.5" fill="none" stroke="purple" stroke-miterlimit="10" x1="0" y1="52.5" x2="105" y2="52.5" />
                </svg>
            </div>
            <el-button type="primary" class="sui-btn ripple" @click="goList()">进入</el-button>
        </div>
    </div>
</template>

<script>
    import TweenLite from "gsap";
    import { VueTyper } from 'vue-typer';
    import rain from "./../components/common/Rain.vue";
    export default {
        name: 'home',
        data () {
            return {


            }
        },
        created () {

        },
        mounted () {
            const sm3 = require('sm3');
//            console.log(sm3("123456"));
            this.startSVG();
        },
        computed: {

        },
        components: {
            VueTyper,
            rain
        },
        methods:{
            startSVG(){
                TweenMax.set(['#boxLoader', '#base'], {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50
                });
                TweenMax.set(['#boxContainer'], {
                    position: 'absolute',
                    top:'50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50
                });
                var tl = new TimelineMax({
                    repeat: -1
                });
                //运动倍数
                tl.timeScale(1.2);
                //移动到起点位置
                tl.set('#boxLoader', {
                            transformOrigin: '0% 100%',
                            left: '+=70',
                            top: '-=' + 70 / 2
                        })
                        //方块左旋转90度
                        .to('#boxLoader', 1, {
                            rotation: '-=90',
                            ease: Power4.easeInOut
                        })
                        //旋转过后设置位置，以左下角为中心点
                        .set('#boxLoader', {
                            transformOrigin: '0% 100%',
                            left: '-=70',
                            rotation: 0
                        })
                        //再次旋转
                        .to('#boxLoader', 1, {
                            rotation: '-=90',
                            ease: Power4.easeInOut
                        })
                        //再次设置位置
                        .set('#boxLoader', {
                            transformOrigin: '0% 100%',
                            left: '-=70',
                            rotation: 0
                        })
                        //大转
                        .to('#boxLoader', 1, {
                            rotation: '-=270',
                            ease: Power4.easeInOut
                        })
                        //外层盒子转动180度
                        .to('#boxContainer', 1, {
                            rotation: '+=180',
                            ease: Back.easeInOut
                        }, '-=1')
                        //再次设置方块的位置
                        .set('#boxLoader', {
                            transformOrigin: '100% 0%',
                            top: '+=70',
                            rotation: 0
                        })

            },
            goList(){
                this.$router.push("/WriteList")
            }
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>
    .sui-btn{
        display: inline-block;
        position: absolute;
        left:50%;
        top:80%;
        margin-left: -60px;
        height: 36px;
        line-height:4px;
        overflow: hidden;
        border-radius: 18px;
        min-width: 120px;
        font-size: 16px;
        background: #56817a;
        border:2px solid #e6e0a4;
    }
    .blog-head{
        margin-top: 30px;
        width:100%;
        overflow: hidden;
        z-index: 999;
    }
    .nav-text{
        font-family: '微软雅黑', 'Helvetica Neue', "STXiHei", 'Source Sans Pro', Helvetica, Arial, sans-serif;
        font-size: 40px;
        font-weight: bold;
        height:60px;
        line-height: 60px;
    }
    .home-box{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        z-index: 222;
    }
</style>
