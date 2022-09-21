# uniapp-vue3-starter
## 插件
* [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)
* [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 css 引擎
* [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) - unocss 小程序预设
* [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - API 自动加载，直接使用 Composition API 无需引入
* TypeScript
* [UniApp 代码片段](https://github.com/zhetengbiji/uniapp-snippets-vscode)
* [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
* [@meoc/utils](https://github.com/MellowCo/utils) - 个人小工具集

## 使用
```shell
npx degit MellowCo/uni-vue3-starter my-app
cd my-app
pnpm i 
```

## 使用 unocss
vite.config.ts

```ts
import path from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/antfu/unocss
    Unocss(),
  ],
})
```

unocss.config.ts
```ts
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

```
