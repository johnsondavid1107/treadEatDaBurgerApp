const connection = require('./connection.js');


let orm = {

    selectAll: function (tableInfo, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInfo], function (err, res) {
            if (err) { throw err };
            console.log('Successfully sent table from database from orm.js line 10');
            cb(res);
        })


    },

















}


module.exports = orm;