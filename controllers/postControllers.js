/**
 * 控制器,处理业务
 */

//引入模型
const PostModel = require("../models/postsModel");

//获取帖子
exports.index = async (req, res) => {
    try {
        const data = await PostModel.find();
        res.send({
            code: 0,
            msg: "查询成功"
        });
    } catch (error) {
        console.log(error);

        res.send({
            code: 203,
            msg: "查询失败"
        });

    }

}

//创建帖子
exports.create = async (req, res) => {
    try {
        const { title, content } = req.body;
        await PostModel.create({ title, content });
        res.send({
            code: 0,
            msg: "创建成功"
        });
    } catch (error) {
        console.log(error);
        res.send({
            code: 203,
            msg: "创建失败"
        });
    }
}

//修改帖子
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        await PostModel.updateOne({ _id: id }, req.body);
        res.send({
            code: 0,
            msg: "修改成功"
        });
    } catch (error) {
        console.log(error);
        res.send({
            code: 203,
            msg: "修改失败"
        });
    }
}

//删除帖子
exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        await PostModel.deleteOne({ _id: id });
        res.send({
            code: 0,
            msg: "删除成功"
        });
    } catch (error) {
        console.log(error);
        res.send({
            code: 203,
            msg: "删除失败"
        });
    }
}
