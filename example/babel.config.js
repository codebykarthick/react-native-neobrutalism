const path = require('path');
const { getConfig } = require('react-native-builder-bob/babel-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

module.exports = function (api) {
  api.cache(true);

  const isStorybook =
    process.env.STORYBOOK === 'true' || process.env.STORYBOOK_WEB === 'true';

  return getConfig(
    {
      presets: ['babel-preset-expo'],
      plugins: isStorybook ? [] : ['react-native-reanimated/plugin'],
    },
    { root, pkg }
  );
};
