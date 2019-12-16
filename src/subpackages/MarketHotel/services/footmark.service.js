/**
 * 我的足迹接口服务
 * @author AndyPan
 * @createdate 2019年5月6日17:30:20
 * @lastupdatedate 2019年5月6日17:30:56
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
    {service: 'memberHotelTrackList', remark: '游客足迹分页展示'},
    {service: 'activityMemberTrack', remark: '用户活动足迹'}
]

export const footmarkService = BaseService.structureService(serviceArys)