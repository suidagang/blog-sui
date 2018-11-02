<template>
    <div id="goTop">
        <div class="goTop" v-show="goTopShow" @click="goTop"><img v-lazy="imgSrc.one" class="goTopIcon" /></div>
    </div>
</template>
<script>
    export default {
        name: "goTop",
        data(){
            return{
                scrollTop: '',
                goTopShow:false,
                imgSrc:{
                    one:this.$store.state.baseUrl+'img/top.png'
                }
            }
        },
        methods:{
            handleScroll () {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(this.scrollTop>500){
                    this.goTopShow=true
                }else{
                    this.goTopShow=false
                }
            },
            goTop(){
                let timer=null,that=this;
                //清掉计时器
                cancelAnimationFrame(timer);
                //动画开始
                timer=requestAnimationFrame(function fn(){
                    if(that.scrollTop>0){
                        that.scrollTop-=80;
                        document.body.scrollTop = document.documentElement.scrollTop = that.scrollTop;
                        timer=requestAnimationFrame(fn)
                    }else {
                        cancelAnimationFrame(timer);
                        that.goTopShow=false;
                    }
                })
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed(){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .goTop{
        position: fixed;
        right: 0%;
        bottom: 20px;
        width: 100px;
        height: 100px;
        z-index: 99;
    }
    .goTopIcon{
        display: block;
        width: 100px;
        height: 100px;
    }
</style>