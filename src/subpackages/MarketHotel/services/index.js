/**
 * （所有）接口服务
 * @author AndyPan
 * @createdate 2019年4月23日13:54:19
 * @lastupdatedate 2019年4月23日13:54:22
 * @remark 
 */

// 首页服务
import { indexService } from './index.service'
// 我的预约单
import { appointmentService } from './appointment.service'
// 我的卡券
import { couponService } from './coupon.service'
// 我的足迹
import { footmarkService } from './footmark.service'
// 我的钱包
import { walletService } from './wallet.service'
// 婚礼作品
import { weddingOpusService } from './weddingopus.service'

export const IndexService = indexService
export const AppointmentService = appointmentService
export const CouponService = couponService
export const FootmarkService = footmarkService
export const WalletService = walletService
export const WeddingOpusService = weddingOpusService