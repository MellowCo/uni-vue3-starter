
interface RequestConfig extends Partial<UniApp.RequestOptions>{
  /**
   * 基础url前缀
   */
  baseURL?: string

  /**
   * 是否显示loading
   * @default true
   */
  loading?: boolean

  /**
   * 成功提示
   */
  successMsg?: string

  /**
   * 是否显示错误提示
   * @default true
   */
  showErr?: boolean

  /**
   * 失败提示
   */
  errMsg?: string

  /**
   * 自定义返回数据
   */
  returnData?: (val:any) => any 
}



/**
 * 响应拦截器
 */
type responseInterceptor = (result: UniApp.RequestSuccessCallbackResult) => UniApp.RequestSuccessCallbackResult

/**
 * 请求拦截器
 */
type requestInterceptor = (config: RequestConfig) => RequestConfig

/**
 * 拦截器
 */
interface InterceptorConfig {
  /**
   * 请求拦截器数组
   */
  requestInterceptors?: requestInterceptor[]
  /**
   * 响应拦截器数组
   */
  responseInterceptors?: responseInterceptor[]
}

interface Result<T> {
  success: 'true' | 'false'
  data: T
  msg: string
}
