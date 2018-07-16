
//获取get方法提交的参数
var express = require('express');
var url = require('url');
var app=express();
app.use(express.static('public'));
app.get('/xhr_get.html',function(req,res) {
	//__dirname:文件所在的文件目录
	res.sendFile(__dirname+'/'+'xhr_get.html');
})
app.get('/comment', function (req, res) {
    console.log(req.url);
    var params=url.parse(req.url, true).query;
	console.log(params);
	res.send('已经接受到用get方法发来的请求');
})
var server=app.listen(8080,function(){
	console.log('服务器启动中');
})