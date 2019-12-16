/**
 * 我的预约单接口服务
 * @author AndyPan
 * @createdate 2019年5月6日16:41:27
 * @lastupdatedate 2019年5月6日17:28:46
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
    {service: 'myReserveList', remark: '我的预约单列表'}
]

export const appointmentService = BaseService.structureService(serviceArys)