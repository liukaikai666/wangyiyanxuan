<template lang="html">
  <div id="Fjujia">
    <div class="right">
    	<div class="content">
    	   <div class="tu"><img src="http://yanxuan.nosdn.127.net/015ba27b51d27aaae428015a11e4ac16.png?imageView&thumbnail=0x196&quality=75"></div>
    		<div class="biaoti"><span class="sp1">服装</span><span class="sp2">分类</span></div>
    		 <div class="list">
    			<ul>
    				<li v-for="itm in shuList"><a href="#">
    				<div class="listTu"><img :src="itm.bannerUrl"></div>
    				 <p>{{itm.head}}</p>
    				</a></li>
    				</ul>
    			</div>
    		</div>
	    </div>
  </div>
</template>

<script>
export default {
  data(){
   return{
     shuList:{}
   }
 },
   created(){
     this.axios.get("../static/data/Fjujia.json").then((res)=>{
       this.shuList = res.data.shuList;
     });
   }
}
</script>

<style lang="css">
#Fjujia{
  position: absolute;
  margin-left: .81rem;
  margin-bottom: .49rem;
}
/*------------------------右边部分------------------*/
.right{
	width:2.91rem;
	/*height: 4.994rem;*/
	/*float: left;*/
}
.right .content{
	margin:0 auto;
	/*margin-top: 0.15rem;*/
	width: 2.63rem;
	height: 4.74rem;
}
.right .content .tu{
	width: 2.64rem;
	height:0.96rem;
}
.right .content .tu img{
	width: 100%;
	height: 100%;
}
.right .content .biaoti{
	margin: 0 auto;
	text-align: center;
	width: 2.64rem;
	height: 0.54rem;
	line-height: 0.54rem;
}
.right .content .biaoti span{
	font-size: 0.12rem;
	color: gray;
}
.right .content .biaoti .sp1::before{
	content: '——';
	color: lightgray;
	margin-right: 0.1rem;
}
.right .content .biaoti .sp2::after{
	content: '——';
	color: lightgray;
	margin-left: 0.1rem;
}
/*---------------------list-------------------*/
.right .content .list ul{
	width: 100%;
	padding: 0;
	margin: 0;
	margin-left: 0.02rem;
}
.right .content .list ul li{
	width: 0.72rem;
	height: 1.08rem;
	float: left;
	margin-right: 0.17rem;
  margin-top: 0;
}
.right .content .list ul li:nth-of-type(3n){
	margin: 0;
}
.right .content .list ul li .listTu{
	width: 0.72rem;
	height: 0.72rem;
}
.right .content .list ul li .listTu img{
	width: 100%;
	height: 100%;
}
.right .content .list ul li p{
	margin: 0;
	font-size: 0.122rem;
}
.right .content .list ul li a{
	text-align: center;
}
</style>
