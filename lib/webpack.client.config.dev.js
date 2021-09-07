const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    main: "./src/client/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public"),
    clean: false,
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./src/client/public",
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "⚡ Kickoff",
      template: "./src/client/public/index.html",
      showErrors: true,
      favicon: "./src/client/public/favicon.ico",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              [
                "@babel/preset-react",
                {
                  development: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
