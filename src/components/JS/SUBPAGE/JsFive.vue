<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <ul class="page-p-two-index">
                    闭包是javascript这门语言的难点,也是一些高级应用需要依靠闭包来实现,也是面试必问的题目.
                </ul>
                <h2 class="h2-title">闭包的定义</h2>
                <p class="page-p-two-index">
                    闭包是指有权访问另一个函数作用域中的变量的函数,创建闭包的最常见的方式就是在一个函数内部创建另一个函数,
                    通过另一个函数访问这个函数的局部变量.
                </p>
                <h2 class="h2-title">闭包的优缺点</h2>
                <ul class="page-p-two-index">
                    <li><span class="blod-font">缺点:</span>常驻内存,会增大内存的使用量,使用不当很容易造成内存泄漏。</li>
                    <li><span class="blod-font">优点:</span>闭包主要场合:设计私有方法和变量.</li>
                    <li><span class="blod-font">说明:</span>一般函数执行完毕后,局部活动就会被销毁,内存中仅仅保存全局作用域。闭包的情况不同。</li>
                </ul>
                <pre v-highlightA>
    <code >
        function a() {
            var b = 1;
            return function(){
                alert(b++)
            };
        };
        var fun = a();//b++:b自增要等到整个算式运算结束,++b:马上就自增
        fun();//1  执行后 b++,b变量仍然存在在内存中,所以下次执行fun()会在上一次中继续++
        fun();//2
        fun = null;//变量b就会被垃圾回收机制回收

    </code>
                </pre>
                <h2 class="h3-title">js垃圾回收原理</h2>
                <ul class="page-p-two-index">
                    <li><span class="blod-font">1、</span>在js中,如果一个对象不在被引用,那么这个对象就会被垃圾回收机制回收。</li>
                    <li><span class="blod-font">2、</span>如果两个对象相互引用,而不再被第三者引用,那么这两个对象也会被回收。</li>
                </ul>
                <h2 class="h3-title">一、闭包实现局部变量的累加</h2>
                <pre v-highlightA>
    <code >
        function add(){
            var x = 10;
            return function(){
                x++;
                alert(x);
            }
        };
        var fun = add();
        fun();//11
        fun();//12
    </code>
                </pre>
                <h2 class="h2-title">二、模块化，减少全局变量的污染,混乱。</h2>
                <pre v-highlightA>
    <code >
        var abc = (function(){
            var a = 1;
            return function(){
                a++;
                alert();
            };
        })();
        //引用自执行函数就代替了上面的 var fun = add();
        abc();//2
        abc();//3
    </code>
                </pre>
                <h2 class="h3-title">三、闭包可以设置私有成员(方法、变量)</h2>
                <pre v-highlightA>
    <code >
        var sui =  (function(){
            var a = 1;
            function bb(){
                a++;
                alert(a)
            };
            function cc(){
                a++;
                alert(a)
            };
            return {
                a:a,
                b:bb,
                c:cc
            }
        })();
        alert(sui.a);//1
        sui.b();//2
        sui.c();//3
    </code>
                </pre>
            <h2 class="h2-title">四、在循环中找到对应元素的索引</h2>
                                <pre v-highlightA>
    <code >
        &lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"&gt;
        &lt;head&gt;
            &lt;meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /&gt;
            &lt;title&gt;&lt;/title&gt;
            &lt;script&gt;
                window.onload = function(){
                    //var dom = document.getElementsByTagName('li');
                    for (var i=0;i<8;i++){
                        (function(i){
                            dom[i].onclick = function(){
                                alert(i);
                            };
                        })(i);
                    }
                };
            &lt;/script&gt;

        &lt;/head&gt;
        &lt;body&gt;
        &lt;ul&gt;
            &lt;li&gt;123&lt;/li&gt;
            &lt;li&gt;456&lt;/li&gt;
            &lt;li&gt;789&lt;/li&gt;
        &lt;/ul&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
                </pre>
            <h2 class="h2-title">五、闭包引起内存泄漏的问题</h2>
            <p class="page-p-two-index">
                由于IE的js对象和DOM对象使用不同的垃圾回收机制,因此闭包在IE中会导致内存泄漏的问题,也就是
                无法销毁驻留在内存中的元素。
            </p>
                                <pre v-highlightA>
    <code >
        function closure(){
            var oDiv = document.getElementById('oDiv');//oDiv用完之后一直驻留在内存中
            oDiv.onclick = function(){
                alert('oDiv.innerHTML');//这里的oDiv是导致内存泄漏的地方
            };
        };
        closure();
        //解决内存泄漏的办法,执行操作完毕后置为null
        function closure(){
            var oDiv = document.getElementById('oDiv');//oDiv用完之后一直驻留在内存中
            var test = oDiv.innerHTML;
            oDiv.onclick = function(){
                alert(test);//这里的oDiv是导致内存泄漏的地方
            };
            oDiv = null;
        };
        closure();
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
                navHeadText:"js闭包详解",
                twoTitle:"Js",
                twoRouter:"/js/JsIndex",
                pageTitle:"js闭包详解",
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
