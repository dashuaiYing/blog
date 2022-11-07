---
title: 实现对对象的侦测
date: 2022-09-14
tags:
  - tag1
categories:
  - category1
---

## 多看美女可以长寿 保持心情愉悦

<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202109%2F06%2F20210906225922_1c31b.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665742240&t=2971de5b002bebf4a925c22f3bdbca6d">

# 检测对象的每一个属性的变化

```js
// 新建一个文件夹 observer.js
export class Observer {
  constructor(value) {
    this.value = value;
    if (Array.isArray()) {
      console.log("走数组的逻辑");
    } else {
      // 走对象的逻辑
      this.walk(value);
    }
  }
  walk(obj) {
    // todo: 给对象的每一个属性添加监听
    let keys = Object.keys(obj);
    for (let i = 0, len = keys.length; i < len; i++) {
      this.defineFn(obj, keys[i]);
    }
  }
  defineFn(obj, key, val) {
    if (arguments.length == 2) {
      val = obj[key]; // 当前项的值
    }
    if (typeof val === "object") {
      new Observer(val); // 对象的属性可能还是对象 递归一遍
    }
    Object.defineProperty(obj, key, {
      get() {
        console.log(`obj的${key}被读取了值为${val}`);
        return val;
      },
      set(newVal) {
        console.log(`obj的${key}属性被修改了，现在是${val}`);
        val = newVal;
      },
    });
  }
}
```

```js
// 通过模块化规范引入 Observer 使用
import { Observer } from "./observe.js";
let obj = new Observer({
  name: "xiaoming",
  age: 18,
  job: {
    year: 2021,
    job: "p-3",
  },
});
console.log(obj);
```

<img alt="" src="./observer.png" />

简单的效果已经实现了 当然还不完全 还要对数据为 null、undefined 等情况做处理等等
