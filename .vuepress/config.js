module.exports = {
  base: '/blog/',
  "title": "xiaoming",
  "description": "我宁愿犯错，也不愿什么都不做",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "plugins": [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['koharu', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是xiaoming欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 260,
        height: 360,
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '一路生花',
            artist: 'xiaoming',
            url: '/温奕心-一路生花.mp3',
            cover: '/me.jpg'
          }
        ] ,
        // 是否默认缩小
        autoShrink: true ,
        // 缩小时缩为哪种模式
        shrinkMode: 'float',
        // 悬浮窗样式
        floatStyle:{ bottom: '20px', 'z-index': '999999' }
      }
    ],
    [
      '@vuepress/plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      width: '300px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '扫码加我为好友，一起讨论前端技术',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: '/addMe.jpg',
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        } 
      ]
    }],
    // 光标效果
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }],
      ['dynamic-title', {
        showIcon: 'favicon.ico',
        showText: '这就对了嘛，继续看~~',
        hideIcon: 'favicon.ico',
        hideText: '哎，你走什么啊~~',
        recoverTime: 2000,
       }],
       ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }]
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "我的",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "文档内容",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "小明",
        "desc": "你可以真诚的爱，直接的厌恶，热烈的喜欢.",
        "email": "tr_ymj@qq.com",
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  },
}