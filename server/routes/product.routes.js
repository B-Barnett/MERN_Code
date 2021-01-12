const ProductController = require('../controllers/products.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.index);

    app.post('/api/products/create', ProductController.create);

    app.get('/api/products/:id', ProductController.show);

    app.put('/api/products/update/:id', ProductController.edit);

    app.delete('/api/products/destroy/:id', ProductController.destroy);
}