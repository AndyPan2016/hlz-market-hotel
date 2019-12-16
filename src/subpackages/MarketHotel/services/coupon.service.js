/**
 * 我的卡券接口服务
 * @author AndyPan
 * @createdate 2019年5月6日17:30:20
 * @lastupdatedate 2019年5月6日17:30:56
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
    {service: 'myHotelTicketList', remark: '我的卡券列表'},
    {service: 'memberTicketQuery', remark: '优惠券信息查询'}
]

export const couponService = BaseService.structureService(serviceArys)