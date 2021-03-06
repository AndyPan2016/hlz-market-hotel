/**
 * 工具包
 * @author AndyPan
 * @createdate 2019年3月31日11:06:48
 * @lastupdatedate 2019年3月31日11:07:03
 * @remark 辅助工具
 */

import { STATUS, APPID, ENVVERSION } from '@/configs'
import { CommonsService } from '@/services'

import { userAuthorize } from './user-authorize'
import tips from './tips'
import { wxShake } from './shake'
import Cryptos from './cryptos'
import { dataPipe } from './data-pipe'
import { compose } from './compose'
import { hexMD5 } from './md5'
import { Patch } from './patch'

// Utils公共辅助方法
export const Utils = {
  /**
   * 处理Promise
   * @param {Promise} 需要处理的Promise对象
   * @returns {Array} 处理后的结果[错误消息， 其他]
   */
  promiseTo (promise) {
    if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
      return new Promise((resolve, reject) => {
        reject(new Error("requires promises as the param"));
      }).catch((err) => {
        return [err, null];
      });
    }
    return promise.then(function () {
      return [null, ...arguments];
    }).catch(err => {
      return [err, null];
    });
  },
  /**
   * 合并数据(包括JSON对象和数组)
   * @param {*} origin 源数据
   * @param {*} data 需要合并的数据
   * @returns {Object | Array} 合并后的数据
   */
  merge (origin = {}, data = {}) {
    let isArray = Object.prototype.toString.call(origin) === '[object Array]';
    if (isArray) {
      return origin.concat(data);
    }
    else {
      for (let key in data) {
        origin[key] = data[key];
      }
      return origin;
    }
  },
  /**
   * 遍历数据
   * @param {*} data 
   * @param {*} callBack 
   */
  forEach (data, callBack) {
    let tempData = [];
    if (data) {
      let item, cbResult;
      for (let key in data) {
        item = data[key];
        if (callBack) {
          cbResult = callBack(item, key);
          if (cbResult == 'break') {
            tempData = 'break';
            break;
          }
          if (cbResult) {
            tempData.push(cbResult);
          }
        }
      }
    }
    return tempData;
  },
  /**
   * 异步遍历数据
   * @param {*} data 
   * @param {*} cb 
   * @param {*} last 
   */
  asyncEach (data, cb, last, timer) {
    timer = timer || 0
    if (data) {
      let i = 0;
      let len = data.length;
      let item;
      let each = () => {
        item = data[i];
        if (cb) {
          cb(item, i);
        }
        i++;
        if (i < len) {
          setTimeout(each, 0);
        } else {
          if (last) {
            last();
          }
        }
      };
      if (len) {
        each();
      }
      else if (last) {
        last();
      }
    }
  },
  /**
   * 时间戳
   */
  timeStamp () {
    return (new Date()).valueOf() + '';
  },
  /**
   * 四舍五入(保留两位小数)
   * @param {String} value 值
   * @param {Boolean} flag 是否四舍五入
   */
  toFixed (value, flag) {
    if (flag) {
      value = value.toFixed(2);
    }
    else {
      value = value.toString()
      let idxOf = value.indexOf('.');
      value = idxOf > -1 ? (idxOf < value.length - 3 ? value.substring(0, idxOf + 3) : value) : value;
    }

    return value;
  },
  /**
   * 活动中转逻辑
   * @param {活动ID} activityId 
   * @param {回调} callBack 
   */
  activityTransfer(options) {
    let callBack = options.callBack
    let activityId = options.activityId
    let isResultSelf = options.isResultSelf

    let userSpecialInfo = wx.getStorageSync(STATUS.USER_SPECIAL_INFO)
    let userNo = wx.getStorageSync(STATUS.USER_NO)
    if (userSpecialInfo && !userNo) {
      userNo = (userSpecialInfo || {}).userNo
      wx.setStorageSync(STATUS.USER_NO, userNo)
    }

    let params = {}
    if (activityId) {
      params['activityId'] = activityId
    }
    if (userNo) {
      params['userNo'] = userNo
    }

    CommonsService.activityInfo({
      data: params
    }).then(res => {
      let resData = res.data || {}
      let resActivityId = resData.activityId
      let activityInfo = resData.activityInfo
      let resultPage = resData.resultPage
      let gameType = activityInfo.gameType

      let callBackResult
      if (callBack) {
        callBackResult = callBack(resData)
        if (callBackResult === false || callBackResult === 'false') {
          return false
        }
      }

      if (resultPage === 0) {
        // 是否可以参与活动
        Tips.msg('无权限参与活动')
      } else if (resultPage === 1) {
        // 是否微信认证
      } else if (resultPage === 3){
        // 是否显示关系
      } else if (resultPage === 5){
        // 是否领取过红包
        wx.reLaunch({ url: '/subpackages/MarketActivityShake/pages/game-result' })
      } else if (resultPage === 7) {
        // 直接跳个人中心页面
        wx.reLaunch({ url: '/subpackages/MarketHotel/pages/my-wallet' })
      } else if (resultPage === 9) {
        // 无活动，跳转中间页
        wx.reLaunch({
          url: 'no-activity?business=' + resData.activityMemberId
        })
      } else if (resultPage === 11) {
        // 跳转暖场页
        wx.reLaunch({
          url: 'activity-transfer?activityId=' + resActivityId + '&isResultSelf=' + isResultSelf
        })
      }
    }).catch(err => {
      Tips.error(err.message)
    })
  },
  /**
   * 打开新的小程序
   * @param {*} options 
   */
  openNewProcedures(options, success, fail) {
    if (typeof (options) === 'string') {
      options = {
        path: options,
        success: success,
        fail: fail
      }
    }
    let path = options.path || 'subpackages/OnlineRetailers/pages/index'
    let defaultParam = path.indexOf('?') > -1 ? '&' : '?'
    path = path + defaultParam + 'goshow=1'
    
    wx.navigateToMiniProgram({
      appId: 'wxb3b29916859d5120',
      path: path,
      extraData: options.extraData || {},
      // develop.开发版 trial.体验版 release.正式版
      envVersion: ENVVERSION || 'release',
      success(res) {
        if (options.success) {
          options.success(res)
        }
      },
      fail(res) {
        if (options.fail) {
          options.fail(res)
        }
      },
      complete(res) {
        if (options.complete) {
          options.complete(res)
        }
      }
    })
  },
  /**
   * 获取系统信息
   * @param {*} callBack 
   */
  getSystemInfo(callBack) {
    let _this = this
    wx.getSystemInfo({
      success: function(res) {
        if (callBack) {
          callBack(res)
        }
        let model = res.model
        wx.setStorageSync(STATUS.PHONEINFO, res)
        wx.setStorageSync(STATUS.PHONESYSTEM, res.platform)
        wx.setStorageSync(STATUS.PHONEMODEL, model)
        
        if (model.search('iPhone X') !== -1) {
          _this.$parent.globalData.iphoneX = true
        } else {
          _this.$parent.globalData.iphoneX = false
        }
      }
    })
  },
  /**
   * 获取顶部导航栏高度
   */
  getNavBarHeight() {
    let systemInfo = wx.getSystemInfoSync()
    // 胶囊按钮位置信息
    let rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null
    // 导航栏高度
    let navBarHeight = (function () {
      // 动态计算每台手机状态栏到胶囊按钮间距
      let gap = rect.top - systemInfo.statusBarHeight
      return 2 * gap + rect.height
    })()

    return (navBarHeight + systemInfo.statusBarHeight) * 2
  },
  isExceedDate (date) {
    let currentDate = new Date()
    let limitDate = new Date(date || '2019-11-16 15:00:00')
    return currentDate.getTime() > limitDate.getTime()
  }
};

// 用户微信授权公共操作
export const UserAuthorize = userAuthorize;
// MD5
// export const MD5 = md5;
// Tips
export const Tips = tips;
// 微信摇一摇
export const WXShake = wxShake;
// 微信解密
export const WXBizDataCrypt = Cryptos;

export const DataPipe = dataPipe;

export const Compose = compose;

export const HexMD5 = hexMD5

export const PATCH = Patch
