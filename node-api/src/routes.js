const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');
const ProductController = require('./controllers/ProductController');

routes.get('/product', productController.index);
routes.post('/product', ProductController.store);
routes.get('/product/:id', ProductController.show);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.destroy);


module.exports = routes;