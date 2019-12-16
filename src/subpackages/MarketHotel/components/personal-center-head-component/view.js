/**
 * 个人中心组件-业务逻辑
 * @Author: AndyPan
 * @CreateDate: 2019年4月28日11:21:55
 * @LastUpdateDate: 2019年4月28日11:21:58
 * @Remarks: 备注
*/

import wepy from 'wepy'
import { RESOURCE_PATCH } from '@/configs'

export default class PersonalCenterHeadComponent extends wepy.component {
  // 接收外部传入的参数
  props = {
    // 自定义class
    class: { type: String },
    // 数据
    dataset: { type: Object, default: {} }
  }
  // 模板(绑定)数据
  data = {
    resourcePath: RESOURCE_PATCH
  }
  // 用于监听组件之间的通信与交互事件的事件处理函数集合
  events = {}
}