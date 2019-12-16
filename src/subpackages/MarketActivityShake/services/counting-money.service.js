/**
 * 无活动相关接口
 * @author AndyPan
 * @createdate 2019年6月3日16:35:37
 * @lastupdatedate 2019年6月3日16:35:40
 * @remark
 */

import { Utils } from '@/utils'
import { BaseService } from './base.service'

export const countingMoneyService = {
  /**
   * 计数游戏配置
   * @param {{}} params 接口参数
   */
  gameCountNumConfig (params) {
    params.data = Utils.merge({
      'service': 'gameCountNumConfig'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 计数游戏排行榜
   * @param {{}} params 接口参数
   */
  gameCountNumRanking (params) {
    params.data = Utils.merge({
      'service': 'gameCountNumRanking'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 计数游戏提交结果
   * @param {{}} params 接口参数
   */
  gameCountNumSubmitResult (params) {
    params.data = Utils.merge({
      'service': 'gameCountNumSubmitResult'
    }, params.data)
    return BaseService.userRequest(params)
  }
}