const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const port = 3000;

// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});

// NEW
app.get ('/pokemon/:id', (req, res) => {
res.render('new.ejs')
})
// DESTROY
app.delete('/pokemon/:id', (req, res) => {

})
// UPDATE
app.put('/pokemon/:id', (req, res) => {

})
// CREATE 
app.post('/pokemon', (req, res) => {

})
// EDIT
app.get ('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs')
})
// SHOW
app.get('/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// LISTEN 
app.listen(port,() => {
    console.log('listening on port' , port);
});