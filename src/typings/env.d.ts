/**
 *后台服务的环境类型
 * - dev: 开发环境
 * - test: 测试环境
 * - prod: 生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'prod'

/** 后台服务的环境配置 */
interface ServiceEnvConfig {
  url: string
  [key: string]: any
}

interface ImportMetaEnv {
  readonly VITE_SERVICE_ENV?: ServiceEnvType;
}
