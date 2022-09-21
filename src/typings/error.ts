/**
 * 自定义错误 与微信错误类型一致(errMsg)
 */
export class IError extends Error {
  errMsg: string

  constructor(errMsg: string) {
    super(errMsg)
    this.errMsg = errMsg
  }
}
