const msg = require('../utils/msgutils');
const msgModel = require('../model/msg'); //短信模型 存验证码
const userModel = require('../model/user'); //检查用户注册没有


async function sendMsg(req, res, next) {
    try {
        const {phone} = req.body;
        const user = await userModel.findOne({
            phone
        });
        if (!user){
            let sixStr = '';
            for (let i = 0; i < 6; i++){
                sixStr += Math.floor(Math.random() * 10) + '';
            }

            const msgRes = await msg(phone, sixStr);
            if (msgRes.Code == 'OK'){
                await msgModel.create({
                    phone,
                    code: sixStr
                })
                res.json({
                    code:200,
                    msg:'短信发送成功'
                })
            }else{
                res.json({
                    code:500,
                    msg: msgRes.Code
                })
            }
        }else{
            res.json({
                code:400,
                msg:'该用户已经注册'
            })
        }
    }catch (err) {
        next(err)
    }
}

module.exports = {
    sendMsg
};





