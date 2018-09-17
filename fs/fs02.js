// 判断服务器上有没有 upload 目录, 没有则创建
var fs = require('fs');

// fs.stat('upload', function (err, stats) {
//     if (err) {
//         fs.mkdir('upload', function (error) {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             console.log('创建成功');
//         })
//     } else {
//         console.log('目录已存在');
//     }
// })

// 找出 html 目录下的所有目录
// fs.readdir('html', function (err, files) {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(files);
// })

var filesArr = [];
fs.readdir('html', function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    
    // console.log(files);

    (function getFiles(i) {
        if (i === files.length) {
            console.log(filesArr);
            return;
        }

        fs.stat('html/'+files[i], function (error, stats) {
            if (error) {
                console.log(error);
                return
            }

            if (stats.isDirectory()) {
                filesArr.push(files[i])
            }

            // 递归调用
            getFiles(i + 1);
        })
    })(0);
})