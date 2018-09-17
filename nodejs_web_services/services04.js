var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var mimeModel = require('./model/getmimefromfile');

console.log(mimeModel.getMime(fs, '.html'));