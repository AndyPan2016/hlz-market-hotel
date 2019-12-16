/**
 * 关系确认服务
 * @author AndyPan
 * @createdate 2019年4月3日17:23:10
 * @lastupdatedate 2019年3月31日13:47:03
 * @remark 验证授权登录后保存数据等相关接口
 */

import { Utils } from '@/utils'
import { BaseService } from './base.service'

export const relationshipService = {
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
     * 活动成员-选择关系
     * @param {Object} params 接口参数
     */
    activityMember (params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'activityMember'
        })
        return BaseService.userRequest(params)
    }
};