<template>
  <div id="app" v-loading="loading2">
      <router-view></router-view>
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
    computed: {
        loading2(){
            return this.$store.state.isLoading
        },

    },
    watch: {

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
</style>
