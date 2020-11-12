const path = require('path');
//引入vue-loader插件
const  VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports= {
    mode: 'development',
    entry:path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    //打包规则
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'

                ],
            },      {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            { test: /\.scss$/,
                loader: 'sass-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }

        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')

        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    devtool: '#eval-source-map'
}