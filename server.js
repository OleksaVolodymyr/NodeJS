var http = require('http');
var url = require('url');
var i = 1;
var server = new http.Server(function (req, res) {
    var urlParse = url.parse(req.url, true);
    var d = new Date();
    console.log(req.url);
    console.log(i++ + ": " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + urlParse.query.message);
    res.end(urlParse.query.message);
});
server.listen(1337, '127.0.0.1');