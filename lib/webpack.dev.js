const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
  },
  entry: [
    path.join(__dirname, "/src/views/app/index.tsx"),
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
  ],
  output: {
    path: path.join(__dirname, "/dist/public/js"),
    filename: "[name].js",
    chunkFilename: "[name].[chunkhash:8].chunk.js",
    publicPath: "/js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react", "@babel/env"],
            },
          },
        ],
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/react", "@babel/env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
