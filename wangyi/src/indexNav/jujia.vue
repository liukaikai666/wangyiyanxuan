<template lang="html">
  <div id="jujia">
    <main>

      <div class="banner"><img src="http://yanxuan.nosdn.127.net/532a6fba88f11b712b99b384ea1fd0c9.jpg?quality=85&thumbnail=750x0&imageView" alt=""></div>

      <div v-for="pro in result">

        <div class="prosIn" v-for='info in pro.subCateList'>

              <div class="itTitle">
                <p>{{info.name}}</p>
                <p>{{info.frontName}}</p>

            </div>

            <div class="itConts">
              <div class="itMenu" v-for='pro in info.subCateList'>

               <router-link to="/cart"><img :src="pro.imgUrl" alt="" @click="add(pro)"></router-link>
                <p class="itp1">{{ pro.name }}</p>
                <p class="itp2">{{ pro.frontDesc }}</p>
                <p class="itp3">{{'￥' + pro.price}}</p>
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
      result: {},
      orderList:[]
    };
  },
  created() {
    this.axios.get('../static/data/jujia.json').then((res) => {
      this.result = res.data.data.cateList;


    });
  },
  mounted(){

  },
  methods:{
    add(pro){
      pro.num++;
        this.$store.dispatch("addOrder", pro);
    }
  }
}
</script>

<style lang="css">
/*main*/
main{
  width: 100%;
  margin-top: .74rem;
  margin-bottom: .48rem;
  background: #f4f4f4;
}
.banner{
  width: 100%;
  height: 2.1rem;
  margin-bottom: .1rem;
}
.banner img{
  width: 100%;
  height: 100%;
}

.prosIn{
  width: 100%;
  background: #fff;
  margin-bottom: .1rem;
}
.itTitle{
  width: 100%;
  height: .6rem;

  display: flex;
  flex-direction: column;
  align-pros: center;
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
