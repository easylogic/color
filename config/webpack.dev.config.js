const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    library: {
      name: "EasyLogicColor",
      type: "umd",
      export: 'default',
    },
    filename: 'color.js',
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']

          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};