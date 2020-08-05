const express = require('express');
const mongoose = require('mongoose');
//express
const app = express();

//connect to mongodb     
const dbURI = "DATABASEURL";
  mongoose.connect(dbURI, {useNewUrlparser: true, useUnifiedTopology: true})
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));
// register view engine
app.set('view engine', 'ejs');

//listen
app.listen(3000);

app.get('/', (req, res) =>{
    res.sendFile('./views/index.html', { root: __dirname });
});


app.get('/about', (req, res) =>{
    res.sendFile('./views/about.html', { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
})
// 404 page
app.use((req, res) =>{
    res.sendFile('./views/404.html', { root: __dirname });
});