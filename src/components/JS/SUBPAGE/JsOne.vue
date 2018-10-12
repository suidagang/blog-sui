<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <p class="page-p-two-index">
                    在JavaScript中，call、apply和bind都是Function对象自带的三个方法，都是为了改变函数体内部 this 的指向。
                    <br/>
                    <span class="two-font" style="margin-left: 48px;">1、apply 、 call 、bind 三者第一个参数都是 this 要指向的对象，也就是想指定的上下文.</span>
                    <br/>
                    <span class="two-font" style="margin-left: 48px;">2、apply 、 call 、bind 三者都可以利用后续参数传参.</span>
                    <br/>
                    <span class="two-font" style="margin-left: 48px;">3、bind 是返回对应 函数，便于稍后调用；apply 、call 则是立即调用 .</span>
                    <br/>
                    <span class="two-font" style="margin-left: 48px;">4、bind 方法是es5出来的，所以只支持IE9及以上</span>
                </p>
                <h2 class="h2-title">apply、call、bind 三者相比较,之间又有什么异同呢?</h2>
                <p class="page-p-two-index">
                    何时使用 apply、call，何时使用 bind 呢?简单的一个例子:

                </p>
                <pre v-highlightA>
    <code >
        var obj = {
            x: 81,
        };

        var foo = {
            getX: function() {
                return this.x;
            }
        };
        console.log(foo.getX.bind(obj)());  //81  不是立即调用的
        console.log(foo.getX.call(obj));    //81
        console.log(foo.getX.apply(obj));   //81
    </code>
                </pre>
                <h2 class="h2-title">对于 apply、call 二者而言，作用完全一样，只是接受 参数 的方式不太一样。</h2>
                <p class="page-p-two-index">
                    call 是把参数按顺序传递进去，而 apply 则是把参数放在数组 里。

                </p>
                <pre v-highlightA>
    <code >
        var array1 = [12,'foo',{name:'Joe'},-2458];
        var array2 = ['Doe' , 555 , 100];
        Array.prototype.push.call(array1, array2);
        // 这里用 call 第二个参数不会把 array2 当成一个数组,而是一个元素
        //等价于array1.push(‘‘'Doe' , 555 , 100’’);
        //array1.length=5;

        Array.prototype.push.apply(array1, array2); // 这里用 apply 第二个参数是一个数组

        // 等价于:  array1.push('Doe' , 555 , 100);
        //array1.length=7;
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
                navHeadText:"call、apply和bind的理解",
                twoTitle:"Js",
                twoRouter:"/vue/VueIndex",
                pageTitle:"call、apply和bind的理解",
                pageDate:"2018/9/18",
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
