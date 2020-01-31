const express = require('express');
const routes = require('express').Router();
const DB = require('./db');

routes.post('/filters', function(req, res) {
    console.log('req body filters: ',req.body.filters)
    DB.getFilters(req.body.search, req.body.filters).then((filters) =>  {
        res.status(200).json(filters)
    }).catch((err) => {
        console.log('Error getting filters: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.post('/items', function(req, res) {
    console.log('BODY', req.body);
    DB.getItems(req.body.search, req.body.filters).then((item) =>  {
        res.status(200).json(item)
    }).catch((err) => {
        console.log('Error getting list: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

module.exports = routes;

