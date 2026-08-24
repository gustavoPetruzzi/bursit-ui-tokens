import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/bursit-ui-tokens/',
  title: 'bursit-ui-tokens',
  description: 'Shared CSS custom properties for Angular and React components',
  themeConfig: {
    siteTitle: 'bursit-ui-tokens',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tokens', link: '/colors' },
      { text: 'Components', link: '/form-controls' },
      { text: 'Theming', link: '/theming' },
      { text: 'Mixins', link: '/mixins' },
    ],
    sidebar: [
      {
        text: 'Base Tokens',
        items: [
          { text: 'Colors', link: '/colors' },
          { text: 'Typography', link: '/typography' },
          { text: 'Spacing', link: '/spacing' },
          { text: 'Borders & Shadows', link: '/borders' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Buttons', link: '/buttons' },
          { text: 'Inputs', link: '/inputs' },
          { text: 'Form Controls', link: '/form-controls' },
          { text: 'Layout', link: '/layout' },
          { text: 'Feedback', link: '/feedback' },
          { text: 'Navigation', link: '/navigation' },
          { text: 'Data Display', link: '/data-display' },
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Theming & Dark Mode', link: '/theming' },
          { text: 'SCSS Mixins', link: '/mixins' },
        ]
      }
    ],
    socialLinks: [
      { text: 'GitHub', link: 'https://github.com/chusti/bursit-ui-tokens' }
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2026'
    }
  }
})
