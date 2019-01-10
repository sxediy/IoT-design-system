
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const lessToJs = require('less-vars-to-js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/ant-theme.less'), 'utf8'));

module.exports = {
  target: 'web',
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: themeVariables
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: themeVariables
            }
          }
        ],
        include: [
          path.resolve(__dirname, './'),
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            // options: {
            //   plugins: [
            //     { removeTitle: true },
            //     { removeStyleElement: true },
            //   ],
            // },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    overlay: true,
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ]
};
