const path = require('path')
module.exports = {
    entry: { index: "./aluk.cli.develop.js" },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        /*library: 'aluk',
        libraryTarget: 'umd',
        globalObject: 'this',*/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: "production"
}

/*
import path from 'path';

export default {
    entry:"./dist/aluk.cli.develop.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    mode:"production"
}


*/