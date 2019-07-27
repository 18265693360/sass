const jwt = require('jsonwebtoken')


const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60),
                                        //过期时间
    data: {
        //签名的数据
        userId:'001'
    }
}, 'liuyuhao');//秘钥

console.log(token);