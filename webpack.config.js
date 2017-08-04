const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: false,
            title: 'This is a.html',
            excludeChunks: ['b', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: false,
            title: 'This is b.html',
            excludeChunks: ['a', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: false,
            title: 'This is c.html',
            excludeChunks: ['b', 'a']
        })
    ]
}


module.exports = config;
