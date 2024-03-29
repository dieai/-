//使用express构建web服务器 
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const user=require("./routes/wuser")
const cors=require("cors");

var app = express();
var server = app.listen(3000);
app.use(cors({
  origin:"http://127.0.0.1:5500"
}))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到theme目录下
app.use(express.static('theme'));
/*使用路由器来管理路由*/
app.use("/user",user);

