#!/usr/bin/env nodejs
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

// Rewrite para o caminho até a src
const app = next({
  dev,
  dir: './src'
});
const handle = app.getRequestHandler();

// Inicializa o servidor
app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Acesse: http://localhost:3000');
  });

});