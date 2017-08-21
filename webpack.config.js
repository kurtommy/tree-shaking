var path = require('path');

module.exports = {
  entry: './src/angular/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-webpack')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modules: false }], ['es2017']]
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
