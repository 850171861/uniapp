module.exports = (param) => {
	var url = param.url;
	var method = param.method;
	var header = param.header || {};
	var data = param.data || {};
	
	// 请求方式: GET POST 
	if(method){
		method = method.toUpperCase(); // 小写转成大写
		if(method == "POST"){
			header = {"content-type":"application/x-www-form-urlencoded"}
		}
	}
	
	// 发起请求 加载动画
	if(!param.hideLoading){
		uni.showLoading({title:"加载中..."})
	}
	
	// 发起网络请求
	uni.request({
		url: url,
		method:method || "GET",
		header:header,
		data: data,
		success: res => {
			if(res.status && res.status != 200){ // api错误
				uni.showModal({
					content:'获取数据失败'
				})
				return;
			}
			
			typeof param.success == "function" && param.success(res.data);
		},
		fail: (e) => { //接口调用失败的回调函数
			uni.showModal({
				content: '获取数据失败'
			})
			typeof param.fail == "function" && param.fail(e.data);
		},
		complete: () => {//获取数据成功 取消加载中
			uni.hideLoading();
			typeof param.complete == "function" && param.complete(e.data);
			return;
		}
	})
}