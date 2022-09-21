import { IError } from '~/typings/error'

/**
 * 自定义错误
 * @param errMsg - 错误信息
 */
export function createError(errMsg: string) {
  return new IError(errMsg)
}

/**
 * 获取错误信息
 * @param err - 错误对象
 */
export function getErrorMsg(err: Error | IError | UniApp.GeneralCallbackResult | unknown) {
  if (isObject(err)) {
    return 'errMsg' in err ? err.errMsg : err.message
  }

  return ''
}
