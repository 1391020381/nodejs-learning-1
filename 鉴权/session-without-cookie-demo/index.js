var session = require('express-session')
var express = require('express')

var app = express()
app.use(session({
    secret: '1234567',
    resave: false,
    saveUninitialized: true, // 在未初始化session是是否保存一个session值
    cookie: { secure: true }
}))

// 用户登录,记录用户信息
app.get('/login', function (req, res, next) {

    const { username } = req.query;
    req.session.user = { username }; // 注意这里是直接给request加session,不再是像以前一样先给Response设置头部
    res.end();
});

// 用户信息展示(已登录则展示,未登录则不展示)
app.get('/hello', function (req, res, next) {

    // 从session中读取user信息
    const { username } = req.session.user;

    // 如果user信息存在
    if (username) {
        res.end(`<h1>hello,${username}</h1>`);
    } else {
        res.end('<hi>抱歉，您尚未登录</h1>');
    }
})

app.listen(3000)
