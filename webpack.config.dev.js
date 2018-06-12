const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(require('./webpack.config'), {
    plugins: [
        // variables at compile time
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'DEV',
            API_HOST: 'localhost:3000'
        })
    ]
});