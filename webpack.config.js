
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const lessToJs = require('less-vars-to-js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { resolve } = path;
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
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: themeVariables
              }
            }
          ],
        }),
      },
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'eslint-loader',
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
  ],
  resolve: {
    alias: {
      assets: resolve(__dirname, 'src/assets/'),
      icons: resolve(__dirname, 'src/assets/icons/'),
      components: resolve(__dirname, 'src/components/'),
      'gkh-components': resolve(__dirname, 'src/components/gkh-components/'),
      layouts: resolve(__dirname, 'src/layouts/'),
      models: resolve(__dirname, 'src/models/'),
      routes: resolve(__dirname, 'src/routes/'),
      services: resolve(__dirname, 'src/services/'),
      utils: resolve(__dirname, 'src/utils/'),
      theme: resolve(__dirname, 'src/theme.js/'),
      variables: resolve(__dirname, 'src/variables.less/'),
    },
  },
};
