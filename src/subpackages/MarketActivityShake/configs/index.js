/**
 * 全局配置
 * @author AndyPan
 * @createdate 2019年3月31日10:03:02
 * @lastupdatedate 2019年3月31日10:03:13
 * @remark 针对不同环境的相关配置项：api接口等信息
 */

import { Lang } from './lang';
import { Status } from './status';

// 当前环境
let environment = 'develop'
// 环境配置
let configs = {
    // 开发环境
    develop: {
        // 入口路径
        portalPath: 'https://app.amyglzx.com/',
        // API Host
        apiHost: 'http://market.test.ihunlizhe.com/',
        // apiHost: 'http://127.0.0.1:8088/',
        // apiHost: 'https://market.ihunlizhe.com/',
        // API GateWay
        apiGateWay: 'gateway.do',
        apiPartnerId: '19041710345418390103',
        apiAccessKey: '19041710345418390103',
        apiSecretKey: '81b6f46052bbfec2e2786fc475bb7477',
        apiProtocol: 'HTTP_FORM_JSON',
        apiVersion: '1.0',
        apiAppClient: true,
        apiSignType: 'MD5',
        apiContentType: 'application/json;charset=UTF-8',
        defaultPartnerId: 'test',
        defaultAccessKey: 'test',
        defaultSecretKey: '06f7aab08aa2431e6dae6a156fc9e0b4',
        resourcePath: 'https://media.ihunlizhe.com/market/'
    },
    // 测试环境
    test: {
        // 入口路径
        portalPath: 'https://app.amyglzx.com/',
        // API Host
        apiHost: 'http://market.test.ihunlizhe.com/',
        // API GateWay
        apiGateWay: 'gateway.do',
        apiPartnerId: 'test',
        apiAccessKey: 'test',
        apiSecretKey: '06f7aab08aa2431e6dae6a156fc9e0b4',
        apiProtocol: 'HTTP_FORM_JSON',
        apiVersion: '1.0',
        apiAppClient: true,
        apiSignType: 'MD5',
        apiContentType: 'application/json;charset=UTF-8',
        defaultPartnerId: 'test',
        defaultAccessKey: 'test',
        defaultSecretKey: '06f7aab08aa2431e6dae6a156fc9e0b4',
        resourcePath: 'https://media.ihunlizhe.com/market/'
    },
    // 生产环境
    build: {
        // 入口路径
        portalPath: 'https://app.amyglzx.com/',
        // API Host
        apiHost: 'https://market.ihunlizhe.com/',
        // API GateWay
        apiGateWay: 'gateway.do',
        apiPartnerId: '19041710345418390103',
        apiAccessKey: '19041710345418390103',
        apiSecretKey: '81b6f46052bbfec2e2786fc475bb7477',
        apiProtocol: 'HTTP_FORM_JSON',
        apiVersion: '1.0',
        apiAppClient: true,
        apiSignType: 'MD5',
        apiContentType: 'application/json;charset=UTF-8',
        defaultPartnerId: 'test',
        defaultAccessKey: 'test',
        defaultSecretKey: '06f7aab08aa2431e6dae6a156fc9e0b4',
        resourcePath: 'https://media.ihunlizhe.com/market/'
    }
}

// 当前配置
let environmentConfigs = configs[environment];

// 入口路径
export const PORTAL_PATH = environmentConfigs.portalPath;
// API Host
export const API_HOST = environmentConfigs.apiHost;
// API GateWay
export const API_GATEWAY = environmentConfigs.apiGateWay;
export const API_PARTNER_ID = environmentConfigs.apiPartnerId;
export const API_ACCESS_KEY = environmentConfigs.apiAccessKey;
export const API_SECRET_KEY = environmentConfigs.apiSecretKey;
export const API_PROTOCOL = environmentConfigs.apiProtocol;
export const API_VERSION = environmentConfigs.apiVersion;
export const API_APP_CLIENT = environmentConfigs.apiAppClient;
export const API_SIGN_TYPE = environmentConfigs.apiSignType;
export const API_CONTENT_TYPE = environmentConfigs.apiContentType;
export const RESOURCE_PATCH = environmentConfigs.resourcePath;

// 语言配置
export const LANG = Lang;
// 状态配置
// export const STATUS = Status;

import { ENVIRONMENT } from '@/configs';

let thisStatus = {}
for (let key in Status) {
    thisStatus[key] = ENVIRONMENT + '_' + Status[key]
}
// 状态配置
export const STATUS = thisStatus

