const { resolve } = require('path');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: resolve('./dist'),
        filename: 'react-validation-collection.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};