const path = require('path');

config = {
    entry: './src/script/main.js',
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: 'bundle.js'
    }
}

module.exports = config;
