var express = require('express');
var app = express();

var msg = 'Noticias';
app.get('/', (req,res)=> {
  res.send('<h1>Home</h1>');
  
});
app.get('/tecnologia', (req,res)=> {
  res.send('<h1>' + msg + ' de Tecnologia</h1>');
  
});
app.get('/investimentos', (req,res)=> {
  res.send('<h1>' + msg + ' de Investimentos</h1>');
  
});
app.listen(3000,() => console.log('Servidor rodando na porta 3000'));