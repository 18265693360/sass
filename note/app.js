var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoConnection = require("./model/config")
//引入mongoose连接

const session = require('express-session');//引入session中间件
const MongoStore = require('connect-mongo')(session);
//引入session持久化中间件并使用

//yarn add express-session connect-mongo 还需要持久化的中间件 每次改编代码 node服务重启
//相应的内存清空 去gitup 搜索Connect-mongo jdesboeufs/connect-mongo
/*const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'foo',
    store: new MongoStore(options)
}));*/

// const MongoStore = require('connect-mongo')(session);
// //引入session持久化中间件并使用


var indexRouter = require('./controller');
// var usersRouter = require('./routes/users'); 可以删除

var app = express();

app.use(session({
  secret:'liuyuhao',//秘钥
  resave:false,
  saveUnitialized:false,
  cookie:{secure:false,
    maxAge:1000*60*60*5//设置session过期时间
  },
  store:new MongoStore({mongoConnection:mongoConnection})//store是session存储的地方上面还有一些配置信息在 gitup espress-session
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter); 可以删

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  //
  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.json({
    code: 500,//错误处理
    // err.status,
    err
  })
});

module.exports = app;
