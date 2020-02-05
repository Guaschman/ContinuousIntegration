const express = require('express')
const bodyParser = require('body-parser')

var helper = require('./webhook_functions.js')

const app = express()
const port = 3001
const fs = require('fs');
const executeBuild = require('./executeBuild.js')

executeBuild.execute()

app.use(bodyParser.json())
/*
    Handles web-hooks POST request.
*/
app.post('/', (req, res) => {
/*
    Example set_status 
    Note that status can be one of error, failure, pending, or success
    Don't forget to enter your token to token.json and remove it when push
*/
    helper.set_status(req, 'pending')
    res.send('finished');
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port)
console.log('Server is up on port ', port)
