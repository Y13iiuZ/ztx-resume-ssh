var path = require("path");

module.exports = {
  build: {
    env: require("./prod.env"),
    index: path.resolve(__dirname, "../public/index.html"),
    assetsRoot: path.resolve(__dirname, "../public"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/ztx-resume-ssh/dist",
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: require("./dev.env"),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {},
    //CSS源映射默认关闭，因为相对路径“有缺陷”
    //根据CSS Loader自述，使用此选项
    // (https://github.com/webpack/css-loader#sourcemaps)
    //根据我们的经验，它们通常按预期工作，
    //启用此选项时请注意此问题。
    cssSourceMap: false,
  },
};
