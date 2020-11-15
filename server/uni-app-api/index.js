const express = require('express');
const app = express();
//引入body-parser
const bodyParser = require('body-parser');
//转换成json格式
app.use(bodyParser.json());
//extended为false会额外输出[Object: null prototype]
//bodyParser.urlencoded 用来解析 request中body的 urlencoded字符,只支持utf-8的编码的字符
app.use(bodyParser.urlencoded({ extended: false }));

// 使用中间件实现允许跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

const router = require("./router");
app.use(router)

app.listen(3000,function () {
    console.log(3001);
})  