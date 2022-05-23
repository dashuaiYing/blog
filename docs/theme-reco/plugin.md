---
title: 原生js实现放大镜效果
date: 2022-05-17
---


### 多看美女可以长寿 保持心情愉悦
<img src="../../.vuepress/public/girl2.png">


<h1 style="text-align:center">原生js实现放大镜</h1>

html部分

```html
<div class="container" id="glassone">
        <div class="left">
            <!-- 左边显示图片区域 -->
            <div class="show-box">
                <img src="./img/show_1.jpg" alt="显示图片">
                <!-- 遮罩层 -->
                <div class="mask"></div>
            </div>
            <!-- 选项卡 点击小图片区域 -->
            <ul>
                <li><img src="./img/small_1.jpg" alt=""></li>
                <li><img src="./img/small_2.jpg" alt=""></li>
                <li><img src="./img/small_3.jpg" alt=""></li>
                <li><img src="./img/small_4.jpg" alt=""></li>
            </ul>
        </div>
        <!-- 放大镜区域 -->
        <div class="right">
            <img src="./img/show_1.jpg" alt="大背景图">
        </div>
    </div>
    
```

css部分

```css
*{padding: 0; margin: 0;}
ul,li{list-style: none;   cursor: pointer;}

.container{
    width: 1200px;
    margin: 20px auto;
    display: flex;
}
.container .left .show-box{
    width: 350px;
    height: 350px;
    position: relative;
}

.container .left .mask{
    position: absolute;
    left: 0;
    top:0;
    width: 200px;
    height: 200px;
    background-color: rgba(199, 223, 67, 0.5);
    display: none;
    pointer-events: none;
    cursor: move;
}
.container .left ul{
    width: 350px;
    display: flex;
    justify-content: space-around;
}


/* 放大镜区域 */
.container .right{
    position: relative;
    margin-left: 40px;
    width: 400px;
    height: 400px;
    overflow: hidden;
    border: 1px solid red;
    display: none;
}
.container .right img{
    position: absolute;
    top: 0;
    left: 0;
    display: none;

}
.active{
    border: 2px solid red;
}
```
这是写好了的样式

![在这里插入图片描述](https://img-blog.csdnimg.cn/23420693c4514c00ad584aca67867203.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASXJsaWFf,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)






js部分 (面向对象实现)

```js
class GlassZoom {

    constructor(id) {
        //获取节点对象
        this.root = document.querySelector(id)
        this.showPicBox = this.root.querySelector('.show-box') //显示图片的盒子(对应小图片)
        this.showPic = this.root.querySelector('.show-box>img')
        this.mask = this.root.querySelector('.mask') // 遮罩层
        this.lis = this.root.querySelectorAll('ul>li') //点击小图片(选项)
        this.bigPicBox = this.root.querySelector('.right') //放大镜的盒子
        this.bigPic = this.root.querySelector('.right>img') //放大镜的图片
        // console.log(this.root)
        this.init()
    }
    init(){
        this.changeTab()
        this.move()
    }
    /*
    计算放大镜图片的宽高
    遮罩层 this.mask       =      放大镜盒子 this.bigPicBox
    ————————————————       =     ————————————————————————
  显示图片this.showPicBox  =        放大镜图片 this.bigPic

  放大镜图片的宽度为 this.bigPic = 放大镜盒子 this.bigPicBox * 显示图片this.showPicBox/ 遮罩层 this.mask
    */
    countWh() {
        this.bigPic.style.width = this.bigPicBox.offsetWidth * this.showPicBox.offsetWidth / this.mask.offsetWidth + 'px'
        this.bigPic.style.height = this.bigPicBox.offsetHeight * this.showPicBox.offsetHeight / this.mask.offsetHeight + 'px'
    }

    //切换选项卡
    changeTab() {
        let _this = this
        //循环数组 绑定点击事件
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].onclick = function () {
                //  console.log(this)
                _this.clean() //清除样式
                this.className = 'active' //给当前选项添加样式
                _this.showPic.src = `./img/show_${i+1}.jpg`
                _this.bigPic.src = `./img/show_${i+1}.jpg`
            }
        }
    }
    //清空样式
    clean() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
        }

    }

    //遮罩层移动
    move() {
        this.showPicBox.onmouseover = () => {
            this.bigPicBox.style.display = 'block'
            this.bigPic.style.display = 'block'
            this.mask.style.display = 'block'
            this.countWh()
            // console.log(this.bigPic.style.width)
            // console.log(this)
        }
        this.showPicBox.onmouseout = () => {
            this.bigPicBox.style.display = 'none'
            this.bigPic.style.display = 'none'
            this.mask.style.display = 'none'
            // console.log(this)
        }

        // 给事件源绑定移动事件 在显示图片的盒子里移动
        this.showPicBox.onmousemove = (e) => {
            e = e || window.event
            let x = e.offsetX - this.mask.offsetWidth / 2
            let y = e.offsetY - this.mask.offsetHeight / 2

            //边界检查
            if (x < 0) x = 0
            if (y < 0) y = 0
            if (x > this.showPicBox.offsetWidth - this.mask.offsetWidth) x = this.showPicBox.offsetWidth - this.mask.offsetWidth
            if (y > this.showPicBox.offsetHeight - this.mask.offsetHeight) y = this.showPicBox.offsetHeight - this.mask.offsetHeight

            //赋值给遮罩层
            this.mask.style.left = x + 'px'
            this.mask.style.top = y + 'px'

            //计算遮罩层移动的比列
            let moveX = x / (this.showPicBox.offsetWidth - this.mask.offsetWidth)
            let moveY = y / (this.showPicBox.offsetHeight - this.mask.offsetHeight)

            // console.log(moveX,moveY)
            //赋值
            this.bigPic.style.left = -moveX * (this.bigPic.offsetWidth - this.bigPicBox.offsetWidth) + 'px'
            this.bigPic.style.top = -moveY * (this.bigPic.offsetHeight - this.bigPicBox.offsetHeight) + 'px'
        }
    }
}
```

这里是图片,可以自己去试试
![在这里插入图片描述](https://img-blog.csdnimg.cn/2103d49a39e5431c859ef05ef4464d43.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASXJsaWFf,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/cf8882ca7f964c149f859313c4838e07.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASXJsaWFf,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8fbc0a338254483e878100f8b4daf47d.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASXJsaWFf,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9825d7689ae643c092b0bb6e6c38fa7b.jpg#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/807727b11e724d47b292b0bdc7c95f7e.jpg#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c7d8016437c14a5cb8807fe4f9a12560.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASXJsaWFf,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3a4ba3998c7447598a8aee0b567c96a4.jpg#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/27d1ee6e727e4fec90c17d3d0519baeb.jpg#pic_center)