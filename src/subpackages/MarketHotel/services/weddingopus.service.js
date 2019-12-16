/**
 * 婚礼作品接口服务
 * @author AndyPan
 * @createdate 2019年7月1日09:36:49
 * @lastupdatedate 2019年7月1日09:36:51
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
  { service: 'casesPageListQuery', remark: '案例信息分页查询' },
  { service: 'casesDetailQuery', remark: '查询案例详情信息' },
  { service: 'casesBehaviorCollect', remark: '用户浏览案例行为收集' }
]

export const weddingOpusService = BaseService.structureService(serviceArys)