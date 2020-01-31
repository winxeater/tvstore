const mysql = require('mysql');
const config = require('./config');

class DB {
    // static con;

    static getFilters(search, filters) {
        return new Promise((resolveFilters, rejectFilters) => {
            DB.pool.getConnection(function (err, connection) {
                if (err) {
                    rejectFilters(err);
                    return;
                }

                let brands = new Promise((resolve, reject) => {
                    let sql = "SELECT DISTINCT brand FROM item";
                    connection.query(sql,[search, filters], function (err, result) {
                        if (err) reject(err);
                        const brands = result.map((item) => item.brand);
                        resolve(brands);
                    });
                });

                let screen_type = new Promise((resolve, reject) => {
                    let sql = "SELECT DISTINCT screen_type FROM item";
                    connection.query(sql, function (err, result) {
                        if (err) reject(err);
                        const screen_types = result.map((item) => item.screen_type);
                        resolve(screen_types);
                    });
                });

                let screen_size = new Promise((resolve, reject) => {
                    let sql = "SELECT DISTINCT screen_size FROM item";
                    connection.query(sql, function (err, result) {
                        if (err) reject(err);
                        const screen_sizes = result.map((item) => item.screen_size);
                        resolve(screen_sizes);
                    });
                });

                let resolution = new Promise((resolve, reject) => {
                    let sql = "SELECT DISTINCT resolution FROM item";
                    connection.query(sql, function (err, result) {
                        if (err) reject(err);
                        const resolutions = result.map((item) => item.resolution);
                        resolve(resolutions);
                    });
                });

                let voltage = new Promise((resolve, reject) => {
                    let sql = "SELECT DISTINCT voltage FROM item";
                    connection.query(sql, function (err, result) {
                        if (err) reject(err);
                        const voltages = result.map((item) => item.voltage);
                        resolve(voltages);
                    });
                });

                //call
                Promise.all([brands, screen_type, screen_size, resolution, voltage]).then(function (values) {
                    resolveFilters({
                        'brands': values[0],
                        'screen_type': values[1],
                        'screen_size': values[2],
                        'resolution': values[3],
                        'voltage': values[4],
                    })
                });
            });
        });
    }


    static getItems(search, filters) {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }

                // Where
                let sqlWhere = [];
                let sqlValues = [];

                //Search
                var sString = search.split(" ");
                console.log(sString);

                // Filters
                for(let field in filters) {
                    let fValues = filters[field];
                    sqlWhere.push(field + ' IN (' + fValues.map(v => '?').join(',') + ')');
                    sqlValues = [...sqlValues, ...fValues];
                }

                // Sql
                sqlWhere = (sqlWhere.length > 0 ? ' WHERE ' : '') + sqlWhere.join(' AND ');
                let sqlQuery = "SELECT * FROM item " + sqlWhere + " ORDER BY title ";

                console.log('QUERY', sqlQuery, sqlValues);

                connection.query(sqlQuery,sqlValues, function (err, result) {
                
                    if (err) reject(err);
                    resolve(result);
                });
            });
        });

    }
}

if (!DB.pool) DB.pool = mysql.createPool(config);


module.exports = DB;