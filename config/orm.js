const connection = require('./connection.js');


let orm = {

    selectAll: function (tableInfo, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInfo], function (err, res) {
            if (err) { throw err };
            console.log('Successfully sent table from database from orm.js line 10');
            console.log(tableInfo)
            cb(res);
        })


    },
    create: function (tableName, column, value, cb) {
        let queryString = "INSERT INTO " + tableName;

        queryString += "(";
        queryString += column.toString();
        queryString += ") VALUES ('"
        queryString += value.toString();
        queryString += "');"

        console.log(queryString, "from ORM.js line26");
        console.log(column,"ORM line27")
        console.log(value, "ORM line 28")

        connection.query(queryString, value, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        })







    }

















}


module.exports = orm;