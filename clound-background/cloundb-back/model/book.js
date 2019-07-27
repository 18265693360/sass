const mongoose = require('mongoose')

const book = new mongoose.Schema({
    title:String,
    img:String,
    author:String,
    looksnum:{
        type:Number,
        default:0 //这个数据中有默认值
    },
    desc:String,
    type:{
        //js中没有此种类型数据 就需要用mongoose声明一下数据 就是mongoose的数据ID
        type:mongoose.SchemaTypes.ObjectId,
        //多表集合可以根据上面的ID把数据灌进去
        ref:'catagory'
    },
    index:{
        type:Number,
        //默认第一页数据
        default:1
    }
                        //改变时间
},{versionKey: false, timestamp:{createdAt:'createTime',updatedAt:'updateTime'}})
                                // 集合名 集合骨架
module.exports = mongoose.model('book',book)


