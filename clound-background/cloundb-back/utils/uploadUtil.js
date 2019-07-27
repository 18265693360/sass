//专门用了来上传的组件
const qiniu = require('qiniu');

var accessKey = 'tHAC7h-RkoO1VigKkaSbAfxoe5RAenhbadsgS4Dv';
var secretKey = 'G6oEVNGhQZ-4nECAYxBUmV0_OoaBNAgwCBWebDpi';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);


module.exports = function () {
    var options = {
        // scope: cloundb,//空间名
        scope: 'cloundb',//空间名
        returnBody: '{"key":$(key),"hash":$(etag),"url":"http://pq5mbzmge.bkt.clouddn.com/$(key)"}',
        //域名加 key 就可以直接访问那个文件
        expires: 3600,
        // deadline: Math.round(new Date().getTime() / 1000) + 3600,

    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    return uploadToken
};







// //自定义凭证有效期（示例2小时，expires单位为秒，为上传凭证的有效时间）
// var options = {
//     scope: bucket,
//     expires: 7200
// };
// var putPolicy = new qiniu.rs.PutPolicy(options);
// var uploadToken=putPolicy.uploadToken(mac);

// module.exports = function () {
//  function () {

//     测试上传组件功能
//     var options = {
//         // scope: cloundb,//空间名
//         scope: 'cloundb',//空间名
//         returnBody: '{"key":"$(key)","hash":"$(etag)","url":"\n' +
//             'http://pq5mbzmge.bkt.clouddn.com/$(key)"}',
//         //域名加 key 就可以直接访问那个文件
//         expires: 7200,
//         deadline: Math.round(new Date().getTime()/1000)+3600,
//
//     };
//     var putPolicy = new qiniu.rs.PutPolicy(options);
//     var uploadToken=putPolicy.uploadToken(mac);
// console.log(uploadToken);

// };
