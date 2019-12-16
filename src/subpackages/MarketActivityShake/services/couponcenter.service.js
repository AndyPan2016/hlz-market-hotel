/**
 * 卡券中心服务
 * @author AndyPan
 * @createdate 2019年4月9日11:42:41
 * @lastupdatedate 2019年3月31日13:47:03
 * @remark 卡券中心相关接口
 */

import { Utils } from '@/utils'
import { BaseService } from './base.service'

export const couponcenterService = {
    /**
     * 酒店卡券列表
     * @param {Object} params 接口参数
     */
    hotelTicketList(params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'hotelTicketList'
        })
        return BaseService.userRequest(params)
    },
    /**
     * 我的卡券列表
     * @param {Object} params 接口参数
     */
    myHotelTicketList (params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'myHotelTicketList'
        })
        return BaseService.userRequest(params)
    },
    /**
     * 领取卡券
     * @param {Object} params 接口参数
     */
    receiveHotelTicket (params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'receiveHotelTicket'
        })
        return BaseService.userRequest(params)
    }
};