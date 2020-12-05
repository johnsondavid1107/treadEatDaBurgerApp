const orm = require('../config/orm.js');


let burger = {
    all: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(id, cb){
        orm.update(id, function(res) {
            cb(res);
        });
    }
    












}



module.exports = burger;