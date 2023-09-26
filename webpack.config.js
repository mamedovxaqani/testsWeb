const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", outputPath: "images/" },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  entry: {
    main: path.resolve(__dirname, "./public/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Test Genius",
      template: path.resolve(__dirname, "./public/template.html"),
      filename: "index.html",
    }),
  ],
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8000,
  },
};
