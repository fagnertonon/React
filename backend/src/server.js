const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://ftonon:NywbgZDYIvLtmX6X@cluster0-w6zcn.mongodb.net/OminiStack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
//utilizado para a aplicação poder ser acessada a partir de qualquer endereço
server.use(cors());

server.use(express.json());

//adicionar as rotas referente as ao arquivo routes.js
server.use(routes);

server.listen(3333)