/**
 * 红包服务
 * @author AndyPan
 * @createdate 2019年4月9日10:43:38
 * @lastupdatedate 2019年4月9日11:42:33
 * @remark 红包相关接口
 */

import { Utils } from '@/utils'
import { BaseService } from './base.service'

export const redpacketService = {
    /**
     * 领红包
     * @param {Object} params 接口参数
     */
    receiveRedPack (params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'receiveRedPack'
        })
        return BaseService.userRequest(params)
    },
    /**
     * 红包记录
     * @param {Object} params 接口参数
     */
    redPackOrder (params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'redPackOrder'
        })
        return BaseService.userRequest(params)
    },
    /**
     * 活动信息
     * @param {Object} params 接口参数
     */
    activityInfo (params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'activityInfo'
        })
        return BaseService.userRequest(params)
    },
    /**
     * 红包游戏配置
     * @param {Object} params 接口参数
     */
    gameRedPackConfig (params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'gameRedPackConfig'
        })
        return BaseService.userRequest(params)
    }
};