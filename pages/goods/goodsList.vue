<template>
	<view>
		 <view class="header">
			<view @tap="handleSelect(index)"
			 class="target" v-for="(target,index) in filterByList"
			  :key="index" :class="{'on':target.selected}">
				{{target.text}}
			</view>
		</view>
		<!-- 占位 tabbar 有定位 -->
		<view class="place"></view>
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
	export default {
		data() {
			return {
				goodsList: [], // 商品列表大数组
				filterby: "all", // 默认选择的tab
				name:'',
				page: 1,
				size: 6,
				loadingText: "正在加载....",
				filterByList: [{
						text: "全部",
						selected: true,
						filterby: "all"
					},
					{
						text: "好货",
						selected: false,
						filterby: "public"
					},
					{
						text: "热门",
						selected: false,
						filterby: "hot"
					}
				]
			}
		},
		methods: {
			handleGoods(goods){
				//页面跳转 商品详情  把当前点击商品数据传过去
				uni.navigateTo({
					url:'./goods?goodsInfo='+JSON.stringify(goods)
				})
			},
			handleSelect(index) {
				// 其他的selected false
				for (let i = 0; i < this.filterByList.length; i++) {
					if (i != index) {
						this.filterByList[i].selected = false;
					}
				}
				this.filterByList[index].selected = true;
				
				// 不同选项卡数据请求 this.filterByList[index].filterby为全部求全部数据 为热门请求热门数据
				this.filterby = this.filterByList[index].filterby;
				this.page = 1;
				this.loadingText = "加载中...";
				this.goodsList = [];
				this.loadData();
			},
			loadData() {
					this.request({
						url: 'https://www.wudongming.top/uni/type_list/'+this.name+'/'+this.page+'/'+this.size,
						success: ((res) => {
							/* this.goodsList = res.data
							console.log(this.goodsList) */
							if(res.data.length <= 6){
								this.loadingText = "到底了";
							}
							
							if(res.data.length > 0){
								//全部
								res.data.forEach(item => {
									this.goodsList.push(item);
								})
								//好货
								if(this.filterby == "public"){
								this.goodsList = []
								var result = res.data.filter(item => {
										return item.public == true
									})
									result.forEach(item => {
									this.goodsList.push(item);
								})
								return
								}
								//热门
								if(this.filterby == "hot"){
								this.goodsList = []
								var result = res.data.filter(item => {
										return item.hot == true
									})
									result.forEach(item => {
									this.goodsList.push(item);
								})
								return
								}
							}else{
								this.loadingText = "到底了";
							}
						})
					})
			},
		onLoad(option) {
			 //console.log(option.name)
			// 动态修改nav title
			this.name = option.name
			uni.setNavigationBarTitle({
				title: option.name
			})
			// 加载数据
			this.loadData();
		},  //下拉重新加载
		onPullDownRefresh(){
			setTimeout(() => {
				this.page = 1;
				this.loadingText = "加载中...";
				this.goodsList = [];
				this.loadData();
				//停止刷新图标
				uni.stopPullDownRefresh();
			},1000)
		},
		// 上啦加载 页数+1
		onReachBottom(){
			this.page++;
			this.loadData();
		}
	}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}

			.icon {
				font-size: 26upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
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