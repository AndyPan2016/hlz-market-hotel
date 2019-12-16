exports.patchFn = {
  // 是否每次重新请求
  isLoadEachTime: false,
  // 'subpackages/MarketHotel/pages/index': function(){
  //   console.info(this)
  // }
  // 'subpackages/MarketActivityShake/pages/coupon-center': function() {
  //   // console.info(this)
  //   // if (this.$name === 'CouponCenterPages') {
  //     this.$wxpage.tapCouponItem = function(e) {
  //       let couponItem = e.currentTarget.dataset.item
  //       // 未领取的券，执行领取操作
  //       if (!couponItem.isReceived) {
  //         let userNo =
  //           wx.getStorageSync(STATUS.USER_NO) ||
  //           (wx.getStorageSync(STATUS.USER_SPECIAL_INFO) || {}).userNo
  //         // let activityId = wx.getStorageSync(STATUS.ACTIVITY_ID + 'Relationship')
  //         let params = {
  //           // 卡券ID
  //           ticketId: couponItem.id,
  //           // 活动ID
  //           // activityId: activityId,
  //           // 会员编码
  //           userNo: userNo
  //         }
  //         if (this.hotelId) {
  //           params.hotelId = this.hotelId
  //         }  else if (this.activityGameId) {
  //           params.activityGameId = this.activityGameId
  //         }    
  //         // else {
  //         //   if (this.activityId) {
  //         //     params.activityId = this.activityId
  //         //   } else if (this.activityGameId) {
  //         //     params.activityGameId = this.activityGameId
  //         //   }
  //         // }
  //         // 绑定参与用户关系
  //         CouponCenterService.receiveHotelTicket({
  //           data: params
  //         })
  //           .then(res => {
  //             // this.renderDataReceived(couponItem)
  //             this.couponList()
  //             Tips.success('领取成功')
  //           })
  //           .catch(error => {
  //             // this.couponList()
  //             // Tips.error(error.message)
  //             this.$invoke('customized-popup', 'open', {
  //               title: '提示',
  //               message: error.message,
  //               onSure: () => {
  //                 this.couponList()
  //               }
  //             })
  //           })
  //       }
  //     }
  //   // }
  // },
  // 'subpackages/MarketActivityShake/pages/counting-money/ranking-list': function() {
  //   if (this.$name === 'RankListPages') {
  //     this.$data.rankingList = []
  //     this.$apply()
  //   }
  //   if (this.$name === 'CouponCenterPages') {
  //     this.$wxpage.tapCouponItem = function(e) {
  //       let couponItem = e.currentTarget.dataset.item
  //       // 未领取的券，执行领取操作
  //       if (!couponItem.isReceived) {
  //         let userNo =
  //           wx.getStorageSync(STATUS.USER_NO) ||
  //           (wx.getStorageSync(STATUS.USER_SPECIAL_INFO) || {}).userNo
  //         // let activityId = wx.getStorageSync(STATUS.ACTIVITY_ID + 'Relationship')
  //         let params = {
  //           // 卡券ID
  //           ticketId: couponItem.id,
  //           // 活动ID
  //           // activityId: activityId,
  //           // 会员编码
  //           userNo: userNo
  //         }
  //         if (this.hotelId) {
  //           params.hotelId = this.hotelId
  //         } else if (this.activityGameId) {
  //           params.activityGameId = this.activityGameId
  //         }
  //         // else {
  //         //   if (this.activityId) {
  //         //     params.activityId = this.activityId
  //         //   } else if (this.activityGameId) {
  //         //     params.activityGameId = this.activityGameId
  //         //   }
  //         // }
  //         // 绑定参与用户关系
  //         CouponCenterService.receiveHotelTicket({
  //           data: params
  //         })
  //           .then(res => {
  //             // this.renderDataReceived(couponItem)
  //             this.couponList()
  //             Tips.success('领取成功')
  //           })
  //           .catch(error => {
  //             // this.couponList()
  //             // Tips.error(error.message)
  //             this.$invoke('customized-popup', 'open', {
  //               title: '提示',
  //               message: error.message,
  //               onSure: () => {
  //                 this.couponList()
  //               }
  //             })
  //           })
  //       }
  //     }
  //   }
  // }
};