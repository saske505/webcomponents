const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var glob = require("glob");
module.exports = {
    mode: 'development',
    entry: {
        app: [path.join(__dirname, 'src', 'index.js'), path.join(__dirname, 'src/assets/scss', 'main.scss')],
        card: [path.join(__dirname, 'src/components/card/', 'card.js'), path.join(__dirname, 'src/components/card/', 'card.scss')],
        fabButton: [path.join(__dirname, 'src/components/fabButton/', 'fabButton.js'), path.join(__dirname, 'src/components/fabButton/', 'fabButton.scss')],
        filteredContainer: [path.join(__dirname, 'src/components/filteredContainer/', 'filteredContainer.js'), path.join(__dirname, 'src/components/filteredContainer/', 'filteredContainer.scss')],
    },
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "components/[name]/[name].js",
        chunkFilename: 'components/[name]/[name].js'
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
                        name: 'components/[name]/[name].css',
                    }
                },
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'css-loader?-url'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: 'postcss.config.js'
                        }
                    }
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
            filename: '[name].css'
        }),
    ]
};