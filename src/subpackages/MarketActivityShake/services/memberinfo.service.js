/**
 * 微信用户授权登录相关接口
 * @author AndyPan
 * @createdate 2019年3月31日13:46:40
 * @lastupdatedate 2019年3月31日13:47:03
 * @remark 验证授权登录后保存数据等相关接口
 */

import { Utils } from '@/utils'
import { BaseService } from './base.service'

export const memberInfoService = {
    /**
     * 用户信息
     * @param {{data:{userNo:string}}} params 接口参数
     */
    memberInfo(params = {}) {
        params.data = Utils.merge({
            'service': 'memberInfo',
            'userNo': ''
        }, params.data)
        return BaseService.userRequest(params)
    },
    /**
     * 获取用户优惠劵
     * @param {{data:{userNo:string,start:number,limit:number}}} params 
     */
    myHotelTicketList(params = {}) {
        params.data = Utils.merge({
            'service': 'myHotelTicketList',
            'userNo': '',
            'start': 1,
            'limit': 20
        }, params.data)
        return BaseService.userRequest(params)
    },
    /**
     * 提现
     * @param {{data:{userNo:string,amount:string}}} params 
     */
    withdraw(params = {}) {
        params.data = Utils.merge({
            'service': 'withdraw',
            'userNo': '',
            'amount': ''
        }, params.data)
        return BaseService.userRequest(params)
    }
};