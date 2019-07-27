const mongoose = require('mongoose');

const msg = new mongoose.Schema({ //存储短信
    phone:String,
    code:String
},{versionKey:false,timestamps:{
        createdAt:'createTime',
        updatedAt:'updateTime'
    }})


 module.exports = mongoose.model('msg',msg);


