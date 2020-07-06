const express = require('express');
const mongoose = require('mongoose');

// Iniciar o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true });

// Primeira Rota
app.get('/', (req, resp) => {
  resp.send('Hello RocketSeat');
});

app.listen(3001);