import { apiResquest } from '@/service/request'

interface IUser {
  name: string
  age: number
}

export function fetchUserInfo() {
  return apiResquest.post<IUser>({
    url: 'xxxxxxxxxxxx/user',
  })
}

// async () => {
//   const { age, name } = await fetchUserInfo()
// }
