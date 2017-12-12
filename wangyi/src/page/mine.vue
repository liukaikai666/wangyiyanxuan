<template lang="html">
  <div id="mine">
    <div class="userInfo-box">
       <div class="userInfo">
           <div class="userInfo-left">
               <img class="avatar" src="../assets/img/8945ae63d940cc42406c3f67019c5cb6.png">
               <div class="user-info">
                   <p class="nickName">m12345678910</p>
                   <div>
                       <span>普通用户</span>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div class="info-content">
       <ul class="info-content-list">
           <li>
               <a>
                   <i class="ico"></i>
                   <span class="txt">我的订单</span>
               </a>
           </li>
           <li>
               <a>
                   <i class="ico"></i>
                   <span class="txt">周六一起拼</span>
               </a>
           </li>
           <li>
               <a>
                   <i class="ico"></i>
                   <span class="txt">售后服务</span>
               </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">优惠券</span>
              </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">我的红包</span>
              </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">优先购</span>
              </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">礼品卡</span>
              </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">积分中心</span>
              </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">会员俱乐部</span>
              </a>
           </li>
           <li>
               <a>
                   <i class="ico"></i>
                   <span class="txt">地址管理</span>
               </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">账号安全</span>
              </a>
           </li>
           <li>
               <a>
                   <i class="ico"></i>
                   <span class="txt">联系客服</span>
               </a>
           </li>
           <li>
              <a>
                  <i class="ico"></i>
                  <span class="txt">帮助中心</span>
              </a>
           </li>
           <li>
               <a>
                   <i class="ico"></i>
                   <span class="txt">意见反馈</span>
               </a>
           </li>
       </ul>
   </div>
   <div class="user-info-line"></div>
   <div class="unlogin-box">
       <button class="unlogin">退出登录</button>
   </div>
   <div class="line"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
*{
  margin: 0;
  padding: 0;
}
#mine{
  margin-bottom: .48rem;
}
.userInfo-box{
	width: 100%;
	height: 1.35rem;
	color: #333;
	line-height: 1.35rem;
}
.userInfo{
	padding:0 0.15rem;
	height:100%;
	background:url(../assets/img/6ae93353e95b3450a2710bb43f925a63.jpg)no-repeat;
	background-size:100%;
	display:flex;
	align-items:center;
}
.userInfo-left{
	display: flex;
	width: 2.7rem;
	align-items: center;
	justify-content: flex-start;
	padding: 0.32rem 0;
}
.userInfo-left .avatar{
	vertical-align: middle;
	width: 0.70992rem;
	height: 0.70992rem;
	border-radius: 50%;
}
.userInfo-left .user-info{
	width: 1.84008rem;
	height: 0.4rem;
	margin-left: 0.15rem;
	flex: 1;
	line-height: 1;
	overflow: hidden;
}
.userInfo-left .nickName{
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 0.18rem;
	font-weight: 700;
	height: 0.215rem;
	line-height:0.22rem;
	text-align: left;
	margin-bottom: 0.05rem;
}
.user-info div{
	height: 0.135rem;
}
.user-info span{
	float: left;
	color: #7f7f7f;
	font-size: 0.14rem;
	vertical-align: middle;
}
.info-content{
	width: 100%;
	height: 4.52rem;
}
.info-content .info-content-list{
	height: 100%;
}
.info-content-list li{
	float: left;
	width: 33.3333%;
	height: 0.9rem;
	box-sizing: border-box;
	border-right: 1px solid rgba(0,0,0,.15);
	border-bottom: 1px solid rgba(0,0,0,.15);
}
.info-content-list li a{
	position: relative;
	display:block;
	height: 0.675rem;
	text-align: center;
	padding-top: 0.225rem;
}
.info-content-list li .ico{
	position: absolute;
	top:0.225rem;
	left: 0.4949rem;
	display: inline-block;
	vertical-align: middle;
	width: 0.25rem;
	height: 0.25rem;
	margin-bottom: 0.08rem;
	background-repeat: no-repeat;
	background-size:cover;

}
.info-content-list li:nth-of-type(1) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -2.4rem;
}
.info-content-list li:nth-of-type(2) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -3rem;
}
.info-content-list li:nth-of-type(3) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -0.3rem;
}
.info-content-list li:nth-of-type(4) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -0.6rem;
}
.info-content-list li:nth-of-type(5) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -3.85rem;
}
.info-content-list li:nth-of-type(6) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -3.6rem;
}
.info-content-list li:nth-of-type(7) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -1.2rem;
}
.info-content-list li:nth-of-type(8) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -3.25rem;
}
.info-content-list li:nth-of-type(9) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -2.7rem;
}
.info-content-list li:nth-of-type(10) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 0;
}
.info-content-list li:nth-of-type(11) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -4.15rem;
}
.info-content-list li:nth-of-type(12) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -1.8rem;
}
.info-content-list li:nth-of-type(13) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -1.5rem;
}
.info-content-list li:nth-of-type(14) .ico{
	background-image: url(../assets/img/icos.png);
	background-position: 0 -0.9rem;
}
.info-content-list li .txt{
	display: block;
    font-size: .13rem;
    line-height: 1;
    color: #333;
    margin-top: 0.32rem;
}
.user-info-line{
	height: 0.2rem;
	background-color: #eee;
}
.unlogin-box{
	height: 0.49rem;
	line-height: 0.49rem;
	text-align: center;
	font-size: 0.14rem;
}
.unlogin-box .unlogin{
	width: 100%;
	height: 100%;
	border: none;
	outline:none;
	color: #333;
	background-color: #fff;
}
</style>
