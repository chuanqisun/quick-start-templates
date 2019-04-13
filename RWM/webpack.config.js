const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pages = [
  { bundleName: 'page1', entry: './pages/page1.jsx' },
  { bundleName: 'page2', entry: './pages/page2.jsx' },
  { bundleName: 'page3', entry: './pages/folder/page3.jsx' },
];

const pageEntries = pages.reduce((obj, page) => {
  obj[page.bundleName] = page.entry;
  return obj;
}, {});

const htmlWebpackPlugins = pages.map(
  page =>
    new HtmlWebpackPlugin({
      chunks: [page.bundleName],
      filename: `${page.bundleName}.html`,
    })
);

module.exports = {
  entry: { ...pageEntries },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          enforce: true,
          filename: 'vendor.[chunkhash].js',
          name: false,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin(), ...htmlWebpackPlugins],
};
