const nodeExternals = require('webpack-node-externals');

module.exports =
{
  entry: './app.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
