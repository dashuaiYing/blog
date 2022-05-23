---
title: 页面随机生成气球( 可以送给男女朋友 )
date: 2022-05-23
tags:
 - tag2
categories:
 - category1
---


## 多看美女可以长寿 保持心情愉悦
<img src="https://img-blog.csdnimg.cn/db575da74b1f4f38af4fc0077f45402f.png">


css

```css

 * {
            margin: 0;
            padding: 0;
        }
        html,
        body {
            height: 100%;
        }
        body {
            background: url('./bg.jpg');
        }
        .ball {
            position: absolute;
            border-radius: 50%;
            font-size: 12px;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .ball::after {
            content: "";
            display: block;
            position: absolute;
            height: 30px;
            width: 2px;
            background: orange;
            bottom: -30px;
        }
        .fixed {
            position: fixed;
            top: 50%;
            left: 50%;
            right: 10px;
            width: 100px;
            height: 100px;
            background: skyblue;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: pink;
            animation: row 4s linear infinite;
            font-size: 12px;
            padding: 20px;
        }

        @keyframes row {
            0% {
                transform: scale(1.2) translate3d(-50%, -50%, 0);
            }

            25% {
                transform: scale(1.4) translate3d(-50%, -50%, 0);
            }

            50% {
                transform: scale(1.6) translate3d(-50%, -50%, 0);
            }

            75% {
                transform: scale(2.2) translate3d(-50%, -50%, 0);
            }

            100% {
                transform: scale(1) translate3d(-50%, -50%, 0);
            }
        }

```

html 部分

```html
  <audio src="./蔡健雅-Letting Go.mp3   (这里是你的音乐地址 可以是本地也可以是绝对路径)" id="audio">
    </audio>
    <div class="fixed">
      你好，希望你每天开心快乐，点击一下会有惊喜哦😯 //这里是你想输入的文本
    </div>


```

js 部分

```js
let flag = false
        function Ball(x, y, r) {
            this.x = x
            this.y = y
            this.r = r
            this.dx = Math.random() * 20 - 10
            this.dy = Math.random() * 20 - 10
            this.opacity = 1
            this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            this.init()
            ballArr.push(this)
        }
        Ball.prototype.init = function () {
            this.dom = document.createElement('div')
            this.dom.innerText = arr[parseInt(Math.random() * arr.length)]
            this.dom.style.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            this.dom.className = 'ball'
            body.appendChild(this.dom)
            this.dom.style.backgroundColor = this.color
            this.dom.style.width = 2 * this.r + 'px'
            this.dom.style.height = 2 * this.r + 'px'
            this.dom.style.left = this.x - this.r + 'px'
            this.dom.style.top = this.y - this.r + 'px'
        }
        Ball.prototype.updata = function () {
            if (this.opacity < 0) {
                for (let i = 0; i < ballArr.length; i++) {
                    if (ballArr[i] === this) {
                        ballArr.splice(i, 1)
                    }
                }
                body.removeChild(this.dom)
            }
            this.opacity -= 0.02
            this.x += this.dx
            this.y += this.dy
            this.dom.style.left = this.x - this.r + 'px'
            this.dom.style.top = this.y - this.r + 'px'
        }
        let body = document.getElementsByTagName('body')[0]
        let audio = document.getElementById('audio')
        let fixedBtn = document.getElementsByClassName('fixed')[0]
        let arr = ['天天开心', 'Happy Everyday', '祝你越来越漂亮', '祝你越来越开心', '💗💗💗💗💗💗', '🐷🐷🐷🐷🐷🐷',
            '如愿以偿',  '万事如意', '暴瘦暴富'
        ]
        let ballArr = []
        setInterval(() => {
            for (let i = 0; i < ballArr.length; i++) {
                ballArr[i].updata()
            }
        }, 30)
        body.onmousemove = function (e) {
            if (!flag) {
                return
            }
            new Ball(e.pageX, e.pageY, 30)
        }
        fixedBtn.onclick = function () {
            flag = true
            fixedBtn.style.display = 'none'
            audio.play()
        }


```