/**
 * 卡券组件-业务逻辑
 * @Author: AndyPan
 * @CreateDate: 2019年4月28日16:42:47
 * @LastUpdateDate: 2019年4月28日16:43:02
 * @Remarks: 备注
*/

import wepy from 'wepy'
import { Tips } from '@/utils'

export default class CouponComponent extends wepy.component {
  // 接收外部传入的参数
  props = {
    // 自定义class
    class: { type: String },
    // 数据
    dataset: { type: Array }
  }
  // 模板(绑定)数据
  data = {}
  // 用于监听组件之间的通信与交互事件的事件处理函数集合
  events = {}

  methods = {
    couponItemTap(e) {
      let dataset = e.currentTarget.dataset
      if (dataset) {
        let item = dataset.item || {}
        wx.navigateTo({
          url: './use-my-coupon?ticketId=' + item.ticketId + '&ticketCode=' + item.ticketCode
        })
        // let hotelMobleNo = item.hotelMobleNo
        // if (item.status === 'NOT_USED' || item.status === 'unuse'){
        //   if (hotelMobleNo) {
        //     wx.makePhoneCall({
        //       phoneNumber: hotelMobleNo
        //     })
        //   } else {
        //     Tips.error('请联系商家使用优惠券')
        //   }
        // }
      }

    }
  }
}