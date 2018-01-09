const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: ["./assets/index.js"],
    output: {
        filename: "assets/index.js",
        path: path.join(__dirname, "./build/")
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./assets/index.html",
            filename: "./index.html"
        })
    ]
};