/**
 * 首页接口服务
 * @author AndyPan
 * @createdate 2019年4月30日17:46:02
 * @lastupdatedate 2019年4月30日17:46:06
 * @remark 
 */

import { BaseService } from './base.service'

let serviceArys = [
  { service: 'hotelBanquetReserve', remark: '预约酒店' },
  { service: 'wechatAuthVerify', remark: '登录凭证校验(小程序)' },
  { service: 'memberInfo', remark: '用户信息' },
  { service: 'hotelBanquetInfo', remark: '酒店宴会信息' },
  // 接口名：hotelBanquetBinding    变更为  activityBinding (2019年6月10日15:01:37)
  // {service: 'hotelBanquetBinding', remark: '酒店宴会绑定'},
  { service: 'activityBinding', remark: '酒店宴会绑定' },
  { service: 'activityGameList', remark: '活动列表' },
  { service: 'activityGameControl', remark: '活动控制' },
  { service: 'hotelBanquetHallRoute', remark: '酒店宴会厅活动' },
  { service: 'wechatBindingMobile', remark: '绑定手机号' },
  {service: 'activityInfo', remark: '活动信息'},
  {service: 'hotelTrackAdd', remark: '酒店足迹'},
  { service: 'memberUnionIdSave', remark: '用户微信unionId保存' },
  { service: 'commentPublish', remark: '发布评论' },
  { service: 'commentList', remark: '评论查询' },
  { service: 'commentDelete', remark: '删除评论' },
  { service: 'activityRoute', remark: '通过固定标识参与活动' }
]

export const commonsService = BaseService.structureService(serviceArys)