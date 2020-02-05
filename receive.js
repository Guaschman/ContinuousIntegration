// Server code for issue created webhook, gets the repository url and clones the repo

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    fs = require('fs'),
    shell = require('shelljs'),
    port = 3000;

app.use(bodyParser.json());

app.post('/', function (req, res) {
    var body = req.body;
    const path = '/home/ubuntu/nodetest/repo';
    shell.cd(path);

    shell.exec('git clone ' + req.body.repository.html_url);
    console.log(body);
    fs.writeFile('result.txt',JSON.stringify(body), function (err) {
    if (err) throw err;
    console.log('Result written');
    });
    //const hook = JSON.parse(req.body);
    fs.writeFile('url.txt',req.body.issue.repository_url, function (err) {
    if (err) throw err;
    console.log('URL written?');
    });
    res.json({
        message: 'test'
    });
});

var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
