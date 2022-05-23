---
title: 打字机效果
date: 2022-05-18
---
### 多看美女可以长寿 保持心情愉悦
<img src="../../.vuepress/public/girl3.png">



css部分

```css
  :root {
        font-size: 20px;
      }

      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }

      h1 {
        margin: 0;
        padding: 0;
        /* 必须是等宽字体 */
        font-family: monospace;
        /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
        /* width: 1ch; */
        position: relative;
        /* overflow: hidden; */
        /* animation: 1s typing forwards steps(13); */
      }

      h1::after {
        content: "";
        display: inline;
        position: absolute;
        width: 5px;
        height: 2ch;
        background-color: #000;
        border-radius: 2px;
        right: -0.5ch;
      }

      h1.ended::after {
        animation: 1.1s cursor steps(2, jump-none) infinite;
      }

      h1 span {
        --delay: 10s;
        display: inline-block;
        overflow: hidden;
        width: 0ch;
        animation: 0.1s text-in ease-in-out forwards;
        /* animation: 0.1s text-out ease-in-out forwards; */
        animation-delay: var(--delay);
      }

      @keyframes text-in {
        from {
          width: 0ch;
        }

        to {
          width: 2ch;
        }
      }

      @keyframes text-out {
        from {
          width: 2ch;
        }

        to {
          width: 0ch;
        }
      }

      @keyframes cursor {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }
```

js 部分

```js
let strs = [
        {
          title: "没什么能够阻挡你，前进的步伐",
          stop: 5,
        },
        {
          title: "没有梦想，和咸鱼有什么区别",
          stop: 10,
        },
      ];
      // 当前进行到第几行
      let currentIndex = 0;
      let h1 = null;
      let spans = null;

      setTimeout(() => {
        h1 = document.createElement("h1");
        document.body.appendChild(h1);

        init();
      }, 2000);

      function init() {
        if (currentIndex == strs.length) {
          currentIndex = 0;
        }
        h1.innerHTML = strs[currentIndex].title;
        h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");

        let delay = 0;
        spans = [...document.querySelectorAll("span")];
        spans.forEach((span, i) => {
          delay += 0.1;
          if (strs[currentIndex].stop instanceof Array) {
            if (strs[currentIndex].stop.includes(i)) {
              delay += 0.3;
            }
          } else {
            if (strs[currentIndex].stop == i) {
              delay += 0.3;
            }
          }

          span.style.setProperty("--delay", `${delay}s`);
        });

        h1.addEventListener("animationend", lastEnd);
      }

      function lastEnd(e) {
        if (e.target == document.querySelector("h1 span:last-child")) {
          h1.classList.add("ended");
          setTimeout(() => {
            h1.removeEventListener("animationend", lastEnd);
            let delay = 0;

            spans.reverse().forEach((span, i) => {
              h1.classList.remove("ended");
              span.style.width = "2ch";
              span.style.animation = "0.1s text-out ease-in-out forwards";
              delay += 0.05;
              // 回去停顿功能
              // if (strs[currentIndex].stop instanceof Array) {
              //   if (strs[currentIndex].stop.includes(spans.length - i)) {
              //     delay += 0.3
              //   }
              // } else {
              //   if (strs[currentIndex].stop == spans.length - i) {
              //     delay += 0.3
              //   }
              // }
              span.style.animationDelay = `${delay}s`;
            });
            h1.addEventListener("animationend", firstEnd);
          }, 2000);
        }
      }

      function firstEnd(e) {
        if (e.target == document.querySelector("h1 span:first-child")) {
          spans.forEach((item) => {
            item.remove();
          });
          h1.removeEventListener("animationend", firstEnd);
          currentIndex++;
          // h1.classList.add('ended')
          // h1.classList.remove('ended')
          init();
        }
      }

```

###  看看效果

<img src="https://z3.ax1x.com/2021/08/25/hZsrOf.gif">