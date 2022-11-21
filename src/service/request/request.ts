import { invokeArrayFns } from '@meoc/utils'
import { DEFAULT_REQUEST_ERROR_MSG, REQUEST_TIMEOUT } from '@/config'
import { getErrorMsg, hideLoading, showErrorModal, showLoading, showToast } from '@/utils'

let loadingCount = 0

/**
 * 自定义请求
 * @param baseRequestConfig - 基础请求配置
 * @param interceptorConfig - 拦截器配置
 */
export function createRequest(baseRequestConfig: RequestConfig, interceptorConfig?: InterceptorConfig) {
  const { requestInterceptors, responseInterceptors } = interceptorConfig || {}

  function request<T>(requestConfig: RequestConfig) {
    // 合并请求配置
    requestConfig = {
      ...baseRequestConfig,
      ...requestConfig,
    }

    // 请求拦截器
    if (requestInterceptors) {
      invokeArrayFns(requestInterceptors, requestConfig)
    }

    // 设置默认值
    const { baseURL = '', loading = true, method = 'POST', showErr = true, errMsg = '', successMsg, url, data, timeout = REQUEST_TIMEOUT, header, returnData = val => val } = requestConfig

    // 显示loading
    if (loading) {
      loadingCount++
      showLoading()
    }

    return new Promise<T>((resolve, reject) => {
      uni.request({
        url: `${baseURL}${url}`,
        method,
        header,
        timeout,
        data,
        success(result) {
          try {
            // 响应拦截器
            invokeArrayFns(responseInterceptors as Function[], result)
          } catch (error) {
            // 自定义错误优先
            const msg = errMsg || getErrorMsg(error)

            if (showErr) {
              showErrorModal(msg)
            }

            reject(msg)
            return
          }

          // 自定义返回数据
          resolve(returnData(result.data) as T)

          // 显示成功toast
          if (successMsg) {
            showToast({
              icon: 'success',
              title: successMsg,
            })
          }
        },
        fail(err) {
          // 失败弹窗
          const msg = `${DEFAULT_REQUEST_ERROR_MSG}-${getErrorMsg(err)}`
          showErrorModal(msg)
          reject(msg)
        },
        complete() {
          if (loadingCount !== 0) {
            --loadingCount === 0 && hideLoading()
          }
        },
      })
    })
  }

  function post<T>(requestConfig: RequestConfig) {
    return request<T>({ ...requestConfig, method: 'POST' })
  }

  function get<T>(requestConfig: RequestConfig) {
    return request<T>({ ...requestConfig, method: 'GET' })
  }

  return {
    request,
    post,
    get,
  }
}

