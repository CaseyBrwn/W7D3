const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./frontend/pokemon.jsx",
    output: {
        path: path.join(__dirname, 'app', 'assets', 'javascripts'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'eval source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};