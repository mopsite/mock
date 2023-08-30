import { defineConfig } from 'vitepress'

// https://skewb.gitee.io/vitepress/reference/site-config
export default defineConfig({
  base: '/mock/',
  title: 'Mock.js',
  description: '生成随机数据，拦截 Ajax 请求',
  head: [['link', { rel: 'icon', href: '/mock/logo.svg' }]],
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://skewb.gitee.io/vitepress/reference/default-theme-config
    logo: {
      src: '/logo.svg'
    },
    lastUpdated: {
      text: '上次更新'
    },
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarAPI()
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/nuysoft/Mock' }],
    footer: {
      message: 'MIT Licensed 2023'
    }
  }
})

function nav() {
  return [
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    { text: 'API', link: '/api/mock', activeMatch: '/api/' }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '指南',
      items: [
        { text: '开始', link: '/guide/' },
        { text: '语法规范', link: '/guide/syntax' }
      ]
    }
  ]
}

function sidebarAPI() {
  return [
    {
      text: 'API',
      items: [
        { text: 'Mock.mock()', link: '/api/mock' },
        { text: 'Mock.setup()', link: '/api/setup' },
        { text: 'Mock.vaild()', link: '/api/vaild' },
        { text: 'Mock.toJSONSchema()', link: '/api/json' },
        {
          text: 'Mock.Random',
          link: '/api/random/',
          items: [
            { text: 'Basic', link: '/api/random/basic' },
            { text: 'Date', link: '/api/random/date' },
            { text: 'Image', link: '/api/random/image' },
            { text: 'Color', link: '/api/random/color' },
            { text: 'Text', link: '/api/random/text' },
            { text: 'Name', link: '/api/random/name' },
            { text: 'Web', link: '/api/random/web' },
            { text: 'Address', link: '/api/random/address' },
            { text: 'Helper', link: '/api/random/helper' },
            { text: 'Miscellaneous', link: '/api/random/miscellaneous' }
          ]
        }
      ]
    }
  ]
}
