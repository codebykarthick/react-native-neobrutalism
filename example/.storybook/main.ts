import type { StorybookConfig } from '@storybook/react-native-web-vite';
import { mergeConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import remarkGfm from 'remark-gfm';

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-native-web-vite'),
    options: {
      pluginReactOptions: {
        babel: {
          plugins: [
            '@babel/plugin-transform-export-namespace-from',
            'react-native-reanimated/plugin',
          ],
        },
      },
    },
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          // runtime resolution
          'react-native': 'react-native-web',
        },
      },

      optimizeDeps: {
        // pre-bundling resolution (THIS was missing)
        alias: {
          'react-native': 'react-native-web',
        },
      },
    });
  },
};

export default config;
