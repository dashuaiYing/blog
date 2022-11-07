---
title: 使用伪元素实现按钮边框旋转进度效果
date: 2022-11-7
tags:
  - tag2
categories:
  - category1
---

## 多看美女可以长寿 保持心情愉悦

<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fd%2F85%2Febc285eff9.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670423025&t=82b03ba0ec7dea0749131706f0c4cc50">

### 这是效果图 这个红色线条是按钮点击之后发起请求的一个动态的运动效果

<img src="../../../.vuepress/public/button3.png">

```js
  分析： 先做一个按钮 设置伪元素在坐标原点进行旋转 使用 z-index 和 overflow 来隐藏多余的部分
```

html 部分

```html
<div id="button">边框按钮</div>
```

css 部分

```css
body,
html {
  background-color: #000;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#button {
  width: 150px;
  height: 70px;
  overflow: hidden;
  text-align: center;
  line-height: 70px;
  color: blue;
  font-size: 24px;
  background-color: #000;
  border: none;
  outline: none;
  z-index: 1;
  border-radius: 7px;
  position: relative;
}
```

<img src="../../../.vuepress/public/button1.png">

```js
实现最基本的按钮效果; 实现之后取消 outline 属性 白色部分就是进度条的轨迹
```

```css
#button {
  width: 150px;
  height: 70px;
  /* overflow: hidden; */
  text-align: center;
  line-height: 70px;
  color: blue;
  font-size: 24px;
  background-color: #000;
  border: none;
  outline: none;
  z-index: 1;
  border-radius: 7px;
  /* outline: 4px solid #fff; */
  position: relative;
}
#button::before {
  content: "";
  position: absolute;
  background-color: red;
  width: 200%;
  height: 200%;
  z-index: -2;
  left: 50%;
  top: 50%;
  transform-origin: 0 0;
  animation: move 3s infinite linear;
}

#button::after {
  content: "";
  position: absolute;
  background-color: #000;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  top: 2px;
  left: 2px;
  border-radius: 5px;
  z-index: -1;
}

@keyframes move {
  to {
    transform: rotate(1turn);
  }
}
```

<img src="../../../.vuepress/public/button2.png">
其实进度条就是一个在元素里面旋转的伪元素 遮挡它在按钮内部的区域 留出边框的一个空间做它的轨迹
 给按钮添加上 overflow：hidden 就实现效果了
