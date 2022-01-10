/*
 * Project: alautun
 * Created Date: Friday, January 7th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 2:56:02 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: true,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hoc': './src/hoc',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@localization': './src/localization',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
          '@styles': './src/styles',
          'theme': './theme',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'transform-remove-console'],
    },
  },
};
