const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: false,
            title: 'webpack is good',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
}


module.exports = config;
