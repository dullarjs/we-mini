/*
* @Author: Just be free
* @Date:   2022-10-21 11:01:48
* @Last Modified by:   Just be free
* @Last Modified time: 2022-10-21 11:02:27
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