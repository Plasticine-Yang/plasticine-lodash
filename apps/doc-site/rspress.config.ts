import * as path from 'path'
import { defineConfig } from 'rspress/config'

import { LATEST_VERSION, VERSIONS } from './constants'
import { Lang } from './enums'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'plasticine-lodash',
  description: 'A modern JavaScript utility library delivering modularity, performance & extras.',
  lang: 'en',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', mode: 'link', content: 'https://github.com/Plasticine-Yang/plasticine-lodash' }],
  },
  multiVersion: {
    default: LATEST_VERSION,
    versions: VERSIONS,
  },
  locales: [
    {
      lang: Lang.EN,
      label: 'English',
      title: 'plasticine-lodash',
      description: 'A modern JavaScript utility library delivering modularity, performance & extras.',
    },
    {
      lang: Lang.ZH,
      label: '简体中文',
      title: 'plasticine-lodash',
      description: '一个现代化的JavaScript实用库，提供模块化、高性能和额外功能。',
    },
  ],
})
