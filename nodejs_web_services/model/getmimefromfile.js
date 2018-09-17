function getMime(fs, extname) {
    // 同步读取数据
    var data = fs.readFileSync('./mime.json');
    var mimes = JSON.parse(data.toString());
    return mimes[extname] || 'text/html';
}

// --------------------------------------------


module.exports = {
    getMime
};