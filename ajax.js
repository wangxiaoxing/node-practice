var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/ajax.html',function(req,res) {
    //__dirname:文件所在的文件目录
	res.sendFile(__dirname+'/'+'ajax.html');
})
app.post('/comment', function (req, res) {
    console.log(req.body);
    res.send('ajax的post收到');
});
app.listen('8080', function () { 
    console.log('服务器启动中');
})