import { ERROR_STATUS } from '@/config'
import { createError } from '@/utils'

/**
 * 添加token，请求拦截器
 */
export const tokenRequestInterceptor: requestInterceptor = (requestConfig: RequestConfig) => {
  requestConfig.header = {
    ...requestConfig.header,
    token: 'xxxxxxxxxxxxx',
  }

  return requestConfig
}

/**
 * 状态码响应拦截器
 */
export const statusResponseInterceptor: responseInterceptor = (result) => {
  const { statusCode } = result

  if (statusCode !== 200) {
    throw createError(ERROR_STATUS[statusCode])
  }

  return result
}

/**
 * 返回值响应拦截器
 */
export const resultResponseInterceptor: responseInterceptor = (result) => {
  const resultData = result.data as Result<string>

  if (resultData.success === 'false') {
    throw createError(resultData.msg)
  }

  return result
}
