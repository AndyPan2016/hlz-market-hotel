/**
 * 图文组件-业务逻辑
 * @Author: AndyPan
 * @CreateDate: 2019年4月26日11:39:16
 * @LastUpdateDate: 2019年4月26日11:39:20
 * @Remarks: 备注
*/

import wepy from 'wepy'

export default class ImageTextComponent extends wepy.component {
  // 接收外部传入的参数
  props = {
    // 自定义class
    class: { type: String },
    // 数据集合
    dataset: { type: Array },
    // 底部项点击事件
    onLookDetail: { type: Function },
    // 最大显示记录条数
    maxNumber: { type: Number, default: 1000 }
  }
  // 模板(绑定)数据
  data = {
    tempVideoContext: {}
  }
  // 用于监听组件之间的通信与交互事件的事件处理函数集合
  events = {}
  
  seekVideo() {
    let dataset = this.dataset
    let i = 0
    let thisID
    let videoContext
    let seek = () => {
      thisID = 'j-video-hall-' + i
      videoContext = wx.createVideoContext(thisID)
      // this.tempVideoContext[thisID] = videoContext
      videoContext.seek(3)
      if (i < dataset.length - 1) {
        i++
        setTimeout(seek, 500)
      }
    }
    seek()
  }

  methods = {
    /**
    * 查看详情点击事件
    * @param {Object} e Event对象
    */
    onLookDetail(e) {
      let dataset = e.currentTarget.dataset || {}
      let eventResult

      // 响应on事件
      let onLookDetail = this.onLookDetail
      if(onLookDetail) {
        eventResult = onLookDetail.call(this.$parent, dataset, e)
      }

      // 触发用户事件
      this.$emit('onLookDetail', dataset, (status) => {
        eventResult = status
      })

      if(eventResult != false) {
        wepy.navigateTo({ url: 'banquet-hall-detail?id=' + dataset.hallid })
      }
    },
    playVideo(e) {
      let currentTarget = e.currentTarget
      let id = currentTarget.id
      let dataset = this.dataset
      for (let i = 0, len = dataset.length; i < len; i++) {
        let thisID = 'j-video-hall-' + i
        if (id !== thisID) {
          let videoContext = this.tempVideoContext[thisID]
          if (!videoContext) {
            videoContext = wx.createVideoContext(thisID)
            this.tempVideoContext[thisID] = videoContext
          }
          videoContext.pause()
          videoContext.stop()
        }
      }
    },
    stopVideo() {
      let dataset = this.dataset
      for (let i = 0, len = dataset.length; i < len; i++) {
        let thisID = 'j-video-' + i
        let videoContext = this.tempVideoContext[thisID]
        if (!videoContext) {
          videoContext = wx.createVideoContext(thisID)
          this.tempVideoContext[thisID] = videoContext
        }
        videoContext.pause()
        videoContext.stop()
      }
    }
  }
  onLoad() {
    // console.info('load')
    // this.seekVideo()
  }
}