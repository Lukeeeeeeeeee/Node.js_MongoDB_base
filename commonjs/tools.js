var tools = {
    add: function (x, y) {
        return x + y;
    },
    sayHello: function () {
        return 'hello node.js';
    }
}

// exports.tools = tools;
module.exports = tools;