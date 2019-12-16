/*
 * @Description: 电子请柬所有接口服务
 * @Author: huyanhai
 * @since: 2019-06-11 10:07:44
 * @lastTime: 2019-06-11 10:08:24
 */

// 首页服务
import { indexService } from './index.service'
// 酒店信息服务
import { hotelInfoService } from './hotelinfo.service'
// 请柬服务
import { invitationService } from './invitation.service'

export const IndexService = indexService

export const HotelInfoService = hotelInfoService

export const InvitationService = invitationService
