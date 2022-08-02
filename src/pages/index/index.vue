<script setup lang="ts">
const title = ref('Hello')

onShow(() => {
  console.log('onShow')
})
</script>

<template>
  <view class="flex-center flex-col bg-#fff m-3">
    <image class="w-200 h-200 mt-200rpx mb-50rpx mx-auto" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-lg text-c1">
        {{ title }}
      </text>

      <text class="text-c4 pb-safe">
        world
      </text>
    </view>
  </view>
</template>

