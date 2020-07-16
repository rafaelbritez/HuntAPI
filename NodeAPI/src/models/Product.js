//Representa uma tabela no banco de dados
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')
//Schemas do model == aos campos que minha tabela tera e que tipos de valores esse campos devem ser preenchidos
const productSchema = new mongoose.Schema({
     title:{
        type: String,
        required:true

     },
     description:{
         type:String,
         required:true
     },
     url:{
         type:String,
         required:true,
     },
     createdAt:{
         type: Date,
         default: Date.now,
     }
     
});
productSchema.plugin(mongoosePaginate);

//Declaração do modelo produto para aplicação
mongoose.model('Product', productSchema);