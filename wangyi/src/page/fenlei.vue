<template lang="html">
  <div id="fenlei">
    <div class="headTop">
  		<div class="shuru"><i></i><span>搜索商品，共10499款货物</span></div>
	 </div>

   <div class="left">
 		<div class="bao">
   		<ul>
         <router-view></router-view>

   			<li><router-link to="/Ftuijian">推荐区</router-link></li>
         <li><router-link to="/Fdongji">冬季专区</router-link></li>
         <li><router-link to="/Fchuxing">出行专区</router-link></li>
         <li><router-link to="/Fjujia">居家</router-link></li>
         <li><router-link to="/Fcanchu">餐厨</router-link></li>
         <li><router-link to="/Fpeijian">配件</router-link></li>
         <li><router-link to="/Ffuzhuang">服装</router-link></li>
         <li><router-link to="/Fdianqi">电器</router-link></li>
         <li><router-link to="/Fxihu">洗护</router-link></li>
         <li><router-link to="/Fzahuo">杂货</router-link></li>
         <li><router-link to="/Fyinshi">饮食</router-link></li>
         <li><router-link to="/Fyingtong">婴童</router-link></li>
         <li><router-link to="/Fzhiqu">志趣</router-link></li>
   		</ul>
 		</div>
 	</div>
</div>

</template>

<script>
export default {
  // data(){
  // 	return{
  // 		lists: ""
  // 	}
  // },
  //  	created(){
  //  		this.axios.get("../static/data/Ftuijian.json").then((res)=>{
  //  			this.lists = res.data.lists;
  //  		})
  // 	}
}
</script>

<style lang="css">
/*.ftNav .ftimg1{
  background-position: 0 -1.23rem;
}
.ftNav .ftimg2{
  background-position: 0 -1.72rem;
}
.ftNav .ftimg3{
  background-position: .02rem -.48rem;
}
.ftNav .ftimg4{
  background-position: 0 -.23rem;
}
.ftNav .ftimg5{
  background-position: 0 -2.25rem;
}*/

/*-----------------------设置.headTop的样式-----------*/
.headTop{
	width: 100%;
	height: 0.44rem;
	line-height: 0.44rem;
/*	position: fixed;
	top: 0;*/
	/*padding: 0 0.15rem;*/
	background-color: #fff;
	z-index: 3;
	text-align: center;
	border-bottom: 0.005rem  solid lightgray;

}
.headTop .shuru{
	vertical-align: top;
	display: inline-block;
	width:3.45rem;
	height: 0.28rem;
	line-height: 0.28rem;
	font-size: 0.18665rem;
	background-color: #ededed;
	border-radius: 0.03667rem;
	justify-content: center;
	text-align: center;
	margin-top: 0.08rem;
}

.headTop span{
	font-size: 0.13666rem;
	color: #666;
	line-height: 1.5;
	letter-spacing: 0.006rem;
}
.headTop i{
	display: inline-block;
	width: 0.135rem;
	height: 0.135rem;
	vertical-align: middle;
	background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png) no-repeat;
	background-size: 100% 100%;
	margin-right: 0.06rem;
}
/*------------left部分-----------------*/
.left{
	width: 0.81rem;
	padding: 0.1px;
	border-right: 0.005rem  solid lightgray;
	float: left;
	margin-bottom:  .49rem;
}
.left .bao{
	height: 5.64rem;

}
.left ul{
	width: 0.81rem;
	height: 100%;
	padding: 0;
	margin: 0;
	margin-top: 0.15rem;
	/*overflow: auto;*/
	/*transform: translate();*/
}
.left ul li{
	width: 0.81rem;
	height: 0.25rem;
	margin-top: 0.195rem;
	text-align: center;
	line-height: 0.25rem;
}
.left ul li a{
	font-size: 0.15rem;
}
.left ul li:first-of-type{
	margin-top: 0;
}
</style>
