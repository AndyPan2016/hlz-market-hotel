/**
 * 块内容列表组件-业务逻辑
 * @Author: AndyPan
 * @CreateDate: 2019年4月29日10:47:14
 * @LastUpdateDate: 2019年4月29日10:47:33
 * @Remarks: 备注
*/

import wepy from 'wepy'

export default class WeddingOpusComponent extends wepy.component {
  // 接收外部传入的参数
  props = {
    nullTips: { type: String, default: '暂无数据' },
    // 自定义class
    class: { type: String },
    // 数据集合
    dataset: { type: Array | String },
    // 点击事件
    onItemTap: { type: Function },
    onChildItemTap: { type: Function }
  }
  // 模板(绑定)数据
  data = {
    tempVideoContext: {}
  }
  // 用于监听组件之间的通信与交互事件的事件处理函数集合
  events = {}

  methods = {
    /**
    * 查看详情点击事件
    * @param {Object} e Event对象
    */
    onLookDetail (e) {
      let dataset = (e.currentTarget.dataset || {}).data
      let eventResult

      // 响应on事件
      let onLookDetail = this.onLookDetail
      if (onLookDetail) {
        eventResult = onLookDetail.call(this.$parent, dataset, e)
      }

      // 触发用户事件
      this.$emit('onLookDetail', dataset, (status) => {
        eventResult = status
      })

      if (eventResult != false) {
        wepy.navigateTo({ url: 'wedding-opus-detail?id=' + dataset.caseId })
      }
    },
    playVideo(e) {
      let currentTarget = e.currentTarget
      let id = currentTarget.id
      let tempVideoContext = this.$parent.$parent.globalData.tempVideoContext
      for (let key in tempVideoContext) {
        if (key !== id) {
          tempVideoContext[key].pause()
          tempVideoContext[key].stop()
        }
      }
    }
  }

  seekVideo() {
    let dataset = this.dataset
    if (dataset) {
      let i = 0
      let thisID
      let videoContext
      let seek = () => {
        thisID = 'j-video-' + i
        videoContext = wx.createVideoContext(thisID)
        this.$parent.$parent.globalData.tempVideoContext[thisID] = videoContext
        videoContext.seek(1)
        if (i < dataset.length - 1) {
          i++
          setTimeout(seek, 300)
        }
      }
      seek()
    }
  }
  
  watch = {
    dataset: () => {
      this.seekVideo()
    }
  }

  onLoad() {
    // console.info(this.$parent.$parent.globalData.tempVideoContext)
    this.seekVideo()
  }
}
