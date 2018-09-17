var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    var pathname = req.url;

    if (pathname === '/') {
        pathname = '/index.html';
    }
    if (pathname !== '/favicon.ico') {
        // 文件操作
        // 获取 static 文件下的 index.html
        fs.readFile('static/'+pathname, function (err, data) {
            if (err) {
                console.log('404');
                return;
            }

            res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
            res.write(data);
            res.end();
        });
    }
    
}).listen(8000)