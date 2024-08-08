import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import { repository, name } from './packages/iscorrect/package.json';

const themeConfig: SiteThemeConfig = {
  socialLinks: { github: repository },
  apiHeader: {
    pkg: name,
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
    match: ['/docs', '/zh-CN/docs'],
  },
};

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'iscorrect',
    logo: '/favicon.svg',
    ...themeConfig,
  },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  apiParser: {},
  monorepoRedirect: {
    srcDir: ['src'],
    peerDeps: true,
  },
  resolve: {
    docDirs: ['docs'],
    entryFile: '.dumi/resolveEntry.ts',
    atomDirs: [
      {
        type: 'docs',
        subType: 'api',
        dir: `packages/iscorrect/src`,
      },
    ],
  },
  alias: {
    iscorrect: `${process.cwd()}/packages/iscorrect/src`,
  },
  mako: {},
});
