/**
 * 酒店接口服务
 * @author AndyPan
 * @createdate 2019年6月14日16:17:04
 * @lastupdatedate 2019年6月14日16:17:08
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
  { service: 'hotelInfo', remark: '酒店基本信息' },
  { service: 'hotelAdvertisingListInfo', remark: '酒店广告列表信息' },
  { service: 'hotelTrackAdd', remark: '增加酒店足迹' },
  { service: 'hotelTicketList', remark: '酒店卡券列表' },
  { service: 'receiveHotelTicket', remark: '领取酒店卡券' }
]

export const hotelInfoService = BaseService.structureService(serviceArys)