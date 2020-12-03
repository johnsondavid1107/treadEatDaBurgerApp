const connection = require('./connection.js');


let orm = {
    selectAll: function (tableInfo, cb){
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString[tableInfo],function (err,res) {
            if (err) {throw err};
            console.table(res);
        })
        cb(result);
        
    },

















}


module.exports = orm;