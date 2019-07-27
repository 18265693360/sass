const validator = require('validator');
const userModel = require('../model/user');
const msgModel = require('../model/msg');
const signUtils = require('../utils/signToken');
const mongoose = require('mongoose');


async function register(req,res,next) {
    try {
        const {phone, code, password} = req.body;
        const phoneStatus = validator.isMobilePhone(phone, 'zh-CN');
        if (phoneStatus) {
            const user = await userModel.findOne({
                phone: phone
            });
            if (user) {//用户已经注册
                res.json({
                    code: 400,
                    msg: '对不起，该用户名已注册'
                })
            } else { //用户未注册 验证码
                const msg = await msgModel
                    .findOne({
                        code
                    }).sort({_id: -1})
                console.log(msg, 'msg');
                console.log(msg.updateTime, '时间');
                if (msg) { //判断是否已经发送过验证码 第一行判断是否正确
                    //第二行判断是否 过期
                    // let msgData = new细节 Date日期 Data(msg.updateTime);
                    let msgData = new Date(msg.updateTime);
                    let msgTime = Math.round(msgData.getTime() / 1000);
                    let nowTime = Math.round(Date.now() / 1000);
                    console.log(nowTime, 'nowTime');
                    // console.log(nowTime, 'nowTime'); nowTime 细节
                    console.log(msgTime, 'msgTime');
                    if ((nowTime - msgTime) < 60 * 5) {//验证码是否在有效期
                        if (code == msg.code) {
                            await userModel.create({
                                phone,
                                password
                            });
                            res.json({
                                code: 200,
                                msg: '注册成功'
                            })
                        } else {
                            res.json({
                                code: 400,
                                msg: '验证码不正确'
                            })
                        }
                    } else {//验证码已过期
                        res.json({
                            code: 400,
                            msg: '验证码已过期'
                        })
                    }
                } else {//没发送过验证码
                    res.json({
                        code: 400,
                        msg: '验证码不正确'
                    })
                }
            }
        } else {
            res.json({
                code: 400,
                msg: '手机格式不正确'
            })
        }
    } catch (err) {
        next(err)
    }
}


async function login(req,res,next) {
    try {
        const{phone, password} = req.body;
        if (phone&&password){
            const user = await userModel.findOne({
                phone
            })
            if(user){
                if (password == user.password){
                    const token = signUtils({userId: user._id})
                    res.json({
                        code:200,
                        data:{
                            token
                        }
                    })
                }else{
                    res.json({
                        code:400,
                        msg:'密码不正确'
                    })
                }
            }else{
                res.json({
                    code:400,
                    msg:'用户不存在'
                })
            }
        }else{
            res.json({
                code:400,
                msg:'缺少必要参数'
            })
        }
    }catch (err) {
        next(err)
    }
}

async function getUserById(req, res, next){
    try {
        const userId = req.user.userId;
        const userData = await userModel.findById(mongoose.Types.ObjectId(userId))       .select('-password'); //限制密码 .select('-password')
        res.json({
            code: 200,
            data: userData
        })
    }catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    login,
    getUserById
};




