/*
* @Author: Just be free
* @Date:   2022-10-21 11:01:06
* @Last Modified by:   Just be free
* @Last Modified time: 2022-10-21 14:44:50
* @E-mail: justbefree@126.com
*/
Component({
  properties: {
    flexDirection: String,
    flexWrap: String,
    justifyContent: String,
    alignItems: String,
    alignContent: String,
    xs: String,
    sm: String,
    md: String,
    lg: String,
    fixBottomLine: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    flag: false,
  },
  lifetimes: {
    // attached() {
    //   wx.getSystemInfo({
    //     success: () => {
    //       this.setData({
    //         // flag: _.getFlag(),
    //       })
    //     }
    //   })
    // }
  }
})
