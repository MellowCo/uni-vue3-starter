<script setup lang="ts">
const title = ref('Hello')

onShow(() => {
  console.log('onShow')
})
</script>

<template>
  <view class="center flex-col">
    <image class="w-200 h-200 mt-200rpx mb-50rpx mx-auto" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-lg text-[#8f8f94]">
        {{ title }}
      </text>
    </view>
  </view>
</template>

