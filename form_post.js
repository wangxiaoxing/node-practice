var express = require('express');
var bodyParser = require('body-parser');
var quertstring = require('querystring');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/form_post.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'form_post.html');
})
app.post('/login', function (req, res) {
    var name = req.body.username;
    var password = req.body.password;
    console.log('输入的内容是' + name + '<br>' + password);
    //response.end(name + ' ' + password);
    // res.sendFile(__dirname + '/public/' + 'form_post.html');
    res.send('输入的内容是' + name + '<br>' + password);
})
app.listen('8888', function () {
    console.log('服务器启动中');
})