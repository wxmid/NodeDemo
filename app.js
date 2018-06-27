var express = require('express');
var http = require('http');
    app = express();
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

//配置
/*
app.use(express.static('/views' + '/public'));
var path = require('path');
app.set('views', path.join('/views/', 'views'));
app.set('views engine', 'jade');
*/


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
//以下是接口e

app.listen(PORT,function() {
    console.log("服务已启动~");
})