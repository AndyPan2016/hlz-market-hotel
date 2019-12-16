/**
 * 补丁程序
 * @author AndyPan
 * @createdate 2019年6月26日17:31:50
 * @lastupdatedate 2019年6月26日17:31:54
 * @remark 可用于修复线上小程序部分Bug
 */

import Sval from 'sval'

export const Patch = {
  createPatch (options) {
    let that = this

    let setting = {
      // 获取当前页面次数
      getPageCount: 0,
      // 获取当前页面最大限制
      maxPageCount: 30,
      // 补丁文件路径
      patchUrl: 'https://media.ihunlizhe.com/market/assets/scripts/patch-file',
      // 是否每次加载缓存key
      isLoadEachTime: 'isLoadEachTime',
      // 缓存补丁对象key
      patchFn: 'patchFn'
    }

    try {

      /**
       * 获取当前页面对象
       * @param {Function} callBack 获取成功后的回调
       */
      let currentPages = function (callBack) {
        setTimeout(() => {
          let page = (getCurrentPages() || [])[0]
          if (!page) {
            if (setting.getPageCount < setting.maxPageCount) {
              currentPages()
              setting.getPageCount++
            }
          } else {
            if (callBack) {
              callBack(page)
            }
          }
        }, 1)
      }

      /**
       * 解析数据
       * @param {String} data 被解析的数据
       */
      let svalData = function (data, callBack) {
        // Sval options
        let svalOptions = {
          // ECMA Version of the code (5 | 6 | 7 | 8 | 9 | 10 | 2015 | 2016 | 2017 | 2018 | 2019)
          ecmaVer: 9,
          // Whether the code runs in a sandbox
          sandBox: true
        }
        const interpreter = new Sval(svalOptions)
        interpreter.run(data)
        let patchFn = interpreter.exports.patchFn
        let isLoadEachTime = patchFn.isLoadEachTime
        that.$parent.globalData[setting.isLoadEachTime] = isLoadEachTime
        if (isLoadEachTime === false) {
          that.$parent.globalData[setting.patchFn] = patchFn
        }
        pagePatch(patchFn, callBack)
      }

      /**
       * 页面补丁渲染
       * @param {Object} patchFn 补丁对象
       * @param {Function} callBack 回调函数
       */
      let pagePatch = function (patchFn, callBack) {
        // 获取当前页面对象
        currentPages((page) => {
          let pageRoute = page.route
          // console.info(pageRoute)
          let routeHandle = patchFn[pageRoute]
          if (routeHandle) {
            routeHandle.call(that)
            if (callBack) {
              callBack()
            }
          }
        })
      }

      /**
       * 获取补丁文件
       */
      let getPatch = function (callBack) {
        let isLoadEachTime = that.$parent.globalData[setting.isLoadEachTime]
        if (isLoadEachTime === false) {
          let patchFn = that.$parent.globalData[setting.patchFn]
          pagePatch(patchFn, callBack)
        } else {
          wx.request({
            url: setting.patchUrl + '?v=' + (new Date()).getTime(),
            methods: 'get',
            success (res) {
              if (res.statusCode === 200) {
                svalData(res.data, callBack)
              } else {
                svalData('exports.patchFn = {isLoadEachTime: false};', callBack)
              }
            },
            fail () {
              svalData('exports.patchFn = {isLoadEachTime: false};', callBack)
            }
          })
        }
      }

      /**
       * 初始化
       */
      let install = function () {
        if (options) {
          for (let key in options) {
            setting[key] = options[key]
          }
        }

        // getPatch(setting.callBack)
      }

      install()

    } catch (e) { }
  }
}