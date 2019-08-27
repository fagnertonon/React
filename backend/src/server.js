const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://ftonon:NywbgZDYIvLtmX6X@cluster0-w6zcn.mongodb.net/OminiStack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
// mongodb+srv://ftonon:<password>@cluster0-w6zcn.mongodb.net/test?retryWrites=true&w=majority
server.use(express.json());

//adicionar as rotas referente as ao arquivo routes.js
server.use(routes);

server.listen(3333)