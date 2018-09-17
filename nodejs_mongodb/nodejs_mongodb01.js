var http = require('http');
var ejs = require('ejs');
var MongoClient = require('mongodb').MongoClient;
var url = require('url');

var dburl = 'mongodb://localhost:27017/itying';
var dbName = 'itying';

var app = require('./model/express-route');

http.createServer(app).listen(3000);

app.get('/', function (req, res) {
    MongoClient.connect(dburl, {useNewUrlParser:true}, function(err, client) {
        if(err) {
            console.log('数据库连接失败');
            return;
        }

        let db = client.db(dbName);
        var result = db.collection('user').find();

        var list = [];
        
        result.each(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                if (doc !== null) {
                    list.push(doc)
                } else {
                    // console.log(list);
                    ejs.renderFile('views/index.ejs', {list}, function (err, data) {
                        res.send(data);
                    })
                }
            }
        })

    })
    // var msg = '1111';
    // ejs.renderFile('views/index.ejs', {msg}, function (err, data) {
    //     res.send(data);
    // })
})

app.get('/add', function (req, res) {
    MongoClient.connect(dburl, {useNewUrlParser:true}, function(err, client) {
        if(err) {
            console.log('数据库连接失败');
            return;
        }

        let db = client.db(dbName);

        db.collection('user').insertOne({
            "name": "nodejs",
            "age": 10
        }, function (err) {
            if (err) {
                console.log('增加数据失败');
                return;
            }
            res.send('增加数据成功');
            client.close();
        })

    })
})

app.get('/edit', function (req, res) {
    MongoClient.connect(dburl, {useNewUrlParser:true}, function (err, client) {
        if(err) {
            console.log('数据库连接失败');
            return;
        }

        let db = client.db(dbName);

        db.collection('user').updateOne(
            {"name": 'nodejs'},
            {$set: {"age": 30}},
            function (err, data) {
                if (err) {
                    console.log('修改数据失败');
                    return;
                }
                res.send('修改数据成功');
                client.close();
            }
        )
    })
})

app.get('/delete', function (req, res) {
    var query = url.parse(req.url, true).query;
    var name = query.name;

    MongoClient.connect(url, {useNewUrlParser:true}, function (err, client) {
        if(err) {
            console.log('数据库连接失败');
            return;
        }

        let db = client.db(dbName);

        db.collection('user').deleteOne(
            {"name": name},
            function (err, data) {
                if (err) {
                    console.log('删除数据失败');
                    return;
                }
                res.send('删除数据成功');
                client.close();
            }
        )
    })
})