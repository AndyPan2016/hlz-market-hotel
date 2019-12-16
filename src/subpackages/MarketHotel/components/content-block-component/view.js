/**
 * 内容块组件-业务逻辑
 * @Author: AndyPan
 * @CreateDate: 2019年4月23日15:21:01
 * @LastUpdateDate: 2019年4月23日15:21:05
 * @Remarks: 备注
*/

import wepy from 'wepy'

export default class ContentBlockComponent extends wepy.component {
  // 接收外部传入的参数
  props = {
    // 标题
    title: { type: String },
    // 更多文本
    moreText: { type: String },
    // 背景颜色
    background: { type: String },
    // 自定义class
    class: { type: String },
    // on moreText 点击事件
    onMoreTextTap: { type: Function }
  }
  // 模板(绑定)数据
  data = {}
  // 用于监听组件之间的通信与交互事件的事件处理函数集合
  events = {
  }

  methods = {
    /**
     * 更多点击事件
     */
    moreTextTap(e) {
      let onMoreTextTap = this.onMoreTextTap
      if (onMoreTextTap && typeof(onMoreTextTap) == 'function'){
        onMoreTextTap.call(this.$parent, e)
      }
      this.$emit('moreTextTap')
    }
  }

  onLoad() {
  }
}