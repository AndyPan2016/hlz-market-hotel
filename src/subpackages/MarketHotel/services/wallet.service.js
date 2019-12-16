/**
 * 我的钱包接口服务
 * @author AndyPan
 * @createdate 2019年5月7日13:40:13
 * @lastupdatedate 2019年5月7日14:08:49
 * @remark 
 */

import { BaseService } from '@/services/base.service'

let serviceArys = [
    {service: 'customerAccountDetail', remark: '用户进出帐'},
    {service: 'memberInfo', remark: '会员信息'},
    {service: 'withdraw', remark: '提现'}
]

export const walletService = BaseService.structureService(serviceArys)