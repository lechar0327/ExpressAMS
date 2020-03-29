//配置实体类

//引入db
const db = require('../config/db.js');

//创建实体类
const postSchema = new db.Schema(
    {
        /**
         * 帖子标题
         */
        title: {
            type: String,
            required: true
        },

        /**
         * 帖子内容
         */
        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

//创建模型
const PostModel = db.model("ports", postSchema);

//暴露模型
module.exports = PostModel;