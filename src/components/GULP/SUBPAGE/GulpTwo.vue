<template>
    <div class="com-min-box" >
        <go-top></go-top>
        <nav-head :head-title="navHeadText" @back="back" @home="home"></nav-head>
        <div class="page-content">
            <bread-crumb class="nav-bread" :two-title="twoTitle" :two-router="twoRouter"></bread-crumb>
            <page-head :page-title="pageTitle" :page-date="pageDate"></page-head>
            <div class="page-body">
                <p class="page-p-two-index">
                    现在单页面项目比较流行,但对于简单的项目,例如公司官网等等,如果用单页项目去做的话,不利于SEO,所以
                    还是需要用到多页面的构建项目,现在流行的构建工具 ,webpack,gulp等等,这里介绍webpack来实现多页面
                    的js,css,image,html的压缩,以及less的编译,以及本地起个服务器实现实时刷新等功能,以及生产环境才压
                    缩开发环境不压缩等功能。
                    <br>
                    <a  class="a-url" href="https://github.com/suidagang/gulp-cli-multiple" target="_blank">githup地址</a>
                </p>
                <h2 class="h2-title">webpack构建多页面项目的结构</h2>
                <p class="page-p-two-index">
                    结构如下:
                </p>
                <div class="img-box">
                    <img  v-lazy="imgSrc.one" />
                </div>
                <p class="page-p-two-index" style="margin-bottom: 0px">
                    src目录下的:
                </p>
                <p style="margin-left: 4em;margin-bottom: 30px;">
                    1、componet目录用来存放公共的html组件。
                    <br />
                    2、css目录用来存放css样式。
                    <br />
                    3、image目录用来存放项目使用的图片。
                    <br />
                    4、js目录用来存放js。
                    <br />
                    5、view目录用来存放页面html。
                </p>
                <h2 class="h2-title">对 gulpfile.js 文件的解读</h2>
                <p class="page-p-two-index">


                </p>
                <pre v-highlightA>
    <code >
        var gulp = require('gulp'),//npm install gulp --save-dev 引入gulp
            connect = require('gulp-connect'),//gulp-connect浏览器自动刷新 npm install --save-dev gulp-connect
            //实现原理：通过在本地开启一个websocket服务，检测文件变化，当文件被修改后触发livereload任务，推送消息给浏览器刷新页面。
            watch = require('gulp-watch'),//gulp的watch方法去监听文件变化,变化了久治县相应的操作 npm install --save-dev gulp-watch
            clean = require('gulp-clean'),//删除文件及文件夹，在执行打包的时候，一般都需要先清理目标文件夹，以保证每次打包时，都是最新的文件。
            //npm install gulp-clean --save-dev
            less = require('gulp-less'),//使用gulp-less插件将less文件编译成CSS npm install gulp-less --save-dev
            path = require('path'),
            cleanCSS = require('gulp-clean-css'),//使用gulp-clean-css压缩css文件，减小文件大小，并给引用url添加版本号避免缓存
            imagemin = require('gulp-imagemin'),//图片文件压缩（包括PNG、JPEG、GIF和SVG图片）
            cache = require('gulp-cache'), //解决缓存的图片不在加载
            notify = require("gulp-notify"),//提示信息
            uglify = require('gulp-uglify'),//压缩js
            fileinclude  = require('gulp-file-include'), // 模板文件嵌入
            htmlmin = require('gulp-htmlmin');//html压缩

            //启动服务
            gulp.task('webserver', function() {
                connect.server({
                    port: 2333,
                    root:'dist/',
                    livereload: true
                });
            });

            //编译less
            gulp.task('less', function() {
                return gulp.src('src/css/**/*.less')
                .pipe(less())
                .pipe(gulp.dest('dist/css'))
                .pipe(connect.reload())//改变后重新刷新编译
            });

            //编译image
            gulp.task('image', function() {
                return gulp.src('src/image/**/*.{png,gif,jpg,jpeg}')
                .pipe(gulp.dest('dist/image'))
                .pipe(connect.reload())
            });

            //编译js
            gulp.task('js', function() {
                return gulp.src('src/js/**/*.js')
                .pipe(gulp.dest('dist/js'))
                .pipe(connect.reload())
            });
            // 启动监视
            gulp.task('watch', function() {
                watch('src/**/*.html',function() {
                    gulp.start(['fileinclude']);
                });
                watch('src/css/**/*.less', function() {
                    gulp.start(['less']);
                });
                watch('src/js/**/*.js', function() {
                    gulp.start(['js']);
                });
                watch('src/image/**/*.{png,gif,jpg,jpeg}', function() {
                    gulp.start(['image']);
                });
            });

            //配置任务流
            function swallowError(error) {
                // If you want details of the error in the console
                console.error(error.toString())
                notify.onError({
                    title: 'Gulp',
                    subtitle: 'Failure!',
                    message: 'Error: <%= error.message %>',
                    sound: 'Beep'
                })(error);
                this.emit('end')
            }

            //文件内嵌
            gulp.task('fileinclude',['fileinclude_view'],function() {
                gulp.src(['src/index.html', '!src/componet/*.html'])
                    .pipe(fileinclude({
                    prefix: '@@',
                    basepath: '@file'
                }))
                .on('error', swallowError)
                .pipe(htmlmin({collapseWhitespace: false}))
                .pipe(gulp.dest('dist/'))
                .pipe(connect.reload())
            });

            gulp.task('fileinclude_view',function() {
                gulp.src(['src/view/**/*.html', '!src/componet/*.html'])
                    .pipe(fileinclude({
                    prefix: '@@',
                    basepath: '@file'
                }))
                .on('error', swallowError)
                .pipe(htmlmin({collapseWhitespace: false}))
                .pipe(gulp.dest('dist/view'))
                .pipe(connect.reload())
            });

            // 清空dist
            gulp.task('clean', function() {
                return gulp.src('dist/')
                .pipe(clean());
            });
            gulp.task('dev', ['clean'],function(){
                gulp.start(['js','image',
                'less','webserver','watch',
                'fileinclude']);
            });
            gulp.task('default', ['dev']);




            //***********************************************************************
            // gulp product 压缩css/js/图片等文件，进行减少文件大小，但也会大大减弱文件可读性
            //编译压缩less
            gulp.task('less_min', function() {
                return gulp.src('src/css/**/*.less')
                .pipe(less())
                .pipe(cleanCSS())
                .pipe(gulp.dest('dist/css'))
                .pipe(connect.reload())

            });
            //编译压缩image
            gulp.task('image_min', function() {
                return gulp.src('src/image/**/*.{png,gif,jpg,jpeg}')
                    .pipe(cache(imagemin({
                    optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
                    progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
                    interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
                    multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
                })))
                .on('error', swallowError)
                .pipe(gulp.dest('dist/image'))
                .pipe(connect.reload())
            });
            //编译压缩js
            gulp.task('js_min', function() {
                return gulp.src('src/js/**/*.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist/js'))
                .pipe(connect.reload())
            });
            // 启动监视
            gulp.task('watch_min', function() {
                watch('src/**/*.html',function() {
                    gulp.start(['fileinclude']);
                });
                watch('src/css/**/*.less', function() {
                    gulp.start(['less_min']);
                });
                watch('src/js/**/*.js', function() {
                    gulp.start(['js_min']);
                });
                watch('src/image/**/*.{png,gif,jpg,jpeg}', function() {
                    gulp.start(['image_min']);
                });
            });
            gulp.task('product', ['compress']);
            gulp.task('compress', ['clean'],function(){//压缩了css/js/图片
            gulp.start(['fileinclude','image_min','less_min',
            'js_min','webserver','watch_min']);
            });
    </code>
                </pre>
                <h2 class="h2-title">模板文件的使用(gulp-file-include)</h2>
                <p class="page-p-two-index">
                    可以把重复的部分做成公共的组件
                </p>
                <pre v-highlightA>
    <code >
        &lt;body&gt;
            @@include('./componet/header.html')
            &lt;div class="index-content"&gt;我是首页&lt;/div&gt;
            &lt;div class="a_box"&gt;
                &lt;p&gt;&lt;&lt;a href="view/a.html"&gt;第一个页面&lt;/a&gt;&lt;/p&lt;
                &lt;p&gt;&lt;a href="view/b.html"&gt;第二个页面&lt;/a&gt;&lt;/p&gt;
                &lt;p&gt;&lt;a href="view/c.html"&gt;第三个页面&lt;/a&gt;&lt;/p&gt;
            &lt;/div&gt;
            @@include('./componet/footer.html')
        &lt;/body&gt;
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
                navHeadText:"webpack 构建多页面项目",
                twoTitle:"构建工具",
                twoRouter:"/vue/VueIndex",
                pageTitle:"webpack 构建多页面项目",
                pageDate:"2018/10/25",
                input:'',
                imgSrc:{
                    one:'/img/list.png'
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
        methods: {
            back () {
                this.$router.push("/Gulp/GulpIndex")
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
