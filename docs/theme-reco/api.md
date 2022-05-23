---
title: 统计字符串个数、吸顶效果和发送微博
date: 2022-05-16
---

### 多看美女可以长寿 保持心情愉悦
<img src="../../.vuepress/public/girl1.png">


<h2 style="text-align:center">统计字符串个数、吸顶效果和微博发送</h2>>

### 一、统计字符串个数

```js
var str =  'asojfhsiohsasdasdsadasd'
//思路  1.声明一个空对象来做键和值 //2.遍历原字符串 找到一个让新的对象里面的键对应的值++ 找不到就赋值为1

var obj = { }
for(var i=0;i<str.length;i++){
    //声明一个变量来接收字符串的值
    var item = str[i]
    if( obj[item]) {
        obj[item] ++
    }else{
        obj[item] = 1
    }
}
console.log(obj)  //{a: 5, s: 7, o: 2, j: 1, f: 1, …}
```



### 二、吸顶效果

我们在浏览网页的时候 为了方便去其他网页 可以把导航部分固定在页面上方 便于随时去其他页面

html部分 :

```html
   <header>网页头部区域</header>
    <nav>网页导航</nav>
    <main>网页主要内容区域</main>
```

css部分

```css
       *{
            margin: 0;
            padding: 0;
        }
        header{
            width: 100%;
            height: 200px;
            background-color: red;
        }
        nav{
            width: 100%;
            height: 80px;
            background-color: #ccc;
        }
        main{
            width: 100%;
            height: 1200px;
            background-color: gray;
        }
```

js部分

```js
        //获取元素
        var nav = document.querySelector('nav')
        //使用滚动事件
        window.onscroll = function(){
            //获取当前滚动位置
            var scrollTop = document.documentElement.scrollTop ||             document.body.scrollTop
            //判断
            if(scrollTop>=200){
                //如果滚动条位置大于200,给他设置固定定位
                nav.style.position = 'fixed'
                nav.style.top = 0
            }else{
                 //当条件不满足时让定位清空
                 nav.style.position = ''
            }
        }
```

### 三、简单的发送动态

```html
 <div class="wb">
        <textarea></textarea>
        <div>
            <button>发送</button>
        </div>
        <ul>
            <!-- <li>哈哈哈哈<span>删除</span></li>
            <li>哈哈哈哈<span>删除</span></li>
            <li>哈哈哈哈<span>删除</span></li>
            <li>哈哈哈哈<span>删除</span></li> 
             这一部分是用户自己添加的信息-->
                          
        </ul>
    </div>
```

css

```css
      * {
            margin: 0;
            padding: 0;
        }

        .wb {
            width: 500px;
            min-height: 200px;
            margin: 50px auto;
        }

        .wb textarea {
            width: 500px;
            height: 150px;
            resize: none;
        }

        .wb div {
            height: 50px;
        }

        .wb button {
            float: right;
            width: 100px;
            height: 25px;
            margin-top: 10px;
        }

        .wb ul li {
            list-style: none;
            border-bottom: 1px dashed #ccc;
            line-height: 40px;
            font-size: 14px;
        }

        .wb ul li span {
            float: right;
            color: red;
            cursor: pointer;
            
        }
```

js 部分

```js
  //分析思路  1.获取对应的元素 2.创造一个li，他的内容来自输入的文本内容 3.把li追加到ul里面
                    var btn = document.querySelector('button')
                    var txt = document.querySelector('textarea')
                    var ul = document.querySelector('ul')
                   //给发送按钮绑定事件
                   btn.onclick = function(){
                        //进行非空验证码 如果文本框未输入任何内容 点击发送 不执行以下代码
                        if(txt.value == ''){
                            //提示信息
                            alert('发送内容不能为空哦！！')
                            return
                        }

                       //创造一个li来显示内容,值来自输入框
                       var li = document.createElement('li')
                       li.innerHTML = txt.value + '<span>删除</span>'
                        //因为正常的添加内容后都在已经有的内容前面 所以我们还需要进一步优化
                        // 获取第一个li
                        var firstLi = document.querySelectorAll('li')[0]
                       //后面的内容都追加到第一个li的前面去
                        ul.insertBefore(li,firstLi)
                        //删除功能的实现:遍历所有的span  给每一个span绑定删除事件 this表示当前点击的对象
                        var allSpan = document.querySelectorAll('span')
                        for(var i=0;i<allSpan.length;i++){
                            allSpan[i].onclick = function(){
                                this.parentElement.remove()
                            }
                        }

                       //发送完毕后清空输入框
                       txt.value = ''
                   }
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/cc3c39bc169c4b198ff2b9a9c9910d4e.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASXJsaWFf,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0cbd96603226441d8860216fd1c2a708.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASXJsaWFf,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)