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
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['koharu', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是xiaoming,欢迎你的访问 ',
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
            url: 'https://go-sycdn.kuwo.cn/9baf3773305ab4a82eecbeeecbba5baa/628612a5/resource/n1/0/59/4273740735.mp3',
            cover: 'https://img-blog.csdnimg.cn/20a69ce4fbcf4d4e96ec2b3045dce450.png'
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
          src: 'https://img-blog.csdnimg.cn/51b87d3a4fdd45f0925f4d9eaf7999e0.jpeg',
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
      }],
      // 彩带效果
      ["ribbon-animation", {
        size: 90,   // 默认数据
        opacity: 0.3,  //  透明度
        zIndex: -1,   //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 3,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      }],
      [
        "sakura", {
          num: 22,  // 默认数量
          show: true, //  是否显示
          zIndex: 9999,   // 层级
          img: {
            replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
            httpUrl: '...'     // 绝对路径
          }     
         }
      ]
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
            "link": "https://github.com/dashuaiYing/blog",
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