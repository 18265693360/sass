const mongoose = require('mongoose');

const catagory = new mongoose.Schema({
    title:String,
    icon:String,
    books:[{
        // type:mongoose.SchemaType(type错误).ObjectId,
        type:mongoose.SchemaTypes.ObjectId,
        ref:'book'
    }],
    index:{
        type:Number,
        default:1
    },
    status:{
        type: Number,
        default: 1
    }
},{versionKey: false, timestamp:{createAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('catagory',catagory)



