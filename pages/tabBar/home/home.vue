<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
	<!-- 自定义顶部导航 -->
    <pageHeader />	
	
	<!-- 轮播图 -->
	<view class="swiper">
		<view class="swiper-box">
			<!--circular:采用衔接滑动   autoplay:自动切换 -->
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="'https://www.wudongming.top/uni-app-api'+swiper.img"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				<!-- 底部切换显示   -->
				<view :class="{'on':currentSwiper >= index}" class="dots" v-for="(swiper,index) in swiperList" :key="index"></view>
			</view>
		</view>
	</view>
	<!-- 分类列表 -->
	<view class="category-list">
		<view @tap="handleCategory(item)" class="category" v-for="(item,index) in categoryList" :key="index">
			<view class="img">
				<image :src="'https://www.wudongming.top/uni-app-api'+item.img"></image>
			</view>
			<view class="text">{{item.name}}</view>
		</view>
	</view>
	
	<!-- 广告图banner -->
	<view v-if="promotion.length > 0" class="banner">
		<image src="/static/img/home/ad.jpg"></image>
	</view>
	
	<!-- 活动区 -->
	<view class="promotion" v-if="promotion.length > 0">
		<view class="text">优惠活动</view>
		<view class="list">
			<view @tap="handlePromotion(item)" class="column" v-for="(item,index) in promotion" :key="index">
				<view class="top">
					<view class="title">{{item.title}}</view>
				</view>
				<view class="left">
					<view class="ad">{{item.ad}}</view>
					<view class="into">点击进入</view>
				</view>
				<view class="right">
					<image :src="'https://www.wudongming.top/uni-app-api'+item.img"></image>
				</view>
			</view>
		</view>
	</view>
	<!-- 商品列表 -->
 	<view class="goods-list">
		<view class="product-list">
			<view class="product" @tap="handleGoods(goods)" v-for="goods in goodsList" :key="goods.goods_id">
				<image mode="widthFix" :src="'https://www.wudongming.top/uni-app-api'+goods.img"></image>
				<view class="name">{{goods.title}}</view>
				<view class="info">
					<view class="price">
						<text>￥</text>
						{{goods.price}}
					</view>
					<view class="slogan">{{goods.slogan}} <text>人付款</text></view>
				</view>
			</view>
		</view>
		<view class="loading-text">{{loadingText}}</view>
	</view> 
	
	</view>
</template>

<script>
	import pageHeader from '../../../components/pageHeader.vue'
	export default {
		data(){
			return{
				swiperList:[],//轮播图
				categoryList:[],//分类
				promotion:[],  //活动
				goodsList: [], // 商品列表大数组
				filterby: "all", // 默认选择的tab
				page: 1,
				size: 6,
				loadingText: "正在加载....",
				currentSwiper:0
			}
		},
		components:{
			pageHeader
		},
		onLoad(){
			this.initData()
			this.loadData()
		},
		methods:{
			handleGoods(goods){
				//页面跳转 商品详情  把当前点击商品数据传过去
				uni.navigateTo({
					url:'../../goods/goods?goodsInfo='+JSON.stringify(goods)
				})
			},
			handlePromotion(item) {
				uni.showToast({
					title: item.title,
					icon: 'none'
				})
			},
			handleCategory(item) {
				// 分类跳转
				 //console.log(item.name);
				uni.navigateTo({
					url:"../../goods/goodsList?name="+item.name 
				})
			},
			initData(){
					this.request({
						  url:"https://www.wudongming.top/uni/mall_list",
						  success:(res)=>{
							  this.swiperList = res.data.swiperList
							  this.categoryList = res.data.categoryList
							  this.promotion = res.data.promotion
						  }
					  })
			},
			swiperChange(event){
				//console.log(event.detail.current)
				this.currentSwiper = event.detail.current
			},
			loadData() {
					this.request({
						url:`https://www.wudongming.top/uni/type_list/0/${this.page}/${this.size}`,
						success: ((res) => {
							/* this.goodsList = res.data
							console.log(this.goodsList) */
							if(res.data.length > 0){
								res.data.forEach(item => {
									this.goodsList.push(item);
								})
							}else{
								this.loadingText = "到底了";
							}
						})
					})
			},
			onReachBottom(){ //上拉触发
					this.page++;
				   this.loadData()
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 92%;
			height: 30.7vw; //1vw相当1%宽  1vh相当1%高
			overflow: hidden;
			border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 30.7vw;

				swiper-item {
					image {
						width: 100%;
						height: 40vw;
					}
				}
			}

			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;

				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;

					&.on {
						width: (100%/3);
					}
				}
			}
		}
	}

	.category-list {
		width: 92%;
		margin: 0 4%;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.category {
			width: 25%;
			margin-top: 50upx;
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 11vw;
					height: 11vw;
				}
			}

			.text {
				margin-top: 16upx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24upx;
				color: #3c3c3c;
			}
		}
	}

	.banner {
		width: 92%;
		margin: 40upx 4%;

		image {
			width: 100%;
			height: 36vw;
			border-radius: 4upx;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3);
		}
	}

	.promotion {
		width: 92%;
		margin: 10upx 4% 30upx 4%;

		.text {
			width: 100%;
			height: 60upx;
			font-size: 34upx;
			font-weight: 600;
			margin: 10upx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.column {
				width: 43%;
				padding: 15upx 3%;
				background-color: #ebf9f9;
				border-radius: 10upx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;

					.title {
						font-size: 30upx;
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: #acb0b0;
					}

					.into {
						width: 100%;
						font-size: 24upx;
						color: #aaa;
						margin-bottom: 5upx;
					}
				}

				.right {
					width: 18.86vw;
					height: 18.86vw;

					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
		}
	}
	
	.goods-list {
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}
		.product-list {
			width: 92%;
			padding: 0 4% 3vw 4%;
			column-count: 2;
			column-gap: 1em;
		 
		 .product {
		 	break-inside: avoid;
		 	border-radius: 20upx;
		 	background-color: #fff;
		 	margin: 0 0 15upx 0;
		 	box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);
			
		image {
			width: 100%;
			border-radius: 20upx 20upx 0 0;
		}
		.name {
			width: 92%;
			padding: 6upx 4%;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			text-align: justify;
			overflow: hidden;
			font-size: 30upx;
		}
		.info {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			width: 92%;
			padding: 10upx 4% 10upx 4%;
		.price {
			color: #e65339;
			font-size: 30upx;
			font-weight: 600;
		}
		.slogan {
			color: #807c87;
			font-size: 24upx;
		}
	 }
	}		
  }
}
	
	
	
	
</style>