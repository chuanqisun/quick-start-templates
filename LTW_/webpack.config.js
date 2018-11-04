module.exports = {
  entry: "./src/index.ts",
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ },
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
};