var http = require('http');
var fs = require('fs');
var path = require('path');

var mimeModel = require('./model/getmime');

http.createServer(function (req, res) {
    
    var pathname = req.url;

    if (pathname === '/') {
        pathname = '/index.html';
    }

    // 获取文件的后缀名
    var extname = path.extname(pathname);

    if (pathname !== '/favicon.ico') {
        // 文件操作
        // 获取 static 文件下的 index.html
        fs.readFile('static/'+pathname, function (err, data) {
            if (err) {
                fs.readFile('static/404.html', function (error, data404) {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    res.writeHead(404, {"Content-Type":"text/html;charset=utf8"});
                    res.write(data404);
                    res.end();
                });
                return
            }

            var mime = mimeModel.getMime(extname); // 获取文件类型
            res.writeHead(200, {"Content-Type":""+ mime +";charset=utf8"});
            res.write(data);
            res.end();
        });
    }
    
}).listen(8000)