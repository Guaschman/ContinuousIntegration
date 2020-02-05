const express = require('express')
const bodyParser = require('body-parser')
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
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port)
console.log('Server is up on port ', port)
