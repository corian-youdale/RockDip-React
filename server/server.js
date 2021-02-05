const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(path.join('*',__dirname)))

server.use('/api/v1/fruits', fruitRoutes)

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
