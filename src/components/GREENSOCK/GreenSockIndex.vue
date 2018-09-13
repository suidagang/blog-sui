<template>
    <div class="com-box" >
        <nav-head :head-title="navHeadText"></nav-head>
    </div>
</template>

<script>
    import navHead from './../common/nav-head.vue'
    export default {
        name: 'greensock-index',
        data () {
            return {
                navHeadText:"greensock相关文章"

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
            goWriteList(){
                this.$router.push("/WriteList")
            },
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
