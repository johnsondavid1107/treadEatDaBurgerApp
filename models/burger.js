const orm = require('../config/orm.js');


let burgz = {
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },











}



module.exports = burgz;