/**
 * fs.readFile 异步
 * @return 返回 undefined;
 */
function getMime(fs, extname) {
    fs.readFile('./mime.json', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        var mimes = JSON.parse(data.toString());

        return mimes[extname] || 'text/html';
    })
}

module.exports = {
    getMime
};