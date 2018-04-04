var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist', //打包后js、css、image等存放的目录；
        publicPath: '/dist/', //最终发布的服务器上 build.js 所在的目录，其他静态资源也应当在这个目录下。
        filename: 'build.[hash:8].js', //打包的js文件名，index.html 引用的 JS 要和这里保持一致。
        chunkFilename:'[name].[hash:8].js' //懒加载时模块对应js文件名称设置
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, //配置loaders加载.vue文件
                loader: 'vue'
            },
            {  
                test: /\.css$/,  //配置loaders加载.css文件 
                loader:'vue-style!css'
            },
            /*{  
                test: /\.css$/,  //配置loaders加载.css文件
                include: [  
                   /src/ //表示在src目录下的css需要编译   
                ],  
                loader: ExtractTextPlugin.extract("css!postcss")
            },*/
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/, //配置loaders加载静态资源
                loader: 'url',
                query:{ //静态资源提取到images下
                    name: 'images/[name][hash:8].[ext]' ,
                    limit:10000    // 单位：字节
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css!postcss!less")
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("css!postcss!sass")
            },
            {
                test: /\.styl/,
                loader: ExtractTextPlugin.extract("css!postcss!stylus")
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                  name: '[name].[ext]?[hash]'
                }
            }

        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({ //js压缩插件
            compress: {
                warnings: false //warinings:false是在删除无用代码的时候，不显示警告
            }
        }),

        new ExtractTextPlugin("css/style.[hash:8].css") //css提取插件
  ],

    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css!postcss"),
            less: ExtractTextPlugin.extract("css!postcss!less"),
            scss: ExtractTextPlugin.extract("css!postcss!sass"),
            stylus: ExtractTextPlugin.extract("css!postcss!stylus")
        },
        postcss: [require("cssnano")] //css压缩插件
    },
    postcss: [require("cssnano")]
}
