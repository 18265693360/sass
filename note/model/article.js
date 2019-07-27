const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:String,
    content:String,//存储富文本
    contentText: String,//存储纯文本
    author:{
        //多表查询下
        ref:"user",
        type:Schema.Types.ObjectId
        //在mongoose下的populate 作者信息 要用户改变数据也改变
    },
    category:[{
        type:Schema.Types.ObjectId,
        ref:"category",//索引
        required:true
    }
    ],
    looksnum: {//总数
        type:Number,
        default:0
    },
    commons:[
        {
            type:Schema.Types.ObjectId,
            ref:"common"
        }
    ]
}, {
    versionKey:false,
    timestamps:{createdAt:"createTime",updatedAt:
"updateTime"}
});

module.exports = mongoose.model({"article", articleSchema});