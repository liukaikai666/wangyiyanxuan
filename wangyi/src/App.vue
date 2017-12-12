<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部 -->
    <footer>
      <div class="ftNav">
        <ul>
          <router-link to="/home"><li><label class="ftimg1"></label><span>首页</span></li></router-link>
          <router-link to="/shiwu"><li><label class="ftimg2"></label><span>识物</span></li></router-link>
          <router-link to="/fenlei"><li><label class="ftimg3"></label><span>分类</span></li></router-link>
          <router-link to="/cart"><li><label class="ftimg4"></label><span>购物车</span></li></router-link>
          <router-link to="/mine"><li><label class="ftimg5"></label><span>个人</span></li></router-link>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  font-size: 14px;
}
a{
  color: #333;
  text-decoration: none;
}
ul{
  list-style: none;
}

/*底部*/
footer{
  width: 100%;
  height: .48rem;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;

  display: flex;
  align-items: center;
}
.ftNav{
  width: 100%;
}
.ftNav ul{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.ftNav ul li{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.ftNav span{
  color: #666;
  font-size: .12rem;
  margin-top: .02rem;
}
.ftNav label{
  width: .2rem;
  height: .2rem;
  background: url(assets/img/foot.png) no-repeat;
  background-size: .2rem 2.43rem;
  display: inline-block;
}
.ftNav .ftimg1{
  /*background-position: 0 -.97rem;*/
  background-position: 0 -1.23rem;
}
.ftNav .ftimg2{
  background-position: 0 -1.72rem;
}
.ftNav .ftimg3{
  background-position: .02rem -.73rem;
}
.ftNav .ftimg4{
  background-position: 0 -.23rem;
}
.ftNav .ftimg5{
  background-position: 0 -2.23rem;
}
</style>
