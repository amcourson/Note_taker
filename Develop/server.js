const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./public/js/index.js"));
  });
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,"./public/notes.html"));
  });

  app.get('api/notes', (req, res) => {
    
  });



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));









app.listen(PORT,()=> console.log(`Listening on PORT:${PORT}`));