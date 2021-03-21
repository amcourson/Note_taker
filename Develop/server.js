const express = require('express');
const { fstat } = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const db = require('./db/db');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./public/js/index.js"));
  });
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,"./public/notes.html"));
  });

  app.get('api/notes', (req, res) => {
    req.body.id = generateUniqueID();
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: req.body.id,
    };

  console.log("newNote:",newNote);
  console.log("req.body:",req.body);
  console.log("ID",req.body.id);
  db.push(newNote);
  res.json(db);
  console.log("db:",db);
  fs.appendFileSync("./db/db.json",JSON.stringify(newNote),(err) =>{
    if (err)
    console.log(err);
    else{
      console.log("db update");
    }
  })
    
  });



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));









app.listen(PORT,()=> console.log(`Listening on PORT:${PORT}`));