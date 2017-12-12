<template lang="html">
  <div id="cart">
  	<div class="shopshHead">购物车</div>
	<div class="shHead">
		<ul>
			<li><i></i><span>30天无忧退货</span></li>
			<li><i></i><span>48小时快速退款</span></li>
			<li><i></i><span>满88元免邮费</span></li>
		</ul>
	</div>
	<div class="shopcontent">
	<!-- <div class="tu"> -->
<!-- 	<img src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png">
	</div>
	<p>去添加点什么吧</p> -->

	<ul v-for="(pro,index) in orderList">
		<li class="shopan"><input v-model="like" type="checkbox"></li>
		<li class="shoptu"><img :src="pro.imgUrl" alt="""></li>
		<li class="shopname">{{ pro.name }}</li>
		<li class="jia" @click="jia(pro)"><span>+</span></li>
			<li class="minus" @click="minus(pro)"><span>-</span></li>
			<li class="num" >{{pro.num}}</li>
		<li class="shopshu">{{pro.price}}   x</li>
		<li class="shan"><input @click="shanchu(index)" type="button" value="删除"></li>
		
	
	</ul>
	</div>
	<div class="shopdibu">
		<span>￥</span>
		<span>{{totalMoney}}</span>
		<input @click="xiadan" type="button" value="下单">
	</div>


  </div>
</template>

<script>
export default {
	name:'cart',
	mounted:function(){
		this.orderList = this.$store.getters.getOrderList;

	},
	data(){
		return{
			orderList:[],
			like:"true"
			// num:1
		}
	},
	computed:{
		totalMoney(){
				var totalMoney = 0;
				this.orderList.forEach((n)=>{
					totalMoney += n.price*n.num
				});

				return totalMoney;
	}
},
	methods:{
		jia(pro){
			pro.num++
		},
		minus(pro){
			if (pro.num>0) {				
			pro.num--
			}
		},
		shanchu(index){	
			this.orderList.splice(index,1);	
		},
		xiadan(pro){
			alert("祝老师生活愉快")
		}
	}

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
  background-position: .02rem -.75rem;
}
.ftNav .ftimg4{
  background-position: 0 0;
}
.ftNav .ftimg5{
  background-position: 0 -2.25rem;
}*/
@charset"UTF-8"
/*设置统一的样式*/
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html{
	font-size: 100px;
}
body{
	font-size: 16px;
	margin: 0;

}
ul{
	list-style: none;
}
a{
	text-decoration: none;
	color: #333;
}
/*--------------------------shopshHead-------------------------*/
.shopshHead{
	width: 100%;
	height: 0.439rem;
	text-align: center;
	line-height: 0.439rem;
	font-size: 0.19rem;
	color: #333;
}
/*---------------------shHead-------------------*/
.shHead{
	width: 3.75rem;
}
.shHead ul{
	width:3.45rem;
	height:0.35rem;
	line-height: 0.35rem;
	padding:0 0.15rem;
	display: flex;
	justify-content: space-between;
	background-color: #f4f4f4;
	margin: 0;
	position: relative;
}
.shHead ul li span{
		font-size: 0.11rem;
		color: #333;
}
.shHead ul li i{
	float: left;
	width: 0.1rem;
	height: 0.1rem;
	background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png) no-repeat;
	background-size: 50%,50%;
	margin-top: 0.168rem;
}
.shopcontent{
	width: 3.75rem;
	height:6rem;
	background-color: #f4f4f4;
	padding: 0.1px;
}
.shopcontent .tu{
	width: 1.24rem;
	height: 1.24rem;
	margin: 0 auto;
	margin-top: 1.6rem;
}
.shopcontent .tu img{
	width: 100%;
	height: 100%;
}
.shopcontent p{
	width: 1.24rem;
	text-align: center;
	color: #999;
	margin: 0 auto;
	font-size: 0.1rem;
}
/*---------------------------shopcontent-------------------*/
.shopcontent ul{
	width: 3.55rem;
	height: 1.04rem;
	line-height: 0.7rem;
	margin-left: 0.19rem;
	margin-top: 0.05rem;
	position: relative;

}
.shopcontent ul .shan input{
	position: absolute;
	right: 0.2rem;
	bottom: 0.2rem;
	width:0.5rem;
	height: 0.2rem;
	letter-spacing: 0.02rem;
	background-color: #f4f4f4;
	font-size: 0.16rem;
	color: #666;
	border: none;
	outline: none;

}
.shopcontent ul li{
	float: left;
}
.shopcontent ul .shoptu{
	width: 0.795rem;
	height: 0.795rem;
}
.shopcontent ul .shoptu img{
	width: 100%;
	height: 100%;
}
.shopcontent ul .shopname{
	width: 1.3rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-left: 0.1rem;
	font-size: 0.16rem;
}
.shopcontent ul .minus{
	float: right;
	margin-right: 0.1rem;
	font-size: 0.23rem;
} 
.shopcontent ul .jia{
	margin-left: 0.1rem;
	font-size: 0.2rem;
}
.shopcontent ul .shopshu{
	float: right;
	margin-right: 0.05rem;
}
.shopcontent ul .shopan input{
	color: red;
}
.shopcontent ul .num{
	float: right;
	margin-right: 0.1rem;
}
/*------------------------shopdibu---------------------*/
.shopdibu{
	width: 3.75rem;
	height: 0.48rem;
	background-color: #fff;
	position: fixed;
	bottom: 0.5rem;
}
.shopdibu input:first-of-type{
	float: right;
	width: 1.125rem;
	height: 0.48rem;
	text-align: center;
	line-height: 0.48rem;
	background-color: #b4282d;
	font-size: 0.16rem;
	color: #fff;
	border: none;
}

.shopdibu span:first-of-type{
	/*float: right;*/
	position: absolute;
	top: 0.15rem;
	right: 1.72rem;
	color: #b4282d;
	font-size: 0.16rem;
}
.shopdibu span:last-of-type{
	position: absolute;
	right: 1.3rem;
	top: 0.15rem;
	color: #b4282d;
	font-size: 0.16rem;
}
</style>
