---
title: 双十一倒计时
date: 2022-05-16
---

### 多看美女可以长寿 保持心情愉悦
<img src="../../.vuepress/public/girl5.png">




<h1 style='text-align:center'>双十一倒计时</h1>

怎么做一个双十一的倒计时呢？

在做出这种效果之前,需要掌握的知识有 **定时器** 和 **内置Date对象**

### 一、什么是定时器？

```js
定时器 : setIterval()

作用: 设置一个定时器,重复执行里面的代码

语法: var timer = window.setIterval(code,millisec)

参数说明:
code可以是任何符合规定的js代码,一般情况是js函数,该函数要放在引号中

==> window.setIterval("alert()",millisec)
==>window.setIterval(alert,millisec) //如果不加引号,传递的是函数地址,因此不需要加括号,如果加了括号,是将函数的执行结果传到方法中

millisec: 毫秒值。1秒=1000毫秒

clearIterval( ) 

作用:清除定时器 ==>暂停

语法:clearIterval( timer ) 
```

# 二、内置日期对象Date



**百度解释 :** 日期对象类型使用自 UTC（Coordinated Universal Time，国际协调时间）1970 年 1 月 1 日午夜（零时）开始经过的毫秒数来保存日期。Date 类型保存的日期能够精确到 1970 年 1 月 1 日或之后的 285616 年。

```js
 创建一个当前日期对象 
 var date = new Date () // Fri Nov 05 2021 16:57:09 GMT+0800 (中国标准时间)
 
 从日期对象获取信息
console.log(date.getFullYear())       //获取年 2021
console.log(date.getMonth())       //获取月，注意月份是从0开始 10
console.log(date.getDate())        //获取日 5
console.log(date.getDay())         //获取周 5

console.log(date.getHours())       //获取小时 16
console.log(date.getMinutes())     //获取分钟 59
console.log(date.getSeconds())     //获取秒数 28
console.log(date.getMilliseconds())//获取毫秒 221

时间戳
console.log(date.getTime());        //获取从1970年1月1日至今的毫秒 1636102813777


```



### 三、双十一倒计时

```html
  显示的设置 :
  <h2>距离双十一抢购还有<span id="one">十</span>天<span id="two">十</span>小时<span id="three">十</span>分<span id="foul">十六</span>秒了!
  </h2>
  
```

css样式 ( 样式可以根据自己的喜好来做,我这是随便弄了一下)

```css
* {
            margin: 0;
            padding: 0;
        }

        h2 {
            margin: 20px auto;
            text-align: center;

            font-size: 30px;
        }

        #one {
            font-size: 88px;
            color: darkorange;
        }

        #two {
            font-size: 88px;
            color: dodgerblue;
        }

        #three {
            font-size: 88px;
            color: hotpink;
        }

        #foul {
            font-size: 88px;
            color: skyblue;
        }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/0765e01aa0ce4343b4c9bee6a378e064.png#pic_center)


**以下是js部分**

```js
 // 思路 ：用双十一的时间减去现在的时间 得到时间差 转成毫秒  然后转成现在显示的时间格式  /天/小时/分/秒

var title = document.querySelector('h2') //获取h2的元素节点

 var endDate = new Date('2021/11/11 00:00:00')

  setInterval(showTime, 1000);
 //封装一个显示时间的函数
 function showTime(){
          var startDate = new Date() //获取当前时间

            var seconds = parseInt((endDate.getTime() - startDate.getTime()) / 1000)
            //天数  
            var day = parseInt(seconds / 3600 / 24)
            if (day < 10) day = '0' + day
            //小时
            var hours = parseInt(seconds / 3600 % 24)
            if (hours < 10) hours = '0' + hours
            //分钟
            var min = parseInt(seconds / 60 % 60)
            if (min < 10) min = '0' + min
            //秒数
            var s = parseInt(seconds % 60)
            if (s < 10) s = '0' + s


            title.innerHTML = ` 距离双十一抢购还有<span id="one">${day}</span>天<span id="two">${hours}</span>小时<span id="three">${min}</span>分<span id="foul">${s}</span>秒了! `  //模板字符串拼接

 }
  
     

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/782156171fa346779282822229a0543c.png#pic_center)

其实上面还有很多bug, 你刷新一次和 会显示上面第一张图过了一秒才会显示倒计时,而且时间函数里面代码太多了,为什么会这样呢？想一想如何解决和优化代码？


```js
```//原来定时器里的代码是一秒执行一次 所以刚刷新的时候不会执行 要一秒后才会执行,那我们要如何解决这个问题呢

var title = document.querySelector('h2') //获取h2的元素节点

 var endDate = new Date('2021/11/11 00:00:00')

 showTime() //定时器启动之前先调用一次函数 这样定时器在调用函数的时候我们已经有了一个结果了
 
  setInterval(showTime, 1000);
 //封装一个显示时间的函数
 /*function showTime(){
          var startDate = new Date() //获取当前时间

            var seconds = parseInt((endDate.getTime() - startDate.getTime()) / 1000)
            //天数  
            var day = parseInt(seconds / 3600 / 24)
            if (day < 10) day = '0' + day
            //小时
            var hours = parseInt(seconds / 3600 % 24)
            if (hours < 10) hours = '0' + hours
            //分钟
            var min = parseInt(seconds / 60 % 60)
            if (min < 10) min = '0' + min
            //秒数
            var s = parseInt(seconds % 60)
            if (s < 10) s = '0' + s


            title.innerHTML = ` 距离双十一抢购还有<span id="one">${day}</span>天<span id="two">${hours}</span>小时<span id="three">${min}</span>分<span id="foul">${s}</span>秒了! `  //模板字符串拼接

 }*/
   //封装一个函数来实现补位0
    // 上面代码if太多太繁琐了, 简单的if语句也可以写成三元运算符

 function complement(num){
    return  num<10?num='0'+num:num
  }

function showTime(){
          var startDate = new Date() //获取当前时间

            var seconds = parseInt((endDate.getTime() - startDate.getTime()) / 1000)
            //天数  
            var day =complement(parseInt(seconds / 3600 / 24))
            
            //小时
            var hours = complement(parseInt(seconds / 3600 % 24))
          
            //分钟
            var min = complement(parseInt(seconds / 60 % 60))
        
            //秒数
            var s = complement(parseInt(seconds % 60))
         
            title.innerHTML = ` 距离双十一抢购还有<span id="one">${day}</span>天<span id="two">${hours}</span>小时<span id="three">${min}</span>分<span id="foul">${s}</span>秒了! `  //模板字符串拼接

            }
     


这样一个简单的倒计时就做好啦
