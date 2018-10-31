<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <h2 class="h2-title">类数组概念</h2>
                <p class="page-p-two-index">
                    JavaScript中的对象看起来像却又不是数组的对象。
                </p>
                <h2 class="h3-title">JavaScript的一个类数组对象有两个典型的特性:</h2>
                <ul class="page-p-two-index">
                    <li><span class="blod-font">具有:</span>指向对象元素的数字索引下标以及length属性告诉我们对象的元素个数。</li>
                    <li><span class="blod-font">不具有:</span>不具有诸如push()、forEach()以及indexOf()等数组对象具有的方法。</li>
                </ul>
                <h2 class="h2-title">类数组出现的场景</h2>
                <h2 class="h3-title">函数中的arguments</h2>
                <p class="page-p-two-index">
                    在所有的函数体内都可以访问到arguments,是属于这里说的类数组,可以获取到length长度属性,
                    但如果我们在控制器中输入arguments.shift()是将会报错:Uncaught TypeError: arguments.shift is not a function。
                    但shift()是数组的一个函数。我们在尝试一下，在函数体内打印arguments.constructor和[].constructor，分别会打印出Object()和Array[]。
                </p>
                <pre v-highlightA>
    <code >
        let testFun = function () {
        console.log(arguments) ;
        console.log(arguments.length);
        }

    </code>
                </pre>
                <h2 class="h3-title">DOM中的类数组</h2>
                <p class="page-p-two-index">
                    DOM中的很多集合都会返回这种对象（类数组对象）,比如document.getElementsByTagName()、document.images和document.childNodes。
                </p>
                <h2 class="h3-title">类数组怎么转换成数组</h2>
                <p class="page-p-two-index">
                    类数组对象是不具备数组中的方法,就需要让类数组对象转换为一个数组,
                    将类数组对象转换为数组最经典的一个方法就是使用Array的slice()方法:
                </p>
                <pre v-highlightA>
    <code >
        var arr = Array.prototype.slice.call(arguments);
        // 等同于
        var arr = [].slice.call(arguments);
    </code>
                </pre>
                <p class="page-p-two-index">
                    另外在ES6中，可以使用Array.from()方法:
                </p>
                <pre v-highlightA>
    <code >
        var arr = Array.from(arguments);
    </code>
                </pre>
            </div>
        </div>
    </div>
</template>

<script>
    import goTop from "./../../common/GoTop.vue";
    import navHead from './../../common/nav-head.vue';
    import breadCrumb  from './../../common/BreadCrumb.vue';
    import pageHead  from './../../common/PageHead.vue';
    import './../../../less/pageStyle.less';
    export default {
        name: 'vue',
        data () {
            return {
                navHeadText:"类数组的详解",
                twoTitle:"Js",
                twoRouter:"/js/JsIndex",
                pageTitle:"类数组的详解",
                pageDate:"2018/10/30",
                input:''
            }
        },
        created () {

        },
        mounted () {

        },
        computed: {

        },
        components: {
            navHead,
            goTop,
            breadCrumb,
            pageHead
        },
        methods:{
            back () {
                this.$router.push("/Js/JsIndex")
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
