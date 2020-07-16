const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//Iniciando o app
const app = express();
//Permite que eu envie informações no formato de json para a minha aplicação
app.use(express.json());
app.use(cors());
//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});


//iniciando os Models
requireDir('./src/models');
//Coringa que recebe todas as requisições
app.use('/api' , require('./src/routes'));


app.listen(3001);