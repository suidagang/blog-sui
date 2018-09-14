module.exports = {
    outputDir:process.env.outputDir,
    // 基本路径
    baseUrl:process.env.NODE_ENV == "development"?'/':'/blog/',
    // 第三方插件配置
    pluginOptions: {
    
    }
}