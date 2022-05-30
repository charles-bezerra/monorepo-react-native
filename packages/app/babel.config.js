module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['../../packages'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': '../../packages/components',
        },
      },
    ],
  ],
};
