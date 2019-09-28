const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(jpg|png|gif|bmp|jpeg|JPG)$/,
        use: "url-loader?limit=67000&name=[hash:8]-[name].[ext]"
      },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      { test: /\.vue$/, use: "vue-loader" }
    ]
  }
};
