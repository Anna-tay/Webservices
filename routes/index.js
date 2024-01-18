// -- The routes that I am using
const lesson1Con = require('../controller/lesson1');
const routes = require('express').Router();

//routes
routes.get('/', lesson1Con.lukeroute);
routes.get('/anna', lesson1Con.annaroute);

// exporting them
module.exports = routes;