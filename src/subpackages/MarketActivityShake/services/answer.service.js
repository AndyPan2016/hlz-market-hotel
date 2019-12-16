/**
 * 游戏相关接口
 * @author AndyPan
 * @createdate 2019年11月6日18:05:50
 * @lastupdatedate
 * @remark
 */

import { Utils } from '@/utils'
import { BaseService } from './base.service'

export const answerService = {
  /**
   * 游戏配置
   * @param {{}} params 接口参数
   */
  qaGameConfig (params) {
    params.data = Utils.merge({
      'service': 'qaGameConfig'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 答题游戏问题列表
   * @param {{}} params 接口参数
   */
  qaGameQuestionsList (params) {
    params.data = Utils.merge({
      'service': 'qaGameQuestionsList'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 排行榜
   * @param {{}} params 接口参数
   */
  gameCountNumRanking (params) {
    params.data = Utils.merge({
      'service': 'gameCountNumRanking'
    }, params.data)
    return BaseService.userRequest(params)
  },
  /**
   * 游戏提交结果
   * @param {{}} params 接口参数
   */
  gameCountNumSubmitResult (params) {
    params.data = Utils.merge({
      'service': 'gameCountNumSubmitResult'
    }, params.data)
    return BaseService.userRequest(params)
  }
}