// 引入 http 模块
var http = require('http');
var url = require('url');

// 用 http 模块创建服务
http.createServer(function (req, res) {
    // 输入 http://localhost:8888/news?id=123 拿到 id
    // 输入 http://localhost:8888/news?id=123&age=12 拿到 id 和 age

    // var query = url.parse(req.url, true);
    // console.log(query);

    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});

    if (req.url !== '/favicon.ico') {
        // http://localhost:8888/news?id=123&age=12
        console.log(req.url); // 返回 /news?id=123&age=12

        var result = url.parse(req.url, true); // 第二个参数为 true 表示把 get 传值转成对象
        console.log('id=' + result.query.id); // 获取 url 的 get 传值
    }

    res.write('hello node.js');

    // 结束响应
    res.end();
}).listen(8888);
