
var express = require('express');
var url = require('url');
var app=express();
app.use(express.static('public'));
app.get('/xhr_post.html',function(req,res) {
	//__dirname:文件所在的文件目录
	res.sendFile(__dirname+'/'+'xhr_post.html');
})
app.post('/comment', function (req, res) {
    console.log(req.url);
    req.on('data', function (data) {
        obj = JSON.parse(data);
        console.log(obj);
      })
	res.send('已经接受到用post方法发来的请求');
})
var server=app.listen(8080,function(){
	console.log('服务器启动中');
})