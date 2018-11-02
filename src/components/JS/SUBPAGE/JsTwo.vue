<template>
    <div class="com-min-box" >

        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <p class="page-p-two-index">
                    <span style="font-size: 20px;color: peru;">连接: </span><a class="a-url" href="http://www.w3cplus.com/javascript/understanding-the-dom.html">DOM详解 作者:大漠</a>
                </p>
                <h2 class="h2-title">DOM事件模型</h2>
                <h2 class="h3-title">DOM基本事件模型(DOM0级模型)</h2>
                <p class="page-p-two-index">
                    基本事件模型有一个典型的缺点，就是只能注册一个事处处理程序，如果你想注册多个事件处理程序是行不通的。
                    当你点击button按钮时，浏览器控制台只会输出two()函数做的事情,不会输出one()函数做的事情。
                </p>
                <pre v-highlightA>
    <code >
        <!-- HTML -->
        &lt;button&gt;单击我&lt;/button&gt;
        // Script
        let one = function () {
        console.log('one:', this)
        }
        let two = function () {
        console.log('two', this)
        }
        document.querySelector('button').onclick = one
        document.querySelector('button').onclick = two

    </code>
                </pre>
                <p class="page-p-two-index">
                    在基本事件模型中，如果要移除监听函数，可以通过给其事件赋值null来实现:
                </p>
                <pre v-highlightA>
    <code >
        document.querySelector('button').onclick = null
    </code>
                </pre>
                <h2 class="h2-title">DOM Level 2模型</h2>
                <p class="page-p-two-index">
                    W3C规范中定义了三个事件阶段,依次是捕获阶段、目标阶段和冒泡阶段。事件对象会依次完成这些阶段。
                    如果某个阶段不支持或事件对象的传播被终止，那么该阶段就会被跳过。这里先来了解这三个事件阶段的概念:
                </p>
                <div class="img-box">
                    <img  v-lazy="imgSrc.one" />
                </div>
                <h2 class="h3-title">捕获阶段</h2>
                <p class="page-p-two-index">
                    在事件对象到达事件目标之前，事件对象必须从window经过目标的祖先节点传播到事件目标。这个阶段被我们称之为捕获阶段。
                    在这个阶段注册的事件监听器在事件到达其目标前必须先处理事件。
                </p>
                <h2 class="h3-title">目标阶段</h2>
                <p class="page-p-two-index">
                    事件对象到达其事件目标。这个阶段被我们称为目标阶段。一旦事件对象到达事件目标，该阶段的事件监听器就要对它进行处理。
                    如果一个事件对象类型被标志为不能冒泡。那么对应的事件对象在到达此阶段时就会终止传播。
                </p>
                <h2 class="h3-title">冒泡阶段</h2>
                <p class="page-p-two-index">
                    事件对象以一个与捕获阶段相反的方向从事件目标传播经过其祖先节点传播到window。这个阶段被称之为冒泡阶段。
                    在此阶段注册的事件监听器会对相应的冒泡事件进行处理。
                </p>
                <h2 class="h3-title">注意事项</h2>
                <p class="page-p-two-index">
                    addEventListener的第三个参数是用来判断捕获还是冒泡事件的
                </p>
                <pre v-highlightA>
    <code >
        element.addEventListener('click', listener, true)
    </code>
                </pre>
                <p class="page-p-two-index">
                    如果省略此参数，则其默认值为false，并且监听器不是捕获器，而变成冒泡。因此，在此阶段期间，
                    仅调用从window到事件目标父级的路径上找到的捕获器。
                </p>
                <h2 class="h3-title">事件中断</h2>
                <p class="page-p-two-index">
                    现实中，很多时候我们并不希望目标元素的事件结束之后还去追溯其根源（冒泡）。也就是想在需要的地方可以结束事件的生命。
                    在JavaScript中可以在事件对象上使用stopPropagation方法:
                </p>
                <pre v-highlightA>
    <code >
        e.stopPropagation();
    </code>
                </pre>
                <h2 class="h2-title">DOM Level 3模型</h2>
                <p class="page-p-two-index">
                    DOM Level 3事件模型是DOM Level 2的事件模型的升级版，在DOM Level 2事件模型的基础上添加了更多的事件类型:
                    <ul style="margin-left: 2em">
                        <li><span class="blod-font">UI事件</span>：当用户与页面上的元素交互时触发，如：load、scroll</li>
                        <li><span class="blod-font">焦点事件</span>：当元素获得或失去焦点时触发，如：blur、focus</li>
                        <li><span class="blod-font">鼠标事件</span>：当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup</li>
                        <li><span class="blod-font">滚轮事件</span>：当使用鼠标滚轮或类似设备时触发，如：mousewheel</li>
                        <li><span class="blod-font">文本事件</span>：当在文档中输入文本时触发，如：input、change</li>
                        <li><span class="blod-font">键盘事件</span>：当用户通过键盘在页面上执行操作时触发，如：keydown、keypress</li>
                    </ul>
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
                navHeadText:"DOM 事件捕获阶段和目标阶段和冒泡阶段",
                twoTitle:"Js",
                twoRouter:"/vue/VueIndex",
                pageTitle:"DOM 事件捕获阶段和目标阶段和冒泡阶段",
                pageDate:"2018/9/18",
                input:'',
                imgSrc:{
                    one:this.$store.state.baseUrl+'img/mao.jpg',
                    two:this.$store.state.baseUrl+'img/test.jpg'
                }
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
            }
        },
        watch: {

        },
    }
</script>


<style lang="less" scoped>

</style>
