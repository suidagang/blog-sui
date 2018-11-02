<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <h2 class="h2-title">Array构造器</h2>
                <ul class="page-p-two-index">
                    <li><span class="blod-font">隐式创建:</span>var arr=[值1,值2,值3]; </li>
                    <li><span class="blod-font">直接实例化:</span>var arr=new Array(值1,值2,值3);</li>
                    <li><span class="blod-font">创建数组并指定长度:</span>var array=new Array(size);var arr3 = new Array(3);
                        arr3[0] = 1;arr3[1] = 2;arr3[2] = 3;</li>
                </ul>
                <h2 class="h2-title">ES6新增的构造函数方法</h2>
                <p class="page-p-two-index">
                    ES6专门扩展了数组构造器Array,新增2个方法:Array.of()、Array.from().
                </p>
                <h2 class="h3-title">Array.of</h2>
                <p class="page-p-two-index">
                    Array.of()用于将参数依次转化为数组中的一项，然后返回这个新数组，而不管这个参数是数字还是其它。
                    它基本上与Array构造器功能一致，唯一的区别就在单个数字参数的处理上,这个方法的主要目的，是弥补数组构造函数Array()的不足。
                </p>
                <pre v-highlightA>
    <code >
        Array.of(3, 11, 8) // [3,11,8]
        Array.of(3) // [3]
        Array.of(3).length // 1

        Array() // []
        Array(3) // [, , ,]
        Array(3, 11, 8) // [3, 11, 8]

    </code>
                </pre>
                <h2 class="h3-title">Array.from</h2>
                <p class="page-p-two-index">
                    Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组
                </p>

                <pre v-highlightA>
    <code >
        let arrayLike = {
            0: 'tom',
            1: '65',
            2: '男',
            3: ['jane','john','Mary'],
            'length': 4
        };
        let arr = Array.from(arrayLike)
        console.log(arr) // ['tom','65','男',['jane','john','Mary']]
    </code>
                </pre>
                <p class="page-p-two-index">
                    es6之前的方式为:
                </p>
                <pre v-highlightA>
    <code >
        var arr = Array.prototype.slice.call(arguments);
        // 等同于
        var arr = [].slice.call(arguments);
    </code>
                </pre>
                <h2 class="h2-title">判断一个变量是否数组类型</h2>
                <p class="page-p-two-index">
                    ES5以后可用:Array.isArray
                </p>
                <h2 class="h3-title">es5之前判断是否为数组</h2>
                <pre v-highlightA>
    <code >
        // 基于Object.prototype.toString
        Object.prototype.toString.apply(a) === '[object Array]';
    </code>
                </pre>
                <h2 class="h3-title">兼容写法</h2>
                <pre v-highlightA>
    <code >
        if (!Array.isArray){
            Array.isArray = function(arg){
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }
    </code>
                </pre>
            <h2 class="h2-title">数组改变自身值的方法(9个)</h2>
            <p class="page-p-two-index">
                基于ES6，改变自身值的方法一共有9个，分别为pop()、push()、reverse()、shift()、sort()、splice()、unshift()，
                以及两个ES6新增的方法copyWithin() 和 fill()。
            </p>
            <h2 class="h2-title">数组不会改变自身的方法</h2>
            <p class="page-p-two-index">
                基于ES7，不会改变自身的方法一共有9个，分别为concat()、join()、slice()、toString()、toLocateString()、indexOf()、lastIndexOf()、
                未标准的toSource()以及ES7新增的方法includes()。
            </p>

            <h2 class="h2-title">遍历方法(不会改变自身的方法)</h2>
            <p class="page-p-two-index">
                基于ES6，不会改变自身的方法一共有12个，分别为forEach()、every()、some()、filter()、map()、reduce()、reduceRight()
                以及ES6新增的方法entries()、find()、findIndex()、keys()、values()。
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
                navHeadText:"数组api详解",
                twoTitle:"Js",
                twoRouter:"/js/JsIndex",
                pageTitle:"数组api详解",
                pageDate:"2018/11/2",
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
