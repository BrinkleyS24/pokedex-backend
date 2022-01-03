const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const port = 3000;
const morgan = require('morgan')
const methodOverride = require('method-override')


//mount middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // body parser-reads data from form submission, create req.body
app.use(function (req, res, next) {
    console.log('I run for all routes')
    next();
});
app.use(express.static('public'));
app.use(methodOverride('_method'))

app.get('/', (req, res) => res.redirect('/pokemon'));
// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { data: Pokemon });
    console.log(Pokemon[1])
});

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})
// DESTROY
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.splice(req.params.id, 1);
    res.redirect("/pokemon")
})
// UPDATE
app.put('/pokemon/:id', (req, res) => {
    Pokemon[req.params.id] = req.body;
    res.redirect('/')
})
// CREATE 
app.post('/pokemon', (req, res) => {
    Pokemon.push({
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type],
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
    });
    res.redirect('/')
})
// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs')
})
// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// LISTEN 
app.listen(port, () => {
    console.log('listening on port', port);
});        