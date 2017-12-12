<template lang="html">
  <div id="shiwu">
    <main>

      <div class="banner"><img src="https://yanxuan.nosdn.127.net/4f16663df7815aa5abb3ea8fea39233c.jpg?imageView&quality=75" alt=""></div>

      <div class ="nav">
        <div class="navWrap">
          <div class="navCont">
            <p>260篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/254e04f823354c67d765d68c4012b64e.png?imageView&quality=75" alt="">
            <span>严选推荐</span>
          </div>

          <div class="navCont">
            <p>122篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/1662ac1fabbc2e495bdda39357a93d65.png?imageView&quality=75" alt="">
            <span>挑款师推荐</span>
          </div>

          <div class="navCont">
            <p>39篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/cbcc9dcba30d4f8448a4412db4d9122f.png?imageView&quality=75" alt="">
            <span>丁磊私物推荐</span>
          </div>

          <div class="navCont">
            <p>239篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/7be4ed9901fd6b110158e3381eb67ae2.png?imageView&quality=75" alt="">
            <span>严选LOOK</span>
          </div>

          <div class="navCont">
            <p>6篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/53cef980b13b1b20998d317989b184a1.png?imageView&quality=75" alt="">
            <span>口碑商品</span>
          </div>

          <div class="navCont">
            <p>2篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/e85c371f75223deb8a65b1f4cf64feb7.png?imageView&quality=75" alt="">
            <span>特色系列</span>
          </div>

          <div class="navCont">
            <p>6篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/8aa454c29a80d4525fff278defce73ce.png?imageView&quality=75" alt="">
            <span>严选全球</span>
          </div>

          <div class="navCont">
            <p>15篇文章</p>
            <img src="https://yanxuan.nosdn.127.net/dbd960a2ce21906a21c1ce4df78fbcf9.png?imageView&quality=75" alt="">
            <span>十点一刻</span>
          </div>
        </div>
      </div>

      <div v-for="item in result">
        <div class="itemsIn" v-for="info in item.subCateList">
          <div class="itTitle">
            <p>{{ info.name }}</p>
            <p>{{ info.frontName }}</p>
          </div>

          <div class="itConts">
            <div class="itMenu" v-for="pro in info.subCateList">
              <img :src="pro.imgUrl" alt="">
              <p class="itp1">{{ pro.name }}</p>
              <p class="itp2">{{ pro.frontDesc }}</p>
              <p class="itp3">{{ '￥' + pro.price }}</p>
            </div>

          </div>

        </div>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  data(){
    return {
      result: {}
    }
  },
  created() {
    this.axios.get('../static/data/canchu.json').then((res) => {
      // console.log(res);
      this.result = res.data.data.cateList;
    });
  }
}
</script>

<style lang="css">
/*.ftNav .ftimg1{
  background-position: 0 -1.23rem;
}
.ftNav .ftimg2{
  background-position: 0 -1.5rem;
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

main{
  width: 100%;
  margin-bottom: .48rem;
  background: #f4f4f4;
}
.banner{
  width: 100%;
  height: 2.1rem;
  /*margin-bottom: .1rem;*/
}
.banner img{
  width: 100%;
  height: 100%;
}

.nav{
  width: 100%;
  height: 1.56rem;
  background: #fff;
  margin-bottom: .1rem;
  overflow: auto;
}
.navWrap{
  width: 150%;
  display: flex;
}
.navCont{
  width: 50%;
  height: 1.05rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-left: .15rem;
  margin-top: .25rem;
}
.navCont p{
  position: absolute;
  top: 0;
  right: 0;
  white-space: nowrap;
  color: #fff;
  font-size: .12rem;
  background: rgba(0,0,0,.1);
  display: inline-block;
  width: 100%;
  text-align: right;
}
.navCont img{
  width: .82rem;
  height: .82rem;
}
.navCont{
  color: #333;
  font-size: .12rem;
}

.itemsIn{
  width: 100%;
  background: #fff;
  margin-bottom: .1rem;
}
.itTitle{
  width: 100%;
  height: .6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.itTitle p:first-of-type{
  font-size: .14rem;
  color: #333;
}
.itTitle p:last-of-type{
  font-size: .12rem;
  color: #999;
}
.itConts{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.itMenu{
  width: 47%;
  margin-left: 2%;
  margin-bottom: .1rem;
  position: relative;
}
.itMenu img{
  width: 100%;
  background: #f4f4f4;
}
.itp1{
  color: #9F8A60;
  background: #F1ECE2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: .345rem;
  line-height: .345rem;
  text-indent: 2%;
  font-size: .12rem;
}
.itp2{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: .3rem;
  color: #333;
  font-size: .14rem;
}
.itp3{
  color: #b4282d;
  font-size: .16rem;
}
</style>
