const mongoose = require('mongoose');

// attentions: []
// avatar: "http://pbl.yaojunrong.com/Fvu7-L614oFg3c6Lj8lD3vBuQFSe"
// collected: 0
// createdTime: "2019-04-04T04:41:21.072Z"
// fans: []
// open_id: "1554352881071"
// password: "123"
// phone: "18265693360"
// updatedTime: "2019-04-11T14:01:42.744Z"
// username: "霓裳羽衣曲"
// _id: "5ca58af1fbab7274b4ab7bc9"

const user = new mongoose.Schema({
    avatar:{
        type:String,
        //七牛云 的默认头像
        default:'http://pbl.yaojunrong.com/Fvu7-L614oFg3c6Lj8lD3vBuQFSe'
    },
    // phone{
    //     type:Number,
    //     unique:true,
    // }, 少冒号
    phone:{
        type:Number,
        unique:true,
    },
    password:String,
    username:String,
},{versionKey:false, timestamp:{
        createdAt:'createdTime',
        updatedAt:'updateTime'}})


module.exports = mongoose.model('user',user)

