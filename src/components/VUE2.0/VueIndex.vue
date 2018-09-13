<template>
    <div class="com-box" >
        <nav-head :head-title="navHeadText"></nav-head>
    </div>
</template>

<script>
    import navHead from './../common/nav-head.vue'
    export default {
        name: 'vue-index',
        data () {
            return {
                navHeadText:"vue相关文章"
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

        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>


</style>
