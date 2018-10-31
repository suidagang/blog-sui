<template>
    <div class="com-min-box" >
        <rain></rain>
        <div class="home-box">
            <el-button class="back-btn" @click="goHome()">主页</el-button>
            <div class="label">
                <el-row  :gutter="12">
                    <el-col :span="4" >
                        <el-card shadow="hover" @click.native="goSvg()" >
                            SVG
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goGreensock()">
                            GreenSock
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goVue()">
                            vue2.0
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goHtml()">
                            html
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goJs()">
                            js
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goCss()">
                            css
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goNode()">
                            node
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goExpress()">
                            express
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goMongodb()">
                            mongodb
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goVueplugin()">
                            vue插件
                        </el-card>
                    </el-col>
                    <el-col :span="4">
                        <el-card shadow="hover" @click.native="goGulp()">
                            构建工具
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import rain from "./../components/common/Rain.vue";
    export default {
        name: 'write-list',
        data () {
            return {


            }
        },
        created () {

        },
        mounted () {

        },
        computed: {

        },
        components: {
            rain
        },
        methods:{
            goHome(){
                this.$router.push("/")
            },
            goSvg(){
                this.$router.push("/Svg/SvgIndex")
            },
            goGreensock(){
                this.$router.push("/GreenSock/GreenSockIndex")
            },
            goVue(){
                this.$router.push("/vue/VueIndex")
            },
            goHtml(){
                this.$router.push("/Html/HtmlIndex")
            },
            goJs(){
                this.$router.push("/Js/JsIndex")
            },
            goCss(){
                this.$router.push("/Css/CssIndex")
            },
            goNode(){
                this.$router.push("/Node/NodeIndex")
            },
            goExpress(){
                this.$router.push("/Express/ExpressIndex")
            },
            goMongodb(){
                this.$router.push("/Mongodb/MongodbIndex")
            },
            goVueplugin(){
                this.$router.push("/VuePlugin/VuePluginIndex")
            },
            goGulp(){
                this.$router.push("/Gulp/GulpIndex")
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
    .label{
        width:80%;
        min-height:300px;
        margin: 200px auto;
    }
    .el-col{
        margin-bottom: 10px;
        cursor: pointer;
    }
    .home-box{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        z-index: 222;
    }
</style>
