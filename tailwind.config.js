/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-16 19:10:42
 * @LastEditTime: 2022-03-18 13:29:24
 * @Description:颜色管理
 */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        header_hilight: "#ffffff", //navbar the hilight color
        header_dark: "#17252e", //navbar the dark color
        sidebar_hilight: "#191b24", //sidebar the hilight color
        sidebar_dark: "#1c1c1c", //sidebar the dark
        main_hilight: "#f0f2f5", //main the hilight
        nain_dark: "#272727", //main the dark
        pop_hilight: "#3b5988", //pup the hilight
        pop_dark: "#c8c8c9", //pup the dark
        input_bg: "#f6f7f8" //input bg
      },
      textColor: {
        color_dark: "#bebebe" //font color the dark
      },
      padding: {
        fiexdPx_input: "8px" //input padding
      },
      borderRadius: {
        radiu_input: "10px" //input radiu
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover", "focus"],
      boxShadow: ["hover", "focus", "active"],
      outline: ["focus"],
      ringWidth: ["focus"]
    }
  },
  plugins: []
}
