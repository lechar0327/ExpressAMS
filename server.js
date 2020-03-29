const express = require('express');
const routers = require("./routers/postRouter");
const app = express();

//注册处理静态资源的中间件
app.use(express.static('./public'));

//注册接收req.body值的中间件
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//调用路由文件设置前缀
app.use('/poster', routers);

app.listen(3000, () => {
    console.log("服务启动成功");
});