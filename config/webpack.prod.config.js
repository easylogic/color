const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    library: {
      name: 'EasyLogicColor',
      type: "umd",
      export: "default"
    },
    path: path.resolve(__dirname, '../dist'),
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
};