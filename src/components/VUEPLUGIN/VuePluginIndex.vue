<template>
    <div class="com-box" >
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
    </div>
</template>

<script>
    import navHead from './../common/nav-head.vue'
    export default {
        name: 'vue-plugin-index',
        data () {
            return {
                navHeadText:"vue插件相关文章"

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
