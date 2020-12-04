const orm = require('../config/orm.js');


let burger = {
    all: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    creat: function(){}











}



module.exports = burger;