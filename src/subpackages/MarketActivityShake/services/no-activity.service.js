/**
 * 无活动相关接口
 * @author AndyPan
 * @createdate 2019年6月3日16:35:37
 * @lastupdatedate 2019年6月3日16:35:40
 * @remark
 */

import { Utils } from '@/utils'
import { BaseService } from './base.service'

export const noActivityService = {
  /**
   * 获取酒店信息
   * @param {{data:{userNo:string}}} params 接口参数
   */
  hotelInfo (params) {
    params.data = Utils.merge({
      'service': 'hotelInfo'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 获取酒店信息
   * @param {{data:{userNo:string}}} params 接口参数
   */
  activityPraise (params) {
    params.data = Utils.merge({
      'service': 'activityPraise'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 活动游戏列表信息
   * @param {} params 接口参数
   */
  activityGameListInfo (params) {
    params.data = Utils.merge({
      'service': 'activityGameListInfo'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 参与游戏跳转页面
   * @param {} params 接口参数
   */
  playGameRedirectPage (params) {
    params.data = Utils.merge({
      'service': 'playGameRedirectPage'
    }, params.data)
    return BaseService.userRequest(params)
  }
}