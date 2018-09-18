<template>
    <div class="com-box" >
        <nav-head :head-title="navHeadText" @back="back()" @home="home"></nav-head>
    </div>
</template>

<script>
    import navHead from './../common/nav-head.vue'
    export default {
        name: 'css-index',
        data () {
            return {
                navHeadText:"CSS相关文章"

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
            }
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>
    .back-btn{
        position: absolute;
        top:10px;
        left:30px;
    }
</style>
