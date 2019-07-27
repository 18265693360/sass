//解密  用户登录相关 用户的id 数据

const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTUyNDY3MTQsImRhdGEiOnsidXNlcklkIjoiMDAxIn0sImlhdCI6MTU1NTI0NjY1NH0.PHiMlewpV-50kddmNIERb3mGDLH8o5-tDB3216b2o74'
jwt.verify(token, 'liuyuhao', function (err, data) {
    if (err){
        console.log(err, 'err');
    } else{
        console.log(data)
    }
})