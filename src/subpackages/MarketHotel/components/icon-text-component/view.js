/**
 * 图标组件-业务逻辑
 * @Author: AndyPan
 * @CreateDate: 2019年4月25日17:41:37
 * @LastUpdateDate: 2019年4月25日17:41:40
 * @Remarks: 备注
*/

import wepy from 'wepy'

export default class IconTextComponent extends wepy.component {
  // 接收外部传入的参数
  props = {
    // 自定义class
    class: { type: String },
    // 图标数据
    dataset: { type: Array },
    // 每行显示item数
    itemCount: { type: String | Number, default: 3 },
    // 图标项点击事件
    onIconItemTap: { type: Function }
  }
  // 模板(绑定)数据
  data = {
  }
  // 用于监听组件之间的通信与交互事件的事件处理函数集合
  events = {}

  methods = {
    /**
     * 图标项点击事件
     * @param {Object} e Event对象
     */
    iconItemTap (e) {
      let dataset = e.target.dataset || {}

      // 响应on事件
      let onIconItemTap = this.onIconItemTap
      if (onIconItemTap) {
        onIconItemTap.call(this.$parent, dataset, e)
      }

      // 触发用户事件
      this.$emit('onIconItemTap', dataset)
    }
  }

  onLoad () {
    // this.itemCount = this.dataset.length
    // this.$apply()
  }
}