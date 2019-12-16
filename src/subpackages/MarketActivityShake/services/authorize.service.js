/**
 * 微信用户授权登录相关接口
 * @author AndyPan
 * @createdate 2019年3月31日13:46:40
 * @lastupdatedate 2019年3月31日13:47:03
 * @remark 验证授权登录后保存数据等相关接口
 */

import wepy from 'wepy'
import { Utils } from '@/utils'
import { STATUS } from '../configs'
import { BaseService } from './base.service'

export const authorizeService = {
    /**
     * 登录凭证校验(小程序)
     * @param {Object} params 接口参数
     */
    wechatAuthVerify(params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'wechatAuthVerify'
        })
        return BaseService.request(params)
    },
    /**
     * 绑定微信手机号
     * @param {Object} params 接口参数
     */
    wechatBindingMobile(params = {}) {
        params.data = Utils.merge(params.data, {
            'service': 'wechatBindingMobile'
        })
        return BaseService.request(params)
    },
    /**
     * 修改信息
     * @param {Object} params 接口参数
     */
    memberInfoUpdate(params = {}) {
        let userInfo = wepy.getStorageSync(STATUS.USER_SPECIAL_INFO);
        params.data = Utils.merge({
            'userNo': userInfo.userNo,
            'service': 'memberInfoUpdate',
            'avatarUrl': '',
            'nickName': ''
        }, params.data);
        return BaseService.userRequest(params);
    }
};