/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 11:44:52
 * @LastEditTime: 2022-03-13 15:14:52
 * @Description:
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions" // 所有主流浏览器最近10版本用
      ],
      grid: true
    },
    "postcss-pxtorem": {
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 37.5 : 192
      },
      propList: ["*"],
      mediaQuery: false,
      minPixelValue: 12
      // exclude: /node_modules/i
    }
  }
}
