<template lang="html">
  <div id="home">
    <!-- 头部 -->
    <header>
      <div class="hdTop">
        <div class="logo">
          <router-link to="/home"><img src="../assets/img/logo.png" alt=""></router-link>
        </div>
        <div class="search">
          <router-link to="/home"><img src="../assets/img/search.png" alt=""><span>搜索商品,共10499款好物</span></router-link>
        </div>
      </div>
      <div class="hdNav">
        <ul>
          <router-link to="/tuijian"><li>推荐</li></router-link>
          <router-link to="/jujia"><li>居家</li></router-link>
          <router-link to="/canchu"><li>餐厨</li></router-link>
          <router-link to="/peijian"><li>配件</li></router-link>
          <router-link to="/fuzhuang"><li>服装</li></router-link>
          <router-link to="/dianqi"><li>电器</li></router-link>
          <router-link to="/xihu"><li>洗护</li></router-link>
          <router-link to="/zahuo"><li>杂货</li></router-link>
          <router-link to="/yinshi"><li>饮食</li></router-link>
          <router-link to="/yingtong"><li>婴童</li></router-link>
          <router-link to="/zhiqu"><li>志趣</li></router-link>
        </ul>
      </div>
    </header>
    <router-view></router-view>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
/*.ftNav .ftimg1{
  background-position: 0 -.97rem;
}
.ftNav .ftimg2{
  background-position: 0 -1.72rem;
}
.ftNav .ftimg3{
  background-position: .02rem -.75rem;
}
.ftNav .ftimg4{
  background-position: 0 -.23rem;
}
.ftNav .ftimg5{
  background-position: 0 -2.25rem;
}*/


/*头部*/
header{
  width: 100%;
  height: .74rem;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.hdTop{
  width: 100%;
  height: .44rem;
  display: flex;
  align-items: center;
}
.logo{
  width: 25%;
}
.logo a{
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img{
  width: 70%;
}

.search{
  width: 70%;
  background: #ededed;
  border-radius: .05rem;
}
.search a{
  width: 100%;
  height: .28rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.search img{
  width: 5%;
  margin-right: .05rem;
}
.search span{
  color: #666;
  font-size: .14rem;
}


.hdNav{
  width: 100%;
  height: .3rem;
  display: flex;
  align-items: center;
}
.hdNav ul{
  width: 150%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
}
.hdNav ul a{
   height: 96%;
   padding: 0 .08rem;
   white-space: nowrap;
   display: flex;
   align-items: center;
   margin-left: .22rem;
   font-size: .14rem;
}
</style>
<style media="screen" scoped>
.router-link-active{
  color: #b4282d;
  border-bottom: 2px solid #b4282d;
}
</style>
