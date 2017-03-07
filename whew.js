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

const getFiles = function(dir) {
    let files = fs.readdirSync(web_root + '/' + dir);

    return files.map(function(file) {
        return path.parse(file).name;
    });
};

// COw links to /index.php like a total scrub
app.get(['/', '/index.php'], function(req, res) {
    let highComicsWup = getFiles('comics_high').join('\n');
    let lowComicsWup = getFiles('comics_low').join('\n');
    let charactersWup = getFiles('characters').join('\n');

    res.render('whew', {highComicsWup: highComicsWup, lowComicsWup: lowComicsWup, charactersWup: charactersWup});
});

app.listen(HTTP_PORT, function() {
    console.log("Water under the Bridge (port " + HTTP_PORT + ")");
});
