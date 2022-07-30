import path from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import transformWeClass from 'unplugin-transform-we-class/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    uni(),

    // https://github.com/antfu/unocss
    Unocss(),
    transformWeClass(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        {
          '@dcloudio/uni-app': [
            'onLaunch',
            'onShow',
            'onHide',
            'onLoad',
            'onPullDownRefresh',
            'onReachBottom',
          ],
        },
      ],
      dts: true,
      vueTemplate: true,
    }),

  ],
})
