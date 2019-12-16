/**
 * 基础服务
 * @author AndyPan
 * @createdate 2019年3月31日13:53:50
 * @lastupdatedate 2019年3月31日13:53:53
 * @remark 
 */

import wepy from 'wepy'
import {
    API_PARTNER_ID, API_ACCESS_KEY, API_SECRET_KEY, API_HOST, API_GATEWAY,
    API_PROTOCOL, API_VERSION, API_APP_CLIENT, API_SIGN_TYPE, API_CONTENT_TYPE
} from '@/configs';
import { Utils, Tips, MD5 } from '@/utils';
import { STATUS } from '@/configs';
import CryptoJS from 'crypto-js';

const genSign = function(data, secretKey) {
    let str = JSON.stringify(data) + secretKey
    // let sign = MD5.md5(str)
    let sign = CryptoJS.MD5(str).toString();
    return sign;
}
// const _formatNumber = n => {
//     n = n.toString();
//     return n[1] ? n : '0' + n;
// }
// const genRequestNo = function() {
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = date.getMonth() + 1;
//     var day = date.getDay();
//     var hour = date.getHours();
//     var minute = date.getMinutes();
//     var second = date.getSeconds();
//     return [year, month, day, hour, minute, second].map(_formatNumber).join('') + '';
// }

export const BaseService = {
    /**
     * 网络请求
     * @param {Object} params 参数对象
     * @param {String} url 请求路径
     */
    async request(params = {}, url = (API_HOST + API_GATEWAY), isLoading) {
        let partnerId = params.partnerId || API_PARTNER_ID;
        let accessKey = params.accessKey || API_ACCESS_KEY;
        let secretKey = params.secretKey || API_SECRET_KEY;

        if (url === '') {
            throw { message:'url cannot be null' };
        }
        if (partnerId === '') {
            throw { message:'partnerId cannot be null' };
        }
        if (accessKey === '') {
            throw { message:'accessKey cannot be null' };
        }
        if (secretKey === '') {
            throw { message:'secretKey cannot be null' };
        }

        let paramsData = params.data || {};
        let requestNo = Utils.timeStamp();
        let method =  params.method || 'post';
        // 扩展公共参数
        paramsData = Utils.merge({
            'partnerId': partnerId,
            // 'protocol': API_PROTOCOL,
            'version': API_VERSION,
            // 'appClient': API_APP_CLIENT,
            'requestNo': requestNo
        }, paramsData);
        // 签名
        let sign = genSign(paramsData, secretKey);
        if (isLoading !== false) {
            // 请求网络
            Tips.loading()
        }
        let res;
        try{
            res = await wepy.request({
                url: url,
                method: method,
                data: paramsData,
                header: {
                    'x-api-signType': API_SIGN_TYPE,
                    'x-api-sign': sign,
                    'x-api-accessKey': accessKey,
                    'content-type': API_CONTENT_TYPE
                }
            });
        }
        catch(e){}
        Tips.loaded()
        let statusCode = (res && res.statusCode) || 0;
        if (statusCode !== 200) {
            throw { message:'服务器错误, 请联系管理员' };
        }

        let success = (res && res.data && res.data['success']) || false;
        
        if (!success) {
            throw { 
                code: (res && res.data && res.data['code']) || 'fail',
                message: (res && res.data && res.data['message']) || '服务器错误, 请联系管理员'
            }
        }
        return res.data;
    },
    async userRequest(params, url, isLoading) {
        let userInfo = await wepy.getStorageSync(STATUS.USER_SPECIAL_INFO);
        let partnerId;
        let accessKey;
        let secretKey;
        if (userInfo) {
            partnerId = userInfo.partnerId;
            accessKey = userInfo.accessKey;
            secretKey = userInfo.secretKey;
        }
        params = Utils.merge({
            partnerId,
            accessKey,
            secretKey
        }, params);
        return this.request(params, url, params.isLoading)
    }
};
