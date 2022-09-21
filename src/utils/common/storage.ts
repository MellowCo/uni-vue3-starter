export function setStorage(key: string, value: any) {
  uni.setStorageSync(key, value)
}

export function getStorage(key: string) {
  return uni.getStorageSync(key)
}
