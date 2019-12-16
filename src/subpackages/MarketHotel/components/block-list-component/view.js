/**
 * 块内容列表组件-业务逻辑
 * @Author: AndyPan
 * @CreateDate: 2019年4月29日10:47:14
 * @LastUpdateDate: 2019年4月29日10:47:33
 * @Remarks: 备注
*/

import wepy from 'wepy'

export default class BlockListComponent extends wepy.component {
  // 接收外部传入的参数
  props = {
    nullTips: {type: String, default: '暂无数据'},
    // 自定义class
    class: { type: String },
    // 数据集合
    dataset: { type: Array | String },
    // 点击事件
    onItemTap: { type: Function },
    onChildItemTap: { type: Function }
  }
  // 模板(绑定)数据
  data = {}
  // 用于监听组件之间的通信与交互事件的事件处理函数集合
  events = {}

  methods = {
    itemTap(e) {
      let dataset = e.currentTarget.dataset
      if (this.onItemTap) {
        this.onItemTap.call(this.$parent, dataset, e)
      }
      this.$emit('onItemTap', dataset)
    },
    childItemTap(e) {
      let dataset = e.currentTarget.dataset
      if (this.onChildItemTap) {
        this.onChildItemTap.call(this.$parent, dataset, e)
      }
      this.$emit('onChildItemTap', dataset)
    }
  }
}
