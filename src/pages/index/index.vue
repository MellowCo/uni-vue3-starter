<template>
  <view class="center flex-col">
    <image class="w-200 h-200 mt-200rpx mb-50rpx mx-auto" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-lg text-[#8f8f94]">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

