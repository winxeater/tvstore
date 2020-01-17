const mysql = require('mysql');
const config = require('./config');

class DB {
    // static con;

    static getFilters() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                let filters = {};

                let sql = "SELECT DISTINCT brand FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    const item = result.map((item) => item);
                    resolve(item);
                });
            });
        });

    }

    static listAll() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                let item = {};

                let sql = "SELECT * FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    item.id = result.map((item) => item);
                    resolve(item);
                });
            });
        });

    }

    static getOne() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                let list = {};

                let sql = "SELECT * FROM item";
                // const val = resolve.params.val;
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    const item = result.map((item) => item);
                    console.log(item);
                    resolve(item);
                });
            });
        });

    }

}

if (!DB.pool) DB.pool = mysql.createPool(config);


module.exports = DB;