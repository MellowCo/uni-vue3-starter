import { jsonRequest } from '@/service/request'

interface IData {
  b: string
  a: string
}

export function fetchUpdateConfig() {
  return jsonRequest.get<IData>({
    url: 'xxxxxxxxxxxx/json',
  })
}

// async () => {
//   const { a, b } = await fetchUpdateConfig()
// }
