/**
 * 微信摇一摇
 * @author AndyPan
 * @createdate 2019年4月3日16:48:22
 * @lastupdatedate 2019年4月3日16:48:25
 * @remark 摇一摇
 */


let shakeData = {
    lastUpdate: 0,
    lastX: 0,
    lastY: 0,
    shakeThreshold: 0
};

export const wxShake = {
    // 设置摇一摇不可用（将值设置到更大）
    setShakeUNVibrateLong () {
        if (!shakeData.shakeThreshold) {
            shakeData.shakeThreshold = 10000
        }
    },
    // 设置摇一摇可用（将值设置到可用范围）
    setShakeVibrateLong () {
        if (shakeData.shakeThreshold) {
            shakeData.shakeThreshold = 0
        }
    },
    shake (options) {
        let shakeThreshold = 120
        let shakeFun = null
        if (typeof (options) === 'function') {
            shakeFun = options
        } else {
            shakeFun = options.shakeFun
            shakeThreshold = options.shakeThreshold || 120
        }
        let timeString = new Date().getTime()
        let changeFn = {}
        changeFn[timeString] = (res) => {
            var curTime = new Date().getTime()
            var SHAKE_THRESHOLD = shakeData.shakeThreshold || shakeThreshold
            var lastUpdate = shakeData.lastUpdate
            if ((curTime - lastUpdate) > 100) {
                var diffTime = curTime - lastUpdate;
                var speed = Math.abs(res.x + res.y + res.z - shakeData.lastX - shakeData.lastY - shakeData.lastY) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD && !determination) {
                    determination = true
                    determination = false
                    console.info(speed + ',' + SHAKE_THRESHOLD)
                    if (shakeFun) {
                        let isVibrate = shakeFun(speed);
                        if (isVibrate) {
                            wx.vibrateLong();
                        }
                    }
                }
                shakeData.lastUpdate = curTime
                shakeData.lastX = res.x
                shakeData.lastY = res.y
                shakeData.lastY = res.z
            }
        }
        var determination = false
        wx.onAccelerometerChange(function (res) {
            // var pages = getCurrentPages()
            // var currentPage = pages[pages.length - 1]
            // if (currentPage.onAccelerometerChange) {
            //     currentPage.onAccelerometerChange(res)
            // }

            // let thisChangeFn = changeFn[timeString]
            // if (thisChangeFn) {
            //     thisChangeFn(res)
            // }

            var curTime = new Date().getTime()
            var SHAKE_THRESHOLD = shakeData.shakeThreshold || shakeThreshold
            var lastUpdate = shakeData.lastUpdate
            if ((curTime - lastUpdate) > 100) {
                var diffTime = curTime - lastUpdate;
                var speed = Math.abs(res.x + res.y + res.z - shakeData.lastX - shakeData.lastY - shakeData.lastY) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD && !determination) {
                    determination = true
                    determination = false
                    console.info(speed + ',' + SHAKE_THRESHOLD)
                    if (shakeFun) {
                        let isVibrate = shakeFun(speed);
                        if (isVibrate) {
                            wx.vibrateLong();
                        }
                    }
                }
                shakeData.lastUpdate = curTime
                shakeData.lastX = res.x
                shakeData.lastY = res.y
                shakeData.lastY = res.z
            }
        })
    },
    shake2 (options) {
        var determination = false
        wx.onAccelerometerChange(function (res) {
            let callBack = options.callBack
            if (callBack) {
                callBack(res)
            }
            var curTime = new Date().getTime()
            var SHAKE_THRESHOLD = 120
            var lastUpdate = shakeData.lastUpdate
            if ((curTime - lastUpdate) > 100) {
                var diffTime = curTime - lastUpdate;
                var speed = Math.abs(res.x + res.y + res.z - shakeData.lastX - shakeData.lastY - shakeData.lastY) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD && !determination) {
                    determination = true
                    determination = false
                    let shakeFun = options.shakeFun
                    if (shakeFun) {
                        let isVibrate = shakeFun(speed);
                        if (isVibrate) {
                            wx.vibrateLong();
                        }
                    }
                }
                shakeData.lastUpdate = curTime
                shakeData.lastX = res.x
                shakeData.lastY = res.y
                shakeData.lastY = res.z
            }
        })
    }
}