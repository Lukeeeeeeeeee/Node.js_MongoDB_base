// 引入 http 模块
var http = require('http');

// 用 http 模块创建服务
http.createServer(function (req, res) {
    //发送 http 头部
    // http 状态值: 200 : OK
    // 设置 http 头部, 状态码是: 200, 文件类型是 html, 字符集是 utf8
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.write('hello node.js');

    // 结束响应
    res.end();
}).listen(8888);
