/*
 * @Description: 电子请柬首页服务
 * @Author: huyanhai
 * @since: 2019-06-11 10:07:48
 * @lastTime: 2019-08-02 18:50:23
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
  { service: 'myInvitationPageListQuery', remark: '我的电子请柬信息分页查询' },
  { service: 'invitationTemplateQuery', remark: '电子请柬模板列表查询' },
  { service: 'invitationBasicInfoSave', remark: '电子请柬基本信息保存' },
  { service: 'invitationAttendancePageListQuery', remark: '宾客反馈列表查询' },
  // { service: 'invitationAttendancePageListQuery', remark: '宾客反馈列表查询' },
  { service: 'invitationWishCollect', remark: '祝福语收集' },
  { service: 'invitationWishListQuery', remark: '祝福语列表查询' },
  { service: 'invitationMusicPageListQuery', remark: '背景音乐列表查询' },
  { service: 'invitationWishPageListQuery', remark: '祝福语全列表分页查询' },
  { service: 'invitationBasicInfoQuery', remark: '电子请柬基本信息查询' },
  { service: 'invitationPagesQuery', remark: '电子请柬所有页面信息查询' },
  { service: 'invitationContentSave', remark: '电子请柬页面信息保存' },
  { service: 'invitationMusicSet', remark: '背景音乐设置' },
  { service: 'hotelInfo', remark: '酒店基本信息' },
  { service: 'invitationShare', remark: '电子请柬修改分享状态' },
  {
    service: 'invitationGiftConsigneeListQueryByIds',
    remark: '伴手礼领取记录查询'
  },
  { service: 'invitationGiftConsigneeQuery', remark: '伴手礼领取信息' }
]

export const indexService = BaseService.structureService(serviceArys)
