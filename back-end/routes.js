const express = require('express');
const routes = require('express').Router();
const DB = require('./db');


routes.get('/filters', function(req, res) {
    DB.getFilters().then((filters) =>  {
        res.send(filters)
    }).catch((err) => {
        console.log('Error getting filters: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.get('/items', function(req, res) {
    DB.listAll().then((item) =>  {
        res.send(item)
    }).catch((err) => {
        console.log('Error getting list: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.get('/items/:p', function(req, res) {
    DB.getOne().then((item) =>  {
        const itemId = req.params.p;
        const val = item[itemId];
        res.send(val)
    }).catch((err) => {
        console.log('Error getting item: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

module.exports = routes;

