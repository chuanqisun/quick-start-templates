const path = require('path');

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: "./src/index.tsx",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist")
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "styled-components": "styled",
  },
};