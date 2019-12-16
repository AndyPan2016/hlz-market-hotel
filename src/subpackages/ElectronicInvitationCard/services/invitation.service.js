/**
 * 请柬接口服务
 * @author AndyPan
 * @createdate 2019年6月17日13:47:34
 * @lastupdatedate 2019年6月17日13:47:37
 * @remark
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
  { service: 'invitationWishCollect', remark: '祝福语收集' },
  { service: 'invitationAttendanceCollect', remark: '宾客反馈收集' },
  { service: 'invitationAttendanceQuery', remark: '宾客反馈查询' },
  { service: 'invitationNoticeOpen', remark: '宾客消息通知' },
  { service: 'invitationGiftConsigneeCollect', remark: '宾客伴手礼地址收集' },
  { service: 'invitationDelete', remark: '电子请柬删除' },
  {
    service: 'invitationGiftConsigneePageListQuery',
    remark: '伴手礼领取记录查询'
  },
  { service: 'modulePrivilegeCheck', remark: '校验模块权限' }
]

export const invitationService = BaseService.structureService(serviceArys)
