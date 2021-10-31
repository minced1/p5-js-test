const express = require('express')
const path = require('path');

const app = express()
const port = 3000

// Express Middleware for serving static files
app.use(express.static("public"));

/*app.get('/', function(req, res) {
    res.redirect('index.html');
});*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
