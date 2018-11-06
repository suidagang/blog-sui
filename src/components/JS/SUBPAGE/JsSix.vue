<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <h2 class="h2-title">作为构造函数调用</h2>
                <p class="page-p-two-index">
                    所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。
                </p>
                <pre v-highlightA>
    <code >
        function test(){
            this.a = 10;
        };
        var obj = new test();
        alert(obj.a);//10

    </code>
                </pre>
                <h2 class="h2-title">全局环境中的this</h2>
                <p class="page-p-two-index">
                    函数getName()所处的对象是window对象，因此this也一定在window对象中。此时的this指向window对象，所以getName()返回的this.name其实是window.name，因此alert出全局。
                    结论：无论this身处何处，一定要找到函数运行时（或者说在何处被调用 了）的位置。
                </p>
                <pre v-highlightA>
    <code >
        var name = "全局";
        function getName(){
            var name = "局部";
            return this.name;
        };
        alert(getName());//弹出 全局；

    </code>
                </pre>
                <h2 class="h3-title">局部环境中的this</h2>
                <p class="page-p-two-index">
                    其中this身处的函数getName不是在全局环境中，而是处在jubu环境中。无论this身处何处，一定要找到函数运行时的位置。此时函数getName运行时的位置：
                </p>
 <pre v-highlightA>
    <code >
        var name = "全局";

        var jubu={
            name:"局部",
            getName:function(){
                return this.name;
            }
        };
        alert(jubu.getName());
    </code>
                </pre>
                <h2 class="h3-title">对象中的this</h2>
                <pre v-highlightA>
    <code >
        var obj = {
            foo: "test",
            bar: function () {
                console.log(this.foo);
            }
        };

        obj.bar(); // "test"
    </code>
                </pre>
                <h2 class="h2-title">apply 和 call 调用以及 bind 绑定</h2>
                <p class="page-p-two-index">
                    apply 和 call 调用以及 bind 绑定都是指向绑定的对象
                </p>
                <h2 class="h3-title">jquery中的this</h2>
                <p class="page-p-two-index">
                    $()生成的是什么呢？实际上$()=jquery()，那么也就是说返回的是一个jquery的对象。
                    $(this)是jquery对象，能调用jquery的方法，例如click(), keyup()。
                </p>
                <pre v-highlightA>
    <code >
        $(function () {
            $('button').click(function () {
                alert(this);//this 表示原生的DOM
                //$(this)表示当前对象，这里指的是button
            })
        });
    </code>
                </pre>
            <p class="page-p-two-index">
                结论：1、this，表示当前的上下文对象是一个html DOM对象，可以调用html对象所拥有的属性，方法。
                <br>
                2、$(this),代表的上下文对象是一个jquery的上下文对象，可以调用jquery的方法和属性值。
            </p>
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
                navHeadText:"js中this关键字详解",
                twoTitle:"Js",
                twoRouter:"/js/JsIndex",
                pageTitle:"js中this关键字详解",
                pageDate:"2018/11/6",
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
