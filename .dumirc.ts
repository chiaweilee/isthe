import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

const { name, description, keywords, author } = require('./package.json');

const theme = defineThemeConfig({
  helmetIcon: '🍺',
  settingPanelVisible: process.env.NODE_ENV === 'development',
  thumbBackground: true,
  description,
  keywords,
  author,
  social: {
    github: {
      name,
      link: 'https://github.com/is-lib/iscorrect',
    },
  },
  hero: {
    showVersionBadge: true,
  },
});

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    logo: '/favicon.png',
    footer: `Copyright © ${new Date().getFullYear()}`,
    ...theme,
  },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  apiParser: {},
  resolve: {
    entryFile: './.dumi/resolveEntry.ts',
    atomDirs: [
      {
        type: 'components',
        dir: 'packages/iscorrect/src',
      },
    ],
  },
  alias: {
    iscorrect: `${process.cwd()}/packages/iscorrect/src`,
  },
});
