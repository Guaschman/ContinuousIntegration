const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

/*
    Handles web-hooks POST request.
*/
app.post('/', (req, res) => {

})

app.listen(port)

console.log('Server is up on port ', port)