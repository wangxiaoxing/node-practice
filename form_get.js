var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/form_get.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'form_get.html');
})
app.get('/login', function (req, res) {
    var name = req.query.username;
    var password = req.query.password;
    console.log('输入的内容是' + name + '<br>' + password);
    //res.end(name + ' ' + password);
    res.status('200').send('输入的内容是' + name + '<br>' + password);
})
app.listen('8080', function () {
    console.log('服务器启动中');
})