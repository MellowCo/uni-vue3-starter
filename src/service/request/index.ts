import { createRequest } from './request'
import { getServiceEnvConfig } from '~/config'

const { url } = getServiceEnvConfig(import.meta.env)

export const request = createRequest({ url })
export const secondRequest = createRequest({ url })
