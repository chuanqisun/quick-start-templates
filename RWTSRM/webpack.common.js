const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pages = [
  {
    bundleName: "home",
    entry: "./src/pages/home.tsx",
    template: "./src/templates/default.html"
  }
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
      template: page.template
    })
);

module.exports = {
  entry: { ...pageEntries },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: "all",
          enforce: true,
          filename: "vendor.[chunkhash].js",
          name: false,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  plugins: [new CleanWebpackPlugin(), ...htmlWebpackPlugins]
};
