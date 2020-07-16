const mongoose = require ('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //Lista todos
    async index(req, res){
        const{ page =1 } = req.query;
        const products = await Product.paginate({},{ page, limit:10})
         
        return res.json(products);
    },
    //Procurando por id 
    async show(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product)
    },
    //Cria um produto
    async store(req,res){
     const product = await Product.create(req.body);
    
        return res.json(product);
    },
    //Atualiza um produto
    async update(req, res){
        //{ new: true} para a nossa constante voltar com o produto atualizado
            mongoose.set('useFindAndModify', false);
            const product = await Product.findByIdAndUpdate(req.params.id ,req.body, {new:true});
            return res.json(product);
    },
    //Deletar um produto
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
      
        return res.send();

    }
};