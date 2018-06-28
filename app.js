var express = require('express');
app = express();
var http = require('http');
var https = require('https');
// 依赖body-parser和multer来解析参数
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/happyabstr',function (err) {
    if(err) {
        return console.log(err)
    }
    console.log('数据库连接成功');
});

// 中间件
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(multer()); // for parsing multipart/form-data
app.use(express.static('static')); //指定静态路径
PORT = 3000;
   
    //解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With , yourHeaderFeild");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
//log
var log4js = require('log4js');
var logger = log4js.getLogger();

//指定视图路径
// var path = require('path');
// app.set('views', path.join(__dirname, 'views'));


//以下是接口s
app.get('/first',function (req, res) {
    res.send("My first node demo!");
});

app.get('/a',function (req,res) {
    console.log(req.params.text)
    console.log(req.query.text)
    res.send('这是--“/a”接口，一个get请求' + req.query.text);
});

app.get('/a:text',function (req,res) {
    console.log(req.params.text)
    console.log(req.query.text)
    res.send('这是--“/a”接口，一个get请求' + req.query.text);
});

app.post('/b',function (req, res) {
    res.send({userName:11});
    // res.send({userName:11});
    // res.sendFile()
    // res.rend();//指定浏览器渲染页面
});

app.delete('/c',function (req, res) {
    res.send('这是“/c”接口，一个delete接口');
})

app.get('/',function (req,res) {
    res.render('idx',{
        title:'首页'
    })
})

app.post('/reqBody',function (req,res) {
    console.log(req.body);
    res.json(req.body);
})

app.post('/s', function (req, res) {
    // res.send({userName:req.body.userName,password:req.body.password});
    // console.log(req.body.userName);
    res.json(req.body);
})

//以下是接口e

//数据库连接s
var hpabstrScheme = {
    id:String,
    user_id:String,
    isOriginal:Boolean,
    headImg:String,
    nickName:String,
    publishTime:String,
    abstract:String,
    thumbnailList:Array
}
//数据库连接e

app.listen(PORT,function() {
    console.log("服务已启动~");
})