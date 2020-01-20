const mysql = require('mysql');
const config = require('./config');

class DB {
    // static con;

    static getBrand() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                const filters = {}

                let sql = "SELECT DISTINCT brand FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    filters.brand = result.map((item) => item.brand);
                    resolve(filters);
                });
            });
        });
    }

    static getScreenType() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                const filters = {}

                let sql = "SELECT DISTINCT screen_type FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    filters.screen_type = result.map((item) => item.screen_type);
                    resolve(filters);
                });
            });
        });
    }

    static getScreenSize() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                const filters = {}

                let sql = "SELECT DISTINCT screen_size FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    filters.screen_size = result.map((item) => item.screen_size);
                    resolve(filters);
                });
            });
        });
    }

    static getResolution() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                const filters = {}

                let sql = "SELECT DISTINCT resolution FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    filters.resolution = result.map((item) => item.resolution);
                    resolve(filters);
                });
            });
        });
    }

    static getVoltage() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                const filters = {}

                let sql = "SELECT DISTINCT voltage FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    filters.voltage = result.map((item) => item.voltage);
                    resolve(filters);
                });
            });
        });
    }

    static listAll() {
        return new Promise((resolve, reject) => {
            DB.pool.getConnection(function(err, connection) {
                if (err) reject(err);
                
                let sql = "SELECT * FROM item";
                connection.query(sql, function (err, result) {
                    if (err) reject(err);
                    const item = result.map((item) => item);
                    resolve(item);
                });
            });
        });

    }

}

if (!DB.pool) DB.pool = mysql.createPool(config);


module.exports = DB;