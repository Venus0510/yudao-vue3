import { service } from '@/config/axios/service'

type LegacyRequestConfig = {
  method?: string
  [key: string]: any
}

const request = (config: LegacyRequestConfig = {}) => {
  const method = (config.method || 'get').toUpperCase()
  return service({
    ...config,
    method
  })
}

export default request
