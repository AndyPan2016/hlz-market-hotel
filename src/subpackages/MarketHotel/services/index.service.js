/**
 * 首页接口服务
 * @author AndyPan
 * @createdate 2019年4月30日17:46:02
 * @lastupdatedate 2019年4月30日17:46:06
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
  { service: 'hotelInfo', remark: '酒店基本信息' },
  { service: 'hotelExtendsInfo', remark: '酒店拓展信息' },
  { service: 'hotelBanquetHallListInfo', remark: '酒店宴会厅列表信息(小程序)' },
  { service: 'myHotelBanquetHallListInfo', remark: '酒店宴会厅详细数据' },
  { service: 'hotelSetMealList', remark: '酒店套餐列表' },
  { service: 'hotelSetMealDishesList', remark: '酒店套餐菜品列表' },
  { service: 'hotelAdvertisingListInfo', remark: '酒店广告列表信息' },
  { service: 'hotelTrackAdd', remark: '增加酒店足迹' },
  { service: 'modulePrivilegeCheck', remark: '校验模块权限' }
]

export const indexService = BaseService.structureService(serviceArys)

// export const indexService = {
//     /**
//      * 酒店基本信息
//      * @param {Object} params 接口参数
//      */
//     hotelInfo(params = {}) {
//         return BaseService.myServiceRequest(params, 'hotelInfo')
//     },
//     /**
//      * 酒店基本信息
//      * @param {Object} params 接口参数
//      */
//     hotelExtendsInfo(params = {}) {
//         return BaseService.myServiceRequest(params, 'hotelExtendsInfo')
//     },
//     /**
//      * 酒店宴会厅列表信息(小程序)
//      * @param {Object} params 接口参数
//      */
//     hotelBanquetHallListInfo(params = {}) {
//         return BaseService.myServiceRequest(params, 'hotelBanquetHallListInfo')
//     },
//     /**
//      * 酒店套餐列表
//      * @param {Object} params 接口参数
//      */
//     hotelSetMealList(params = {}) {
//         return BaseService.myServiceRequest(params, 'hotelSetMealList')
//     }
// }