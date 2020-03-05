const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var glob = require("glob");
module.exports = {
    mode: 'development',
    entry: {
        app: [path.join(__dirname, 'src', 'index.js'), path.join(__dirname, 'src/assets/scss', 'main.scss')],
        card: [path.join(__dirname, 'src/components/card/', 'script.js'), path.join(__dirname, 'src/components/card/', 'style.scss')],
        fabButton: [path.join(__dirname, 'src/components/fabButton/', 'script.js'), path.join(__dirname, 'src/components/fabButton/', 'style.scss')],
        filteredContainer: [path.join(__dirname, 'src/components/filteredContainer/', 'script.js'), path.join(__dirname, 'src/components/filteredContainer/', 'style.scss')],
    },
    watch: true,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "components/[name]/[name].[ext]",
        chunkFilename: 'components/[name]/[name].[ext]'
    },
    module: {
        rules: [{
            test: /.js?$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'babel-loader',
            query: {
                presets: [
                    ["@babel/env", {
                        "targets": {
                            "browsers": "last 2 chrome versions"
                        }
                    }]
                ]
            }
        }, {
            test: /\.scss$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'css/[name].css',
                    }
                },
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'css-loader?-url'
                },
                {
                    loader: 'postcss-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }],
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist/'),
        inline: true,
        host: 'localhost',
        port: 8080,
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: '[name].css',
            directory: '[directory]'
        }),
    ]
};