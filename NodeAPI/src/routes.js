const ProductController = require('./controllers/ProductController');

express = require('express');
const routes = express.Router();

//Rota de listagem de produtos
routes.get('/products', ProductController.index);
//Procura de produto por id
routes.get('/products/:id', ProductController.show);
//Rota de criação de produtos    
routes.post('/products', ProductController.store);
//Rota de atualização
routes.put('/products/:id', ProductController.update);
//Rota para exclusão
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;