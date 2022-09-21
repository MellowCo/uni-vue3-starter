import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-[#eee]',
      'flex-center': 'flex justify-center items-center',
      'text-c1': 'text-[#181818]',
      'text-c2': 'text-[#333333]',
      'text-c3': 'text-[#B2B2B2]',
      'text-c4': 'text-[#CCCCCC]',
      'bg': 'bg-[#f6f7fb]',
    },
  ],
  transformers: [
    // https://github.com/MellowCo/unplugin-attributify-to-class
    transformerAttributify(),

    // https://github.com/MellowCo/unplugin-transform-class
    transformerClass(),
  ],
})
