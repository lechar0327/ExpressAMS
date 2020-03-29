/**
 * 配置数据库 mongodb 使用mongoose
 */

const mongoose = require('mongoose');

/**
 * mongodb:  必须使用mongodb协议
 * 端口号:27017
 * ports数据库名称
 */
const dbContext = "mongodb://localhost:27017/ports";

/**
 * 连接数据库
 */

mongoose.connect(dbContext, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("连接成功");
}).catch((error) => {
    console.log("连接失败");
    console.log(error.message);
});

//暴露数据库连接对象
module.exports = mongoose;