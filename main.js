const readYaml = require('read-yaml');
const express = require('express')
const fs = require('fs');
const app = express()

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
});

app.get('/all', (req, res) => {
  const allData = [];
  fs.readdir('authors/', function(err, items) {
    for (var i=0; i<items.length; i++) {
      allData.push(readYaml.sync('authors/' + items[i]));
    }
    res.send(JSON.stringify(allData, null, 2))
  });
});

app.get('/authors/:file', (req, res) => {
  readYaml('authors/' + req.params.file, function(err, d) {
    if (err) throw err;
    res.send(JSON.stringify(d, null, 2))
  });
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
