import presetWeapp from 'unocss-preset-weapp'
export default {
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
}
