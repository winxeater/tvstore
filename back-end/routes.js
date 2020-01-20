const express = require('express');
const routes = require('express').Router();
const DB = require('./db');


routes.get('/brands', function(req, res) {
    DB.getBrand().then((filters) =>  {
        res.status(200).json(filters)
    }).catch((err) => {
        console.log('Error getting filters: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.get('/screen_types', function(req, res) {
    DB.getScreenType().then((filters) =>  {
        res.status(200).json(filters)
    }).catch((err) => {
        console.log('Error getting filters: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.get('/screen_sizes', function(req, res) {
    DB.getScreenSize().then((filters) =>  {
        res.status(200).json(filters)
    }).catch((err) => {
        console.log('Error getting filters: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.get('/resolutions', function(req, res) {
    DB.getResolution().then((filters) =>  {
        res.status(200).json(filters)
    }).catch((err) => {
        console.log('Error getting filters: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.get('/voltages', function(req, res) {
    DB.getVoltage().then((filters) =>  {
        res.status(200).json(filters)
    }).catch((err) => {
        console.log('Error getting filters: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

routes.get('/items', function(req, res) {
    DB.listAll().then((item) =>  {
        res.status(200).json(item)
    }).catch((err) => {
        console.log('Error getting list: ', err);
        res.status(500).json({ error: 'Internal server error' });
    })
});

module.exports = routes;

