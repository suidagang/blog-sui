<template>
    <div id="goTop">
        <div class="goTop" v-show="goTopShow" @click="goTop"><i class="goTopIcon"></i></div>
    </div>
</template>
<script>
    export default {
        name: "goTop",
        data(){
            return{
                scrollTop: '',
                goTopShow:false,
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
                        that.scrollTop-=20;
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
        right: 20px;
        bottom: 20px;
        width: 150px;
        height: 150px;
    }
    .goTopIcon{
        display: block;
        width: 150px;
        height: 150px;
        background-image: url("./../../assets/img/top.png");
        background-size: 150px 150px;
    }
</style>