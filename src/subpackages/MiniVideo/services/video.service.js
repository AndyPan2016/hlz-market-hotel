/**
 * 视频接口服务
 * @author AndyPan
 * @createdate 2019年10月24日13:54:08
 * @lastupdatedate 2019年10月24日13:54:11
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
  { service: 'videoList', remark: '视频列表' },
  { service: 'videoLikes', remark: '视频点赞' },
  { service: 'videoPlayback', remark: '视频播放' },
  { service: 'videoCommerceProductInfo', remark: '商品详情' },
  { service: 'videoBrowseLogAdd', remark: '添加用户浏览商品记录' }
]

export const videoService = BaseService.structureService(serviceArys)