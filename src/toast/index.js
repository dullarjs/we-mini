/*
* @Author: Just be free
* @Date:   2022-10-20 18:14:54
* @Last Modified by:   Just be free
* @Last Modified time: 2022-10-20 18:18:22
* @E-mail: justbefree@126.com
*/
Component({
  properties: {
    prop: {
      type: String,
      value: 'index.properties'
    },
  },
  data: {
    flag: false,
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: () => {
          this.setData({
            // flag: _.getFlag(),
          })
        }
      })
    }
  }
})