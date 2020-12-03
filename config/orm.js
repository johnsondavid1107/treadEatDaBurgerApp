const connection = require('./connection.js');


let orm = {
    selectAll: function (tableInfo, cb){
        let queryString = 'SELECT * FROM ' + tableInfo;
        connection.query(queryString,function (err,res) {
            if (err) {throw err};
            console.log('line9')
            console.table(res);
            cb(res);
        })
        
        
    },

















}


module.exports = orm;