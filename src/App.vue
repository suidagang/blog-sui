<template>
  <div id="app">
      <transition name="slide-left">
            <router-view class="child-view"></router-view>
      </transition>
  </div>
</template>

<script>


export default {
    name: 'app',
    data(){
        return{
            transitionName:''
        }
    },
    components: {

    },
    watch: {
        '$route' (to, from) {
            if(to.path == '/'){
                this.transitionName = 'slide-right';
            }else{
                this.transitionName = 'slide-left';
            }
        }
    }
}
</script>

<style lang="less">
  #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin: 0;
      padding: 0;
      height: 100%;
  }
  .child-view {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all .9s ;
  }
  .slide-left-enter{
      opacity: 0;
      transform:rotate(0deg);
  }
  .slide-left-leave-active{
      opacity: 0.5;
      transform:rotate(20deg);
  }
</style>
