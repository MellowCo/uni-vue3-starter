/**
 * 显示loading
 * @param mask - 是否显示遮罩
 * @param title - 提示文本
 */
export function showLoading(title = '加载中...', mask = true) {
  uni.showLoading({
    mask,
    title,
  })
}

export function showToast(options?: UniApp.ShowToastOptions) {
  const { icon = 'none', mask = true } = options || {}

  uni.showToast({
    icon,
    mask,
    ...options,
  })
}

/**
 * 隐藏loading
 */
export function hideLoading() {
  uni.hideLoading()
}

/**
 * 显示弹窗
 */
export function showModal(options: UniApp.ShowModalOptions) {
  const { title = '提示', showCancel = true } = options

  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      showCancel,
      success(res) {
        if (res.confirm) {
          resolve(res)
        } else if (res.cancel) {
          reject(res)
        }
      },
      fail(err) {
        reject(err)
      },
      ...options,
    })
  })
}

/**
 * 显示错误弹窗 只有确定按钮
 * @param errMsg - 错误信息
 */
export function showErrorModal(errMsg: string) {
  return showModal({ content: errMsg, showCancel: false })
}
