import { createRequest } from './request'
import { resultResponseInterceptor, statusResponseInterceptor, tokenRequestInterceptor } from './interceptors'
import { getServiceEnvConfig } from '~/config'

const { url, json } = getServiceEnvConfig(import.meta.env)

export const apiResquest = createRequest(
  {
    baseURL: url,
    returnData(val) {
      return val.data
    },
  },
  {
    requestInterceptors: [tokenRequestInterceptor],
    responseInterceptors: [statusResponseInterceptor, resultResponseInterceptor],
  })

export const jsonRequest = createRequest(
  {
    baseURL: json,
  },
  {
    responseInterceptors: [statusResponseInterceptor],
  })
