/**
 * 语言配置
 * @author AndyPan
 * @createdate 2019年3月31日11:02:06
 * @lastupdatedate 2019年3月31日11:02:11
 * @remark 包含所有语言文本信息配置（如：提示、名称等）
 */

// 语言配置
let langConfigs = {
    zh: {
        // APP名称
        AppName: '运营宝',
        // 授权失败
        AuthorizeFaile: '授权失败',
        // 卡券类型
        couponType: {
            'baobao': {text: '宝宝宴'},
            'birthday': {text: '生日宴'},
            'marry': {text: '婚宴'},
            'wedding': {text: '婚庆'}
        },
        // 卡券消费类型
        couponConsumeType: {
            'full_reduction': {text: '满减券'},
            'reach': {text: '抵用券'},
            'discount': {text: '折扣券'}
        }
    },
    ch: {
        // APP Name
        AppName: 'APP Name'
    }
};
// 语言类型
let langType = 'zh';

export const Lang = langConfigs[langType];
