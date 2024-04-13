module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      // Required for expo-router
      //'babel-preset-expo',
      'react-native-reanimated/plugin'
      //'nativewind/babel',
      // [
      //   'import',
      //   {
      //     libraryName: 'antd-mobile',
      //     libraryDirectory: 'es',
      //     style: 'css'
      //   }
      // ]
    ]
  }
}
