/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-16 19:10:42
 * @LastEditTime: 2022-03-16 21:56:14
 * @Description:颜色管理
 */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header_hilight: "#ffffff", //navbar the hilight color
        header_dark: "#17252e", //navbar the dark color
        sidebar_hilight: "#191b24", //sidebar the hilight color
        sidebar_dark: "#1c1c1c", //sidebar the dark
        main_hilight: "#f0f2f5", //main the hilight
        nain_dark: "#272727" //main the dark
      }
    }
  },
  plugins: []
}
