import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Constant Finance",
  description: "Decentralized lending protocol with Fixed Rates, Flexible Access and Higher Yields",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/docs' },
          { 
            text: 'Concepts', 
            items: [
              {text: 'Matching protocol', link: '/docs/concepts/matching-protocol'},
              {text: 'Supply', link: '/docs/concepts/supply'},
              {text: 'Borrow', link: '/docs/concepts/borrow'},
              {text: 'Renew', link: '/docs/concepts/renew'},
              {text: 'Repay', link: '/docs/concepts/repay'},
              {text: 'Widthdraw', link: '/docs/concepts/withdraw'},
              {text: 'Liquidation', link: '/docs/concepts/liquidation'},
              {text: 'Risks', link: '/docs/concepts/risks'}
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/constfi' },
      { icon: 'discord', link: 'https://discord.com/constfi' },
      { icon: 'github', link: 'https://github.com/constfi/contracts' },
    ],

    footer: {
      message: '<a href="/privacy-policy">Privacy Policy</a>. <a href="/term-of-use">Term of Use</a>. <a href="/contact-us">Contact Us</a>.',
      copyright: 'Copyright © 2024 Constant Finance Team'
    }
  },

  // base: "/const-www/"
})
