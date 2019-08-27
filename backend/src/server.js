const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();
mongoose.connect('mongodb+srv://ftonon:39727369@cluster0-w6zcn.mongodb.net/OminiStack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json);
server.use(routes);

server.listen(3333)