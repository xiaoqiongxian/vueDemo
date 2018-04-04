var path = require('path')
var webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist', //打包后js、css、image等存放的目录；
        publicPath: '/dist/', //最终发布的服务器上 build.js 所在的目录，其他静态资源也应当在这个目录下。
        filename: 'build.js', //打包的js文件名，index.html 引用的 JS 要和这里保持一致。
        chunkFilename:'[name].js'
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
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/, //配置loaders加载静态资源
                loader: 'url'
            },
            {
                test: /\.less$/,
                loader: "vue-style!css!less"
            },
            {
                test: /\.scss/,
                loader: "vue-style!css!sass"
            },
            {
                test: /\.styl/,
                loader: "vue-style!css!stylus"
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
        new webpack.ProvidePlugin({
          "$":"jquery",
          "jQuery":"jquery",
          "window.jQuery":"jquery"
        })
    ]
    
}

