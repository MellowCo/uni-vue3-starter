import { params2Url } from '@meoc/utils'

interface IRoute {
  /**
   * 路由类型
   */
  type: ENUM_ROUTE_TYPE
  /**
   * 路由路径
   */
  url: string
  /**
   * 路由参数
   */
  params?: Record<string, any>
  /**
   * 回退的层数 uni.navigateBack
   * @default 1
   */
  delta?: number
}

/**
 * 路由类型
 */
enum ENUM_ROUTE_TYPE {
  TO = 'navigateTo',
  REDIRECT = 'redirectTo',
  TAB = 'switchTab',
  RELAUNCH = 'reLaunch',
  BACK = 'navigateBack',
}

/**
 * 路由跳转
 */
export function route({ type, url, params, delta = 1 }: IRoute) {
  if (type !== ENUM_ROUTE_TYPE.BACK && params) {
    url = `${url}?${params2Url(params)}`
  }

  switch (type) {
    case ENUM_ROUTE_TYPE.TO:
      uni.navigateTo({
        url,
      })
      break

    case ENUM_ROUTE_TYPE.REDIRECT:
      uni.redirectTo({
        url,
      })
      break

    case ENUM_ROUTE_TYPE.TAB:
      uni.switchTab({
        url,
      })
      break

    case ENUM_ROUTE_TYPE.RELAUNCH:
      uni.reLaunch({
        url,
      })
      break
    case ENUM_ROUTE_TYPE.BACK:
      uni.navigateBack({
        delta,
      })
      break

    default:
      break
  }
}

export function to(url: string, params?: Record<string, any>) {
  route({
    type: ENUM_ROUTE_TYPE.TO, url, params,
  })
}

export function redirect(url: string, params?: Record<string, any>) {
  route({
    type: ENUM_ROUTE_TYPE.REDIRECT, url, params,
  })
}

export function tabbar(url: string, params?: Record<string, any>) {
  route({
    type: ENUM_ROUTE_TYPE.TAB, url, params,
  })
}

export function relaunch(url: string, params?: Record<string, any>) {
  route({
    type: ENUM_ROUTE_TYPE.RELAUNCH, url, params,
  })
}

export function back(delta?: number) {
  route({
    type: ENUM_ROUTE_TYPE.BACK, delta, url: '',
  })
}
