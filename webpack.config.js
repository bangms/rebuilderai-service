/**
 *
 * entry: 시작점 지정 (웹팩이 내부적으로 dependency 그래프를 만들 때의 시작점 파일)
 * output: 빌드되어 나오는 결과물이 return되는 곳
 * module: javascript 이외의 자원들을 javascript에 가져다 쓸 수 있도록 loader를 load 해주는 곳
 * plugins
 * @babel/core: 핵심 dependency로, 주요 스크립트가 포함
 * @babel/preset-env: babel 플러그인 설정들. 모든 es6+문법을 es5로 컴파일링할 수 있도록 도와주는 dependency
 * @babel/preset-react: 리엑트의 jsx를 javascript code로 바꿔줌
 * babel-loader: babel과 webpack을 같이 사용할 수 있게 해줌
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const publicDir = path.resolve(__dirname, "./public");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/rebuilderai-service/",
    // assetModuleFilename: "images/[hash][ext][query]",
    // publicPath: process.env.PUBLIC_URL,
    // publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        loader: "file-loader",
        options: {
          name: "src/assets/images/[name].[ext]",
        },
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "videos/[name].[ext]",
              // name: "assets/videos/[name].[ext]",
              // outputPath: "videos",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: publicDir + "/index.html",
      filename: "./index.html",
      favicon: publicDir + "/favicon.ico",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
  },
};
