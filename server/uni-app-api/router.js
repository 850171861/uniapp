//引入express
const express = require('express')
//路由
const router = express.Router()
//首页数据
router.get('/mall_list',function(req,res){
    const profileFields = {
        //轮播图
        swiperList: [
          { id: 1, src: 'url1', img: '/static/images/home/1.png' },
          { id: 2, src: 'url2', img: '/static/images/home/2.png' },
          { id: 3, src: 'url3', img: '/static/images/home/3.png' }
        ],
        //类型
        categoryList: [
          { id: 1, name: '玩具',img: '/static/images/category/home1.png' },
          { id: 2, name: '手机', img: '/static/images/category/home3.png' },
          { id: 3, name: '水果', img: '/static/images/category/home7.png' },
          { id: 4, name: '数码', img: '/static/images/category/home2.png' },
          { id: 5, name: '家用', img: '/static/images/category/home4.png' },
          { id: 6, name: '零食', img: '/static/images/category/home5.png' },
          { id: 7, name: '书籍', img: '/static/images/category/home6.png' },
          { id: 8, name: '衣服', img: '/static/images/category/home8.png' }
        ],
        //秒杀
        promotion: [
          {
            title: '整点秒杀',
            ad: '整天秒杀专区',
            img: '/static/images/home/s1.png'
          },
          {
            title: '限时抢购',
            ad: '每天23点上线',
            img: '/static/images/home/s2.png'
          }
        ]
      }
      res.json({
          status:200,
          msg:"success",
          data:profileFields
      })
      
})
//主要分类数据
router.get('/type_list/:name/:page/:size',function(req,res){
  const name = req.params.name
  const type_list=[
    {goods_id:1,name:'水果',title:'烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 新鲜水果',img:'/static/images/goods/goods5.jpg',price:'49.00',number:1,slogan:'720', hot: true},
    {goods_id:2,name:'水果',title:'澳大利亚直采脐橙 精品澳橙12粒 单果130-180g 水果生鲜进口橙子',img:'/static/images/goods/goods6.jpg',price:'38.00',number:1,slogan:'720',public: true},
    {goods_id:20,name:'水果',title:'烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 新鲜水果',img:'/static/images/goods/goods5.jpg',price:'49.00',number:1,slogan:'720', hot: true},
    {goods_id:21,name:'水果',title:'澳大利亚直采脐橙 精品澳橙12粒 单果130-180g 水果生鲜进口橙子',img:'/static/images/goods/goods6.jpg',price:'38.00',number:1,slogan:'720',public: true},
    {goods_id:22,name:'水果',title:'烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 新鲜水果',img:'/static/images/goods/goods5.jpg',price:'49.00',number:1,slogan:'720', hot: true},
    {goods_id:23,name:'水果',title:'澳大利亚直采脐橙 精品澳橙12粒 单果130-180g 水果生鲜进口橙子',img:'/static/images/goods/goods6.jpg',price:'38.00',number:1,slogan:'720',public: true},
    {goods_id:24,name:'水果',title:'烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 新鲜水果',img:'/static/images/goods/goods5.jpg',price:'49.00',number:1,slogan:'720', hot: true},
    {goods_id:25,name:'水果',title:'澳大利亚直采脐橙 精品澳橙12粒 单果130-180g 水果生鲜进口橙子',img:'/static/images/goods/goods6.jpg',price:'38.00',number:1,slogan:'720',public: true},
    {goods_id:3,name:'玩具',spec: 'XS',title:'42cm超大车身】宝贝星（BBS）儿童玩具遥控汽车扭变车越野车四驱赛车模型玩具男孩礼物 42cm遥控扭变车充电版【酷炫蓝+终身保修】',img:'/static/images/goods/goods3.jpg',price:'138.00',number:1,slogan:'720',hot: true},
    {goods_id:4,name:'玩具',spec: 'XS',title:'盈佳智能机器狗儿童玩具男孩玩具女孩早教机3-6岁以上益智玩具宝宝婴儿小孩故事机智力玩具编程玩具',img:'/static/images/goods/goods4.jpg',price:'159.00',number:1,slogan:'720',public: true},
    {goods_id:5,name:'衣服',spec: 'XS',title:'以纯线上品牌A21秋季2019男装 纯色圆领卫衣男潮流男生休闲长袖上衣服男士套衫R493132010 黑色 175/88A/L',img:'/static/images/goods/goods7.jpg',price:'99.00',number:1,slogan:'720',hot: true},
    {goods_id:6,name:'衣服',spec: 'XS',title:'牛仔外套男装秋冬季衣服男秋装夹克修身休闲男生潮牌秋天工装潮流头号青年棒球服男 7705浅蓝 XL',img:'/static/images/goods/goods8.jpg',price:'98.00',number:1,slogan:'720',public: true},
    {goods_id:7,name:'家用',spec: 'XS',title:'【直播秒杀直降1371】中派 沙发可拆洗客厅布艺沙发组合 颜色 双人+单人+贵妃',img:'/static/images/goods/goods9.jpg',price:'3699.00',number:1,slogan:'720',hot: true},
    {goods_id:8,name:'家用',spec: 'XS',title:'全友家居 布艺沙发组合现代简约客厅布艺家具可拆洗布沙发实木内架客厅整装套装102137/102136 102137布艺沙发(1+3+转)【不分正反向】',img:'/static/images/goods/goods10.jpg',price:'3900.00',number:1,slogan:'720',public: true},
    {goods_id:9,name:'手机',spec: 'XS',title:'Apple iPhone XS Max (A2104) 512GB 金色 移动联通电信4G手机',img:'/static/images/goods/goods2.jpg',price:'10899.00',number:1,slogan:'720',hot: true},
    {goods_id:10,name:'手机',spec: 'XS',title:'华为 HUAWEI Mate 30 5G 麒麟990',img:'/static/images/goods/goods1.jpg',price:'5499.00',number:1,slogan:'521',public: true},
    {goods_id:11,name:'书籍',spec: 'XS',title:'深入浅出Vue.js',img:'/static/images/goods/goods11.jpg',price:'49.00',number:1,slogan:'521',hot: true},
    {goods_id:12,name:'书籍',spec: 'XS',title:'JavaScript高级程序设计(第3版)',img:'/static/images/goods/goods12.jpg',price:'58.00',number:1,slogan:'521',public: true},
    {goods_id:13,name:'零食',spec: 'XS',title:'杉城 网红休闲零食大礼包一整箱送女友女生儿童礼盒美食品超市好吃的2000g',img:'/static/images/goods/goods13.jpg',price:'59.00',number:1,slogan:'521',hot: true},
    {goods_id:14,name:'零食',spec: 'XS',title:'三只松鼠乳酸菌小伴侣面包 营养早餐口袋手撕面包网红零食饼干蛋糕糕点520g/箱',img:'/static/images/goods/goods14.jpg',price:'35.00',number:1,slogan:'521',public: true},
    {goods_id:15,name:'数码',spec: 'XS',title:'佳能（Canon）PowerShot G7 X Mark II G7X2 数码相机 Vlog相机 视频拍摄',img:'/static/images/goods/goods15.jpg',price:'3699.00',number:1,slogan:'521',hot: true},
    {goods_id:16,name:'数码',spec: 'XS',title:'佳能（Canon）EOS 800D 单反相机 单反机身 单反套机 （EF-S 18-55mm f/4-5.6 IS STM 单反镜头）',img:'/static/images/goods/goods16.jpg',price:'4700.00',number:1,slogan:'521',public: true},

    {goods_id:5,name:'外套',spec: 'XS',title:'以纯线上品牌A21秋季2019男装 纯色圆领卫衣男潮流男生休闲长袖上衣服男士套衫R493132010 黑色 175/88A/L',img:'/static/images/goods/goods7.jpg',price:'99.00',number:1,slogan:'720',hot: true},
    {goods_id:30,name:'文学',title:'深入浅出Vue.js',img:'/static/images/goods/goods11.jpg',price:'49.00',number:1,slogan:'521',hot: true},
    {goods_id:31,name:'童书',title:'深入浅出Vue.js',img:'/static/images/goods/goods12.jpg',price:'49.00',number:1,slogan:'521',hot: true},
    {goods_id:32,name:'经管励志',title:'深入浅出Vue.js',img:'/static/images/goods/goods11.jpg',price:'49.00',number:1,slogan:'521',hot: true},
    {goods_id:33,name:'IT科技',title:'深入浅出Vue.js',img:'/static/images/goods/goods12.jpg',price:'49.00',number:1,slogan:'521',hot: true},
    {goods_id:34,name:'IT科技',title:'深入浅出Vue.js',img:'/static/images/goods/goods11.jpg',price:'49.00',number:1,slogan:'521',public: true},
    {goods_id:35,name:'沙发垫套',title:'【直播秒杀直降1371】中派 沙发可拆洗客厅布艺沙发组合 颜色 双人+单人+贵妃',img:'/static/images/goods/goods9.jpg',price:'3699.00',number:1,slogan:'720',hot: true},
    {goods_id:36,name:'被子',title:'全友家居 布艺沙发组合现代简约客厅布艺家具可拆洗布沙发实木内架客厅整装套装102137/102136 102137布艺沙发(1+3+转)【不分正反向】',img:'/static/images/goods/goods10.jpg',price:'3900.00',number:1,slogan:'720',public: true},
    {goods_id:37,name:'华为',title:'Apple iPhone XS Max (A2104) 512GB 金色 移动联通电信4G手机',img:'/static/images/goods/goods2.jpg',price:'10899.00',number:1,slogan:'720',hot: true},
    {goods_id:38,name:'苹果',title:'华为 HUAWEI Mate 30 5G 麒麟990',img:'/static/images/goods/goods1.jpg',price:'5499.00',number:1,slogan:'521',public: true},
  ]
  
  if(name == 0){
  const size = req.params.size;
  const page = req.params.page;
  let index = size * (page - 1);
  let newProfiles = [];
  for (let i = index; i < size * page; i++) {
    if (type_list[i] != null) {
      newProfiles.push(type_list[i]);
    }
  }
    res.json({
      status:200,
      msg:"success",
      data:newProfiles
  })
  return
  }

 const type_list1 = type_list.filter(item => {return item.name == name})
 const filter = req.params.filter
 const size = req.params.size;
  const page = req.params.page;
  let index = size * (page - 1);
  let newProfiles = [];

  for (let i = index; i < size * page; i++) {
    if (type_list1[i] != null) {
      newProfiles.push(type_list1[i]);
    }
  }
  res.json({
    status:200,
    msg:"success",
    data:newProfiles
})
})

//分类页 数据
router.get('/category', (req, res) => {
  const profileLists = [
    {
      id: 1, title: '当季热卖', banner: '/static/images/category/banner3.jpg', list: [
        { name: '衣服', img: '/static/images/goods/goods7.jpg' },
        { name: '外套', img: '/static/images/goods/goods8.jpg' },
        { name: '卫衣', img: '/static/images/category/list/list1.jpg' },
        { name: '鞋子', img: '/static/images/category/list/list2.jpg' },
      ]
    },
    {
      id: 2, title: '图书/文娱', banner: '/static/images/category/banner4.jpg', list: [
        { name: '文学', img: '/static/images/category/list/list6.jpg' },
        { name: '童书', img: '/static/images/category/list/list3.jpg' },
        { name: '经管励志', img: '/static/images/category/list/list4.jpg' },
        { name: 'IT科技', img: '/static/images/category/list/list5.jpg' },
        
      ]
    },
    {
      id: 3, title: '家用产品', banner: '/static/images/category/banner1.jpg', list: [
        { name: '沙发垫套', img: '/static/images/category/list/list7.jpg' },
        { name: '被子', img: '/static/images/category/list/list8.jpg' }
      ]
    },
    {
      id: 4, title: '手机数码', banner: '/static/images/category/banner2.jpg', list: [
        { name: '华为', img: '/static/images/category/list/list9.jpg' },
        { name: '苹果', img: '/static/images/category/list/list10.jpg' }
      ]
    },
  ]
  res.json({
    status:200,
    msg: 'success',
    data: profileLists
  })
})

router.get('/goods', (req, res) => {
  const profileFields = {
    swiperList: [
      { id: 1, img: '/static/images/goods/goods7.jpg' },
      { id: 2, img: '/static/images/goods/goods8.jpg' }
    ],
    spec: ["XS", "S", "M", "L", "XL", "XXL"],
    comment: [
      {
        id: 1, username: "大黑哥", face: "/static/img/face.jpg", date: '2019-04-21', spec: "规格: XL", grade: "good",
        content: "好看，可以，不愧是专业的，才拿到手上就研究了半天才装上",
        img: ["https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg", "https://ae01.alicdn.com/kf/HTB1sL7hTjDpK1RjSZFrq6y78VXaw.jpg", "https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg", "https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],
        video: [{ img: "https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg", path: "https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4" }]

      },
      {
        id: 2, username: "小黑狗", face: "/static/img/face.jpg", date: '2019-04-21', spec: "规格: XL", grade: "secondary",
        content: "很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！",
        img: ["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg", "https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],
        video: [{ img: "https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg", path: "https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4" }]
      },
      {
        id: 3, username: "小黑狗", face: "/static/img/face.jpg", date: '2019-04-21', spec: "规格: XL", grade: "poor",
        content: "好评，看图",
        img: ["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg", "https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],
        video: []

      },
      {
        id: 3, username: "小黑狗", face: "/static/img/face.jpg", date: '2019-04-21', spec: "规格: XL", grade: "secondary",
        content: "系统默认好评",
        img: [],
        video: []

      }
    ],
    descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>'
  }
  res.json({
    statusCode: '200',
    msg: 'success',
    data: profileFields
  })

})



module.exports = router