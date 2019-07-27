const jwt = require('jsonwebtoken');


function verifyToken (token){
    //async await就有Promise  因为await在回调函数中拿不到数据 所以要封装到Promise
    return new Promise((resolve, reject) =>{
        // jwt.verify(token, 'liuyuhao'秘钥签名, (err, data) =>{
        jwt.verify(token, 'liuyuhao', (err, data) =>{
            if (err){
                reject(err)
                return
            }
            resolve(data.data)
        })
    })
}


async function auth(req, res, next) {
    try {
        //请求头
        const {token} = req.headers || req.body || req.query;
        const userData = await verifyToken(token);
        if (userData){
             req.user = userData;
             next()
        } else{
            res.json({
                code: 401,
                msg:'登录状态已失效，请再次登录'
            })
        }
    }catch (err) {
        res.json({
            code:401,
            msg:'登录状态已经失效，请再次登录'
        })
           // 失效了就不用next  next(err)

    }
}

module.exports = auth;



// async function auth (req, res, next) {
//     try {
//         const {token} = req.headers || req.body || req.query;
//         const userData = await verifyToken(token);
//         if(userData){
//             req.user = userData;
//             next()
//         } else {
//             res.json({
//                 code: 401,
//                 msg: '登录状态已失效，请重新登录'
//             })
//         }
//     } catch(err) {
//         res.json({
//             code: 401,
//             msg: '登录状态已失效，请重新登录'
//         })
//     }
// }





