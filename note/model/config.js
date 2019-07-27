const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/note',
    {useNewUrlParser:true});
const connection = mongoose.connection;//存储持续化的连接

//事件监听
connection.on('error',console.error.bind(console,
    'connection error'));
connection.once('open',function () {
    console.log("connect successful!")
});

module.exports = connection;