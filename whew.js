const express = require('express');
const app = express();
const pug = require('pug');

const fs = require('fs');
const path = require('path');
const web_root = path.join(__dirname, '/public');
const compress = require('compression');

const HTTP_PORT = 80;

app.set('view engine', 'pug');
app.use(express.static(web_root));
app.use(compress());

// COw links to /index.php like a total scrub
app.get(['/', '/index.php'], function(req, res) {
    fs.readdir(web_root + '/comics_high', function(err, files) {
        if (err != null) {
            throw err;
        }

        files = files.map(function(file) {
            return path.parse(file).name;
        });

        let highComicsWup = files.join('\n');
        res.render('whew', {highComicsWup: highComicsWup});
    });


});

app.listen(HTTP_PORT, function() {
    console.log("Water under the Bridge (port " + HTTP_PORT + ")");
});
